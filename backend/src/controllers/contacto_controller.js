const ctrlContacto = {};
const conexion = require('../connection');

ctrlContacto.enviarContactoRoutes = (req, res) => {
  let sqlInsert = `INSERT INTO contacto(con_nombre, con_email, con_comentario) VALUES (?, ?, ?)`;
  let values = [req.body.name, req.body.email, req.body.message];

  conexion.query(sqlInsert, values, function (err, results, fields) {
    if (err) {
      res
        .status(422)
        .json({ status: 'error', message: 'Error al enviar contacto' });
    } else {
      res.status(200).json({
        status: 'ok',
        message: 'Contacto recibido !',
      });
    }
  });
};

module.exports = ctrlContacto;
