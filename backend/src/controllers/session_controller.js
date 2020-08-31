const sessionCtrl = {};
const conexion = require('../connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

sessionCtrl.logIn = (req, res) => {
  let sqlSelectUser = `SELECT * FROM usuarios WHERE usr_nombre = ?`;

  let username = req.body.user;

  conexion.query(sqlSelectUser, username, async (err, result, fields) => {
    if (err) {
      res.status(500).json({
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
          req.session.userId = result[0].usr_id;
          req.session.user = result[0].usr_nombre;
          req.session.admin = result[0].usr_admin;
          res.status(200).json({
            status: 'ok',
            message: 'sesión iniciada',
            usuarioLogueado: {
              id: req.session.userId,
              nombre: req.session.user,
              admin: req.session.admin,
            },
          });
        }
      } else {
        res.status(404).json({
          status: 'error',
          message: 'Usuario y/o contraseña no validos',
        });
      }
    }
  });
};

sessionCtrl.signUp = async (req, res) => {
  let sqlInsertUser = `INSERT INTO usuarios(usr_nombre, usr_email, usr_password) VALUES(?, ?, ?)`;
  let values = [req.body.nombreUsuario, req.body.email];
  const password = req.body.password;

  // HAGO HASH DE PASSWORD Y LO AGREGO A VALUES
  const hash = await bcrypt.hashSync(password, saltRounds);
  values.push(`${hash}`);

  conexion.query(sqlInsertUser, values, function (err, result, fields) {
    if (err) {
      res.status(500).json({
        status: 'error',
        message: 'Error al registrarse',
      });
    } else {
      res.status(200).json({
        status: 'ok',
        message: 'Usuario Creado',
      });
    }
  });
};

sessionCtrl.destroySession = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({
        status: 'error',
        message: 'Error al cerrar la sesión',
      });
    } else {
      res.clearCookie('cyberia');
      res.status(200).json({
        status: 'ok',
        message: 'Sesión cerrada',
      });
    }
  });
};

module.exports = sessionCtrl;
