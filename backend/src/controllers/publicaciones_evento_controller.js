const eventosCtrl = {};
const conexion = require('../connection');
const path = require('path');
const fs = require('fs');

eventosCtrl.publicacionesEventos = (req, res) => {
  let sql = `SELECT evento_id AS id, evento_fecha AS nombreDia, evento_fecha AS diaMes, evento_banner as bannerEvento FROM eventos`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
};

eventosCtrl.publicacionesSemanaCorrienteEventos = (req, res) => {
  let sql = `SELECT evento_id AS id, evento_fecha AS nombreDia, evento_fecha AS diaMes, evento_banner as bannerEvento FROM eventos WHERE evento_fecha between cast(timestampadd(SQL_TSI_DAY, -(dayofweek(curdate())-2), curdate()) as date) and cast(timestampadd(SQL_TSI_DAY, 7-(dayofweek(curdate())-1), curdate()) as date)`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
};

eventosCtrl.publicacionIdEvento = (req, res) => {
  let sql = `SELECT evento_id AS id, evento_nombre AS tituloEvento, evento_banner AS bannerEvento, evento_fecha AS fecha, evento_apertura AS horarioApertura, evento_cierre AS horarioCierre, evento_precio_puerta AS precioPuerta, evento_precio_advance AS precioAdvance, evento_genero AS generos, evento_lineup AS lineUp, evento_descripcion AS descripcion
    FROM eventos
    WHERE evento_id = ?`;
  let values = req.params.id;

  conexion.query(sql, values, function (err, result, fields) {
    if (err) throw err;
    res.json(result[0]);
  });
};

eventosCtrl.agregarPublicacionEvento = (req, res) => {
  let imageFileName = '';

  if (req.files) {
    let cover = req.files.cover;

    imageFileName = Date.now() + path.extname(cover.name);
    cover.mv('./public/images/' + imageFileName, function (err) {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log('No hay archivo');
  }

  let sql = `INSERT INTO eventos (evento_nombre, evento_banner, evento_fecha, evento_apertura, evento_cierre, evento_precio_puerta, evento_precio_advance, evento_lineup, evento_descripcion, evento_genero)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  let params = [
    req.query.nombre,
    `http://localhost:8888/images/${imageFileName}`,
    req.query.fecha,
    req.query.apertura,
    req.query.cierre,
    req.query.precio_puerta,
    req.query.precio_advance,
    req.query.lineup,
    req.query.descripcion,
    req.query.genero,
  ];

  conexion.query(sql, params, function (err, result, fields) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al realizar la publicación',
      });
    } else {
      res.json({
        status: 'ok',
        message: 'Publicación realizada correctamente',
      });
    }
  });
};

eventosCtrl.modificarPublicacionEvento = (req, res) => {
  let sql = `UPDATE eventos 
    SET evento_id = ?, 
    evento_nombre = ?, 
    evento_banner = ?, 
    evento_lineup = ?, 
    evento_descripcion = ?, 
    evento_apertura = ?, 
    evento_cierre = ?, 
    evento_precio_puerta = ?, 
    evento_precio_advance = ?,
    evento_fecha = ?
    WHERE evento_id = ?`;
  let params = [
    req.body.id,
    req.body.nombre,
    req.body.banner,
    req.body.lineup,
    req.body.descripcion,
    req.body.apertura,
    req.body.cierre,
    req.body.precio_puerta,
    req.body.precio_advance,
    req.body.fecha,
    req.params.id,
  ];
  conexion.query(sql, params, function (err, result, fields) {
    let respuesta;

    if (err) {
      respuesta = {
        status: 'error',
        message: 'Error al modificar el evento',
      };
    } else {
      respuesta = {
        status: 'ok',
        message: 'El evento se modifico con exito',
      };
    }

    res.json(respuesta);
  });
};

eventosCtrl.borrarPublicacionEvento = (req, res) => {
  let sqlDelete = `DELETE FROM eventos WHERE evento_id = ?`;
  const valueId = req.params.id;

  conexion.query(sqlDelete, valueId, function (err, result, fields) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al eliminar el evento',
      });
    } else {
      res.json({
        status: 'ok',
        message: 'El Evento ha sido eliminado correctamente',
      });
    }
  });
};

module.exports = eventosCtrl;
