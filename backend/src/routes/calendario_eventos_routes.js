const express = require("express");
const router = express.Router();
const conexion = require("../connection");

router.get("/", (req, res) => {
  let sql = `SELECT evento_id AS id, evento_nombre AS title, evento_fecha AS start, evento_fecha AS end FROM eventos`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = router;
