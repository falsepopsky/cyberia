const express = require('express');
const router = express.Router();

const {
  categoriasArtistasRoutes,
  categoriasAudiosRoutes,
  categoriasGenerosRoutes,
  categoriasSeriesRoutes,
} = require('../controllers/categorias_controller');

router.get('/artistas', categoriasArtistasRoutes);
router.get('/formatosaudio', categoriasAudiosRoutes);
router.get('/generosmusicales', categoriasGenerosRoutes);
router.get('/series', categoriasSeriesRoutes);

module.exports = router;
