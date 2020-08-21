const categoriasCtrl = {};
const conexion = require('../connection');

categoriasCtrl.categoriasArtistasRoutes = (req, res) => {
  const sqlSelectArtists = `SELECT artistas_id AS id, artistas_nombre AS nombre FROM artistas ORDER BY artistas_nombre`;

  conexion.query(sqlSelectArtists, function (err, result, fields) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(result);
    }
  });
};

categoriasCtrl.categoriasAudiosRoutes = (req, res) => {
  const sqlSelectAudios = `SELECT fa_id AS id, fa_nombre AS nombre FROM formatos_audio ORDER BY fa_nombre`;

  conexion.query(sqlSelectAudios, function (err, result, fields) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(result);
    }
  });
};

categoriasCtrl.categoriasGenerosRoutes = (req, res) => {
  const sqlSelectGeneros = `SELECT gnr_id AS id, gnr_nombre AS nombre FROM generos_musicales ORDER BY gnr_nombre`;

  conexion.query(sqlSelectGeneros, function (err, result, fields) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(result);
    }
  });
};

categoriasCtrl.categoriasSeriesRoutes = (req, res) => {
  const sqlSelectSeries = `SELECT series_id AS id, series_nombre AS nombre FROM series ORDER BY series_nombre`;

  conexion.query(sqlSelectSeries, function (err, result, fields) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = categoriasCtrl;
