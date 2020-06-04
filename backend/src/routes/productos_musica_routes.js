const express = require("express");
const conexion = require("../connection");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.post("/", (req, res) => {
  let imageFileName = "";

  if (req.files) {
    let cover = req.files.cover;

    imageFileName = Date.now() + path.extname(cover.name);
    cover.mv("../backend/public/images/" + imageFileName, function (err) {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log("No hay archivo");
  }

  let sqlInsert = `INSERT INTO producto_musica(pm_nombre_artista, pm_nombre_album, pm_catalogo, pm_fecha_lanzamiento, pm_series, pm_cover, pm_tracklist, pm_descripcion, pm_precio, pm_audio, pm_genero)
                   VALUES(
                    ${req.body.artistCategory},
                    '${req.body.nombreAlbum}',
                    '${req.body.catalog}',
                    '${req.body.fechaLanzamiento}',
                    ${req.body.seriesCategory},
                    '${process.env.IMAGES_URL + imageFileName}',
                    '${req.body.tracklist}',
                    '${req.body.descripcion}',
                    ${req.body.precio},
                    ${req.body.audioCategory},
                    ${req.body.generoCategory})`;

  conexion.query(sqlInsert, function (err, result, fields) {
    if (err) {
      res.json({
        status: "error",
        message: "Error al realizar la publicación",
      });
    } else {
      res.json({
        status: "ok",
        message: "Publicación realizada correctamente",
      });
    }
  });
});

router.put("/:id", (req, res) => {
  let imageFileName = "";

  let sqlUpdate = `UPDATE producto_musica
                      SET pm_nombre_artista = ?
                          pm_nombre_album
                          pm_catalogo = ? 
                          pm_fecha_lanzamiento = ?
                          pm_series = ?
                          pm_tracklist = ?
                          pm_descripcion = ?
                          pm_precio = ?
                          pm_audio = ?
                          pm_genero = ?`;

  let values = [
    req.body.artistCategory,
    req.body.nombreAlbum,
    req.body.catalog,
    req.body.fechaLanzamiento,
    req.body.seriesCategory,
    req.body.tracklist,
    req.body.descripcion,
    req.body.precio,
    req.body.audioCategory,
    req.body.generoCategory,
  ];

  if (req.files) {
    //Borro el archivo de la imagen anterior
    conexion.query(
      "SELECT pm_cover FROM producto_musica WHERE pm_id=" + req.params.id,
      function (err, result, fields) {
        if (err) {
          console.log("Error");
        } else {
          fs.unlink(
            "../backend/public/images/" + path.basename(result[0].pm_cover),
            (err) => {
              if (err) throw err;

              console.log("Archivo borrado");
            }
          );
        }
      }
    );

    let cover = req.files.cover;

    imageFileName.mv = Date.now() + path.extname(productImage.name);

    cover.mv("../backend/public/images/" + imageFilename, function (err) {
      if (err) {
        console.log(err);
      }
    });

    sqlUpdate += ", pm_cover = ?";
    values.push(process.env.IMAGES_URL + imageFileName);
  } else {
    console.log("No hay archivo");
  }

  sqlUpdate += " WHERE pm_id = ?";
  values.push(req.params.id);

  conexion.query(sqlUpdate, values, function (err, result, fields) {
    if (err) {
      res.json({
        status: "error",
        message: "Error al modificar la publicación",
      });
    } else {
      res.json({
        status: "ok",
        message: "Publicación modificada correctamente",
      });
    }
  });
});

router.delete("/:id", (req, res) => {
  conexion.query("DELETE", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
