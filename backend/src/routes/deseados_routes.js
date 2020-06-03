const express = require("express");
const conexion = require("../connection");
const router = express.Router();

router.get("/:user", (req, res) => {
    let sql = `SELECT pm_nombre_artista, pm_nombre_album, pm_cover
    FROM lista_deseados
    INNER JOIN
    producto_musica ON pm_id = ld_pm_id
    WHERE ld_usr_id = ?`;

    conexion.query(sql, function (err, result, fields) {
        if (err) throw err;

        res.json(result);
    });
});