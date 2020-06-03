const express = require("express");
const router = express.Router();
const conexion = require("../connection");

router.get("/", (req, res) => {
  let sql = `SELECT series_id AS id, series_nombre AS nombre 
               FROM series
               ORDER BY series_nombre`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = router;
