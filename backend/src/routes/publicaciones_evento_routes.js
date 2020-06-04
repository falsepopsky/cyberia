const express = require("express");
const conexion = require("../connection");
const router = express.Router();

router.get("/", (req, res) => {
  sql = `SELECT evento_id AS id, evento_fecha AS nombreDia, evento_fecha AS diaMes, evento_banner as bannerEvento FROM eventos`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
});

// Trae los eventos de la semana corriente

router.get("/thisweek", (req, res) => {
  sql = `SELECT evento_id AS id, evento_fecha AS nombreDia, evento_fecha AS diaMes, evento_banner as bannerEvento FROM eventos WHERE evento_fecha between cast(timestampadd(SQL_TSI_DAY, -(dayofweek(curdate())-2), curdate()) as date) and cast(timestampadd(SQL_TSI_DAY, 7-(dayofweek(curdate())-1), curdate()) as date)`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
});

router.get("/detail/:id", (req, res) => {
  sql = `SELECT evento_id AS id, evento_nombre AS tituloEvento, evento_banner AS bannerEvento, evento_fecha AS fecha, evento_apertura AS horarioApertura, evento_cierre AS horarioCierre, evento_precio_puerta AS precioPuerta, evento_precio_advance AS precioAdvance, evento_genero AS generos, evento_lineup AS lineUp, evento_descripcion AS descripcion
  FROM eventos
  WHERE evento_id = ${req.params.id}`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.json(result[0]);
  });
});

router.post("/", (req, res) => {
  let sql = `INSERT INTO eventos (evento_nombre, evento_banner, evento_lineup, evento_descripcion, evento_apertura, evento_cierre, evento_precio_puerta, evento_precio_advance, evento_fecha)
  VALUES (?, ?, ? ,?, ?, ?, ?, ?, ?, ?, ?)`;

  let params = [
    req.query.nombre,
    req.query.banner,
    req.query.lineup,
    req.query.descripcion,
    req.query.apertura,
    req.query.cierre,
    req.query.precio_puerta,
    req.query.precio_advance,
    req.query.fecha,
  ];

  conexion.query(sql, params, function (err, result, fields) {
    let respuesta;
    if (err) {
      respuesta = {
        status: "error",
        message: "Error al guardar el evento",
      };
    } else {
      respuesta = {
        status: "ok",
        message: "Se agregó el evento",
      };
    }
    res.json(respuesta);
  });
});

router.put("/:id", (req, res) => {
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
        status: "error",
        message: "Error al modificar el evento",
      };
    } else {
      respuesta = {
        status: "ok",
        message: "El evento se modifico con exito",
      };
    }

    res.json(respuesta);
  });
});

router.delete("/:id", (req, res) => {
  conexion.query(
    "DELETE FROM eventos WHERE evento_id =" + req.params.id,
    function (err, result, fields) {
      let respuesta;

      if (err) {
        respuesta = {
          status: "error",
          message: "Error al borrar el evento",
        };
      } else {
        respuesta = {
          status: "ok",
          message: "El evento se ha borrado con exito",
        };
      }

      res.json(respuesta);
    }
  );
});

module.exports = router;
