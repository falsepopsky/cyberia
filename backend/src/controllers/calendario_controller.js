const calendarioCtrl = {};
const conexion = require('../connection');

calendarioCtrl.calendarioRoutes = (req, res) => {
  let sqlSelectCalendario = `SELECT evento_id AS id, evento_nombre AS title, evento_fecha AS start, evento_fecha AS end FROM eventos`;

  conexion.query(sqlSelectCalendario, function (err, result, fields) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = calendarioCtrl;
