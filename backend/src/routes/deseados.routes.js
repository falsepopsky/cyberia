const express = require('express');
const router = express.Router();

const {
  obtenerWishlistRoutes,
  agregarWishlistRoutes,
  borrarWishlistRoutes,
} = require('../controllers/deseados_controller');

router.get('/api/wishlist/:user', obtenerWishlistRoutes);
router.post('/api/wishlist/', agregarWishlistRoutes);
router.delete('/api/wishlist/', borrarWishlistRoutes);

module.exports = router;
