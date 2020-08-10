const publicacionesMusicaCtrl = {};
const conexion = require('../connection');
const path = require('path');
const fs = require('fs');
const imagesURL = process.env.IMAGES_URL;

publicacionesMusicaCtrl.publicacionesMusica = (req, res) => {
  let sqlSelect = `SELECT pm_nombre_artista AS artistCategory, pm_nombre_album AS nombreAlbum, pm_catalogo AS catalog, pm_fecha_lanzamiento AS fechaLanzamiento, pm_series AS series, pm_cover AS cover, pm_tracklist AS tracklist, pm_descripcion AS descripcion, pm_precio AS precio, pm_audio AS audio, pm_genero AS genero
    FROM producto_musica`;

  conexion.query(sqlSelect, function (err, result, fields) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al obtener las publicaciones',
      });
    } else {
      res.json(result);
    }
  });
};

publicacionesMusicaCtrl.publicacionesMusicaTarjeta = (req, res) => {
  let sql = `SELECT pm_id as id, artistas_nombre as nombreArtista, pm_nombre_album as nombreAlbum, pm_cover as cover 
   FROM producto_musica
   INNER JOIN 
   artistas ON pm_nombre_artista = artistas_id`;

  conexion.query(sql, function (err, result, fields) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al obtener las publicaciones',
      });
    } else {
      res.json(result);
    }
  });
};

publicacionesMusicaCtrl.publicacionFormateadaPorId = (req, res) => {
  let sql = `SELECT pm_id AS id, artistas_nombre AS nombreArtista, pm_nombre_album AS nombreAlbum, pm_cover as cover, pm_catalogo AS catalog, pm_fecha_lanzamiento AS fechaLanzamiento, series_nombre AS series, gnr_nombre AS genero, fa_nombre AS audio, pm_precio AS precio, pm_descripcion AS descripcion, pm_tracklist AS tracklist
    FROM producto_musica
    INNER JOIN 
    artistas ON  pm_nombre_artista = artistas_id
    INNER JOIN
    series ON pm_series = series_id
    INNER JOIN
    generos_musicales ON gnr_id = pm_genero
    INNER JOIN
    formatos_audio ON fa_id = pm_audio
    WHERE pm_id = ${req.params.id}`;
  conexion.query(sql, function (err, result, fields) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al obtener las publicaciones',
      });
    } else {
      res.json(result[0]);
    }
  });
};

publicacionesMusicaCtrl.publicacionLayer = (req, res) => {
  let sql = `SELECT pm_id AS id, pm_cover as cover, artistas_nombre AS nombreArtista, pm_nombre_album AS nombreAlbum, pm_descripcion AS descripcion
  FROM producto_musica
  INNER JOIN 
  artistas ON  pm_nombre_artista = artistas_id
  WHERE pm_series = 1
  ORDER BY id DESC LIMIT 1`;
  conexion.query(sql, function (err, result, fields) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al obtener la última publicación de layer',
      });
    } else {
      res.json(result[0]);
    }
  });
};

publicacionesMusicaCtrl.ultimasCuatroPublicaciones = (req, res) => {
  let sql = `SELECT pm_id as id, artistas_nombre as nombreArtista, pm_nombre_album as nombreAlbum, pm_cover as cover 
  FROM producto_musica
  INNER JOIN 
  artistas ON pm_nombre_artista = artistas_id
  ORDER BY pm_id DESC LIMIT 4`;

  conexion.query(sql, function (err, result, fields) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al obtener las últimas 4 publicaciones',
      });
    } else {
      res.json(result);
    }
  });
};

publicacionesMusicaCtrl.publicacionId = (req, res) => {
  let sql = `SELECT pm_nombre_artista AS artistCategory, pm_nombre_album AS nombreAlbum, pm_catalogo AS catalog, pm_fecha_lanzamiento AS fechaLanzamiento, pm_series AS series, pm_cover AS cover, pm_tracklist AS tracklist, pm_descripcion AS descripcion, pm_precio AS precio, pm_audio AS audio, pm_genero AS genero
    FROM producto_musica
    WHERE pm_id = ${req.params.id}`;
  conexion.query(sql, function (err, result, fields) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al obtener la publicacion',
      });
    } else {
      res.json(result[0]);
    }
  });
};

publicacionesMusicaCtrl.agregarPublicacion = (req, res) => {
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

  let sqlInsert = `INSERT INTO producto_musica(pm_nombre_artista, pm_nombre_album, pm_catalogo, pm_fecha_lanzamiento, pm_series, pm_cover, pm_tracklist, pm_descripcion, pm_precio, pm_audio, pm_genero)
                   VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const insertValues = [
    req.body.artistCategory,
    req.body.nombreAlbum,
    req.body.catalog,
    req.body.fechaLanzamiento,
    req.body.seriesCategory,
    `${imagesURL}${imageFileName}`,
    req.body.tracklist,
    req.body.descripcion,
    req.body.precio,
    req.body.audioCategory,
    req.body.generoCategory,
  ];
  conexion.query(sqlInsert, insertValues, function (err, result, fields) {
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

publicacionesMusicaCtrl.modificarPublicacion = (req, res) => {
  let imageFileName = '';

  let sqlUpdate = `UPDATE producto_musica
                        SET pm_nombre_artista = ?,
                            pm_nombre_album = ?,
                            pm_catalogo = ?,
                            pm_fecha_lanzamiento = ?,
                            pm_series = ?,
                            pm_tracklist = ?,
                            pm_descripcion = ?,
                            pm_precio = ?,
                            pm_audio = ?,
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

  // Si me mandan un archivo

  if (req.files) {
    //Borro el archivo de la imagen anterior
    conexion.query(
      `SELECT pm_cover FROM producto_musica WHERE pm_id = ${req.params.id}`,
      function (err, result, fields) {
        if (err) {
          console.log('Error');
        } else {
          fs.unlink(
            './public/images/' + path.basename(result[0].pm_cover),
            (err) => {
              if (err) throw err;

              console.log('Archivo borrado');
            }
          );
        }
      }
    );

    let cover = req.files.cover;

    imageFileName = Date.now() + path.extname(cover.name);

    cover.mv('./public/images/' + imageFileName, function (err) {
      if (err) {
        console.log(err);
      }
    });

    sqlUpdate += ', pm_cover = ?';
    values.push(`http://localhost:8888/images/${imageFileName}`);
  } else {
    console.log('No hay archivo');
  }

  sqlUpdate += ' WHERE pm_id = ?';
  values.push(req.params.id);

  conexion.query(sqlUpdate, values, function (err, result, fields) {
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

publicacionesMusicaCtrl.borrarPublicacion = (req, res) => {
  let sqlDelete = `DELETE FROM producto_musica WHERE pm_id = ?`;

  const values = req.params.id;

  conexion.query(sqlDelete, values, (err, result, fields) => {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al eliminar la publicación',
      });
    } else {
      res.json({
        status: 'ok',
        message: 'La publicacion ha sido eliminada correctamente',
      });
    }
  });
};

module.exports = publicacionesMusicaCtrl;
