const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const {
  publicacionesMusica,
  publicacionDetailFrontend,
  publicacionLayer,
  ultimasCuatroPublicaciones,
  obtenerPublicacion,
  agregarPublicacion,
  modificarPublicacion,
  borrarPublicacion,
} = require('../controllers/publicaciones_musica_controller');

// Obtener todas las publicaciones de música

router.get('/api/musica', publicacionesMusica);

// Trae una publicación de música para la página details en frontend.

router.get('/api/musica/publicacionmusica/:id', publicacionDetailFrontend);

// Trae solo una y última publicación de la serie Layer.

router.get('/api/musica/layer', publicacionLayer);

// Trae las últimas 4 publicaciones de música.

router.get(
  '/api/musica/ultimascuatropublicaciones',
  ultimasCuatroPublicaciones
);
router.get('/api/musica/:id', obtenerPublicacion);
router.post('/api/musica', auth, agregarPublicacion);
router.put('/api/musica/:id', auth, modificarPublicacion);
router.delete('/api/musica/:id', auth, borrarPublicacion);

module.exports = router;
