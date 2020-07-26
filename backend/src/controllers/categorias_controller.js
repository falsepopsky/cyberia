const categoriasCtrl = {};
const conexion = require('../connection');

categoriasCtrl.categoriasArtistasRoutes = (req, res) => {
  let sql = `SELECT artistas_id AS id, artistas_nombre AS nombre 
                 FROM artistas
                 ORDER BY artistas_nombre`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
};

categoriasCtrl.categoriasAudiosRoutes = (req, res) => {
  let sql = `SELECT fa_id AS id, fa_nombre AS nombre 
               FROM formatos_audio
               ORDER BY fa_nombre`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
};

categoriasCtrl.categoriasGenerosRoutes = (req, res) => {
  let sql = `SELECT gnr_id AS id, gnr_nombre AS nombre 
    FROM generos_musicales
    ORDER BY gnr_nombre`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
};

categoriasCtrl.categoriasSeriesRoutes = (req, res) => {
  let sql = `SELECT series_id AS id, series_nombre AS nombre 
               FROM series
               ORDER BY series_nombre`;

  conexion.query(sql, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
};

module.exports = categoriasCtrl;
