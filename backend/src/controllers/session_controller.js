const sessionCtrl = {};
const conexion = require('../connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

sessionCtrl.logIn = (req, res) => {
  let sql = `SELECT * FROM usuarios WHERE usr_nombre = ?`;

  let value = req.body.user;

  conexion.query(sql, value, async (err, result, fields) => {
    if (err) {
      res.json({
        status: 'error',
        message:
          'No es posible acceder en este momento. Intente nuevamente en unos minutos.',
      });
    } else {
      if (result.length == 1) {
        const password = await bcrypt.compare(
          req.body.password,
          result[0].usr_password
        );

        if (password) {
          req.session.user = req.body.user;
          req.session.userId = result[0].usr_id;
          res.json({
            status: 'ok',
            message: 'sesión iniciada',
            loggedUser: {
              id: req.session.userId,
              nombre: result[0].usr_nombre,
            },
          });
        }
      } else {
        res.json({
          status: 'error',
          message: 'Usuario y/o contraseña no validos',
        });
      }
    }
  });
};

sessionCtrl.signUp = (req, res) => {
  let sqlInsert = `INSERT INTO usuarios(usr_nombre, usr_email, usr_password) VALUES( ?, ?, ?)`;
  let values = [req.body.nombreUsuario, req.body.email];
  const password = req.body.password;

  // HAGO HASH DE PASSWORD Y LO AGREGO A VALUES
  const hash = bcrypt.hashSync(password, saltRounds);
  values.push(`${hash}`);

  conexion.query(sqlInsert, values, function (err, result, fields) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al registrarse',
      });
    } else {
      res.json({
        status: 'ok',
        message: 'Usuario Creado',
      });
    }
  });
};

sessionCtrl.destroySession = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al cerrar la sesión',
      });
    } else {
      res.clearCookie('cyberia');
      res.json({
        status: 'ok',
        message: 'Sesión cerrada',
      });
    }
  });
};

module.exports = sessionCtrl;
