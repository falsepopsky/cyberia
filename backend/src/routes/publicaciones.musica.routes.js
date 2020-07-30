const express = require('express');
const router = express.Router();
const auth = require('../helpers/auth');

const {
  publicacionesMusica,
  publicacionesMusicaTarjeta,
  publicacionFormateadaPorId,
  publicacionLayer,
  ultimasCuatroPublicaciones,
  publicacionId,
  agregarPublicacion,
  modificarPublicacion,
  borrarPublicacion,
} = require('../controllers/publicaciones_musica_controller');

// Obtener todas las publicaciones de música

router.get('/musica/', publicacionesMusica);

// Formateado para la tarjeta Música

router.get('/musica/listamusicaroutes', publicacionesMusicaTarjeta);

// Formateado para la publicación Música

router.get('/musica/publicacionmusica/:id', publicacionFormateadaPorId);

// Trae la última publicación de Layer

router.get('/musica/layer', publicacionLayer);

// Trae las últimas 4 publicaciones de música en general

router.get('/musica/ultimascuatropublicaciones', ultimasCuatroPublicaciones);
router.get('/musica/:id', publicacionId);
router.post('/musica/', auth, agregarPublicacion);
router.put('/musica/:id', auth, modificarPublicacion);
router.delete('/musica/:id', auth, borrarPublicacion);

module.exports = router;
