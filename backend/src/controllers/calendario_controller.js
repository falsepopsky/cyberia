const calendarioCtrl = {};
const conexion = require('../connection');

calendarioCtrl.calendarioRoutes = (req, res) => {
  let sqlSelect = `SELECT evento_id AS id, evento_nombre AS title, evento_fecha AS start, evento_fecha AS end FROM eventos`;

  conexion.query(sqlSelect, function (err, result, fields) {
    if (err) throw err;

    res.json(result);
  });
};

module.exports = calendarioCtrl;
