const express = require('express');
const router = express.Router();

const {
  categoriasArtistasRoutes,
  categoriasAudiosRoutes,
  categoriasGenerosRoutes,
  categoriasSeriesRoutes,
} = require('../controllers/categorias_controller');

router.get('/api/categorias/artistas', categoriasArtistasRoutes);
router.get('/api/categorias/formatosaudio', categoriasAudiosRoutes);
router.get('/api/categorias/generosmusicales', categoriasGenerosRoutes);
router.get('/api/categorias/series', categoriasSeriesRoutes);

module.exports = router;
