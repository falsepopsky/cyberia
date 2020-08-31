const express = require('express');
const router = express.Router();
const auth = require('../helpers/auth');

const {
  publicacionesMusica,
  publicacionFormateadaPorId,
  publicacionLayer,
  ultimasCuatroPublicaciones,
  obtenerPublicacion,
  agregarPublicacion,
  modificarPublicacion,
  borrarPublicacion,
} = require('../controllers/publicaciones_musica_controller');

// Obtener todas las publicaciones de música

router.get('/api/musica/publicacionesmusica', publicacionesMusica);

// Formateado para la publicación Música

router.get('/api/musica/publicacionmusica/:id', publicacionFormateadaPorId);

// Trae la última publicación de Layer

router.get('/api/musica/layer', publicacionLayer);

// Trae las últimas 4 publicaciones de música en general

router.get(
  '/api/musica/ultimascuatropublicaciones',
  ultimasCuatroPublicaciones
);
router.get('/api/musica/:id', obtenerPublicacion);
router.post('/api/musica/', auth, agregarPublicacion);
router.put('/api/musica/:id', auth, modificarPublicacion);
router.delete('/api/musica/:id', auth, borrarPublicacion);

module.exports = router;
