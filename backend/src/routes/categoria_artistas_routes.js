const express = require("express");
const router = express.Router();
const conexion = require("../connection");

router.get("/", (req, res) => {
  let sql = `SELECT artistas_id AS id, artistas_nombre AS nombre 
               FROM artistas
               ORDER BY artistas_nombre`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = router;
