const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const {
  obtenerTodosLosEventos,
  obtenerEventosDeSemanaCorriente,
  obtenerUnEvento,
  agregarUnEvento,
  modificarUnEvento,
  borrarUnEvento,
} = require('../controllers/publicaciones_evento_controller');

router.get('/api/eventos', obtenerTodosLosEventos);

// Trae los eventos de la semana corriente

router.get('/api/eventos/thisweek', obtenerEventosDeSemanaCorriente);

router.get('/api/eventos/:id', obtenerUnEvento);
router.post('/api/eventos', auth, agregarUnEvento);
router.put('/api/eventos/:id', auth, modificarUnEvento);
router.delete('/api/eventos/:id', auth, borrarUnEvento);

module.exports = router;
