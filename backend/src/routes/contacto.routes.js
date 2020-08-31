const express = require('express');
const router = express.Router();
const auth = require('../helpers/auth');

const {
  obtenerMensajesDeContactos,
  enviarFormularioDeContacto,
  borrarMensajeDeContacto,
} = require('../controllers/contacto_controller');

router.get('/api/contacto', auth, obtenerMensajesDeContactos);
router.post('/api/contacto', enviarFormularioDeContacto);
router.delete('api/contacto/:id', auth, borrarMensajeDeContacto);

module.exports = router;
