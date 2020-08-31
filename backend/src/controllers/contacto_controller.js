const ctrlContacto = {};
const conexion = require('../connection');

ctrlContacto.obtenerMensajesDeContactos = (req, res) => {
  const sqlObtenerContactos = 'SELECT * FROM contacto';
  conexion.query(sqlObtenerContactos, function (err, results, fields) {
    if (err) {
      res.status(404).json({
        status: 'error',
        message: 'Error al obtener los contactos',
      });
    } else {
      res.status(200).json(results);
    }
  });
};

ctrlContacto.enviarFormularioDeContacto = (req, res) => {
  const sqlInsert = `INSERT INTO contacto(con_nombre, con_email, con_comentario) VALUES (?, ?, ?)`;
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

ctrlContacto.borrarMensajeDeContacto = (req, res) => {
  const sqlDeleteContacto = `DELETE FROM contacto where = ?`;
  let valuesIdContact = req.params.id;

  conexion.query(sqlDeleteContacto, valuesIdContact, function (
    err,
    results,
    fields
  ) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al borrar el contacto',
      });
    } else {
      res.status(200).json({
        status: 'ok',
        message: 'El contacto ha sido eliminado correctamente',
      });
    }
  });
};

module.exports = ctrlContacto;
