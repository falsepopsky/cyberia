const auth = function (req, res, next) {
  if (req.session.admin == 0) {
    next();
  } else {
    res.status(401).send({
      status: 'error',
      message: 'No posee los permisos necesarios para ingresar a esta sección',
    });
  }
};

module.exports = auth;
