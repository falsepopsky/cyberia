const express = require("express");
const router = express.Router();
const conexion = require("../connection");

router.get("/", (req, res) => {
  let sql = `SELECT fa_id AS id, fa_nombre AS nombre 
               FROM formatos_audio
               ORDER BY fa_nombre`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = router;
