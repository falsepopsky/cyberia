const express = require('express');
const router = express.Router();

const {
  publicacionesEventos,
  publicacionesSemanaCorrienteEventos,
  publicacionIdEvento,
  agregarPublicacionEvento,
  modificarPublicacionEvento,
  borrarPublicacionEvento,
} = require('../controllers/publicaciones_evento_controller');

router.get('/eventos/', publicacionesEventos);

// Trae los eventos de la semana corriente

router.get('/eventos/thisweek/', publicacionesSemanaCorrienteEventos);

router.get('/eventos/detail/:id', publicacionIdEvento);
router.post('/eventos/', agregarPublicacionEvento);
router.put('/eventos/:id', modificarPublicacionEvento);
router.delete('/eventos/:id', borrarPublicacionEvento);

module.exports = router;
