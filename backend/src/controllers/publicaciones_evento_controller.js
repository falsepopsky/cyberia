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
    let banner = req.files.bannerEvento;

    imageFileName = Date.now() + path.extname(banner.name);
    banner.mv('./public/images/' + imageFileName, function (err) {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log('No hay archivo');
  }

  let sqlInsert = `INSERT INTO eventos(evento_nombre, evento_banner, evento_fecha, evento_apertura, evento_cierre, evento_precio_puerta, evento_precio_advance, evento_lineup, evento_descripcion, evento_genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    req.body.nombre,
    `http://localhost:8888/images/${imageFileName}`,
    req.body.fecha,
    req.body.apertura,
    req.body.cierre,
    req.body.precio_puerta,
    req.body.precio_advance,
    req.body.lineup,
    req.body.descripcion,
    req.body.genero,
  ];
  conexion.query(sqlInsert, values, function (err, result, fields) {
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
  let imageFileName = '';

  let sqlUpdate = `UPDATE eventos 
    SET evento_nombre = ?, 
        evento_fecha = ?, 
        evento_apertura = ?,
        evento_cierre = ?,
        evento_precio_puerta = ?,
        evento_precio_advance = ?,
        evento_lineup = ?,
        evento_descripcion = ?, 
        evento_genero = ?`;

  const valuesUpdate = [
    req.body.nombre,
    req.body.fecha,
    req.body.apertura,
    req.body.cierre,
    req.body.precio_puerta,
    req.body.precio_advance,
    req.body.lineup,
    req.body.descripcion,
    req.body.genero,
  ];

  if (req.files) {
    conexion.query(
      `SELECT evento_banner FROM eventos WHERE evento_id = ${req.params.id}`,
      function (err, result, fields) {
        if (err) {
          console.log('Error');
        } else {
          fs.unlink(
            './public/images/' + path.basename(result[0].evento_banner),
            (err) => {
              if (err) throw err;

              console.log('Archivo borrado');
            }
          );
        }
      }
    );

    let banner = req.files.bannerEvento;
    imageFileName = Date.now() + path.extname(banner.name);
    banner.mv('./public/images/' + imageFileName, function (err) {
      if (err) {
        console.log(err);
      }
    });

    sqlUpdate += ', evento_banner = ?';
    valuesUpdate.push(`http://localhost:8888/images/${imageFileName}`);
  } else {
    console.log('No hay archivo');
  }

  sqlUpdate += ' WHERE evento_id = ?';
  valuesUpdate.push(req.params.id);

  conexion.query(sqlUpdate, valuesUpdate, function (err, result, fields) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al modificar la publicación',
      });
    } else {
      res.json({
        status: 'ok',
        message: 'Publicación modificada correctamente',
      });
    }
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
