const express = require('express');
const router = express.Router();
const auth = require('../helpers/auth');

const {
  publicacionesEventos,
  publicacionesSemanaCorrienteEventos,
  publicacionIdEvento,
  agregarPublicacionEvento,
  modificarPublicacionEvento,
  borrarPublicacionEvento,
} = require('../controllers/publicaciones_evento_controller');

router.get('/api/eventos/', publicacionesEventos);

// Trae los eventos de la semana corriente

router.get('/api/eventos/thisweek/', publicacionesSemanaCorrienteEventos);

router.get('/api/eventos/detail/:id', publicacionIdEvento);
router.post('/api/eventos/', auth, agregarPublicacionEvento);
router.put('/api/eventos/:id', auth, modificarPublicacionEvento);
router.delete('/api/eventos/:id', auth, borrarPublicacionEvento);

module.exports = router;
