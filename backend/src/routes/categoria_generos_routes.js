const express = require("express");
const router = express.Router();
const conexion = require("../connection");

router.get("/", (req, res) => {
  let sql = `SELECT gnr_id AS id, gnr_nombre AS nombre 
               FROM generos_musicales
               ORDER BY gnr_nombre`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = router;
