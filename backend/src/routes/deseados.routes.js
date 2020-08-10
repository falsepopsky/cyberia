const express = require('express');
const router = express.Router();

const {
  obtenerWishlistRoutes,
  agregarWishlistRoutes,
  borrarWishlistRoutes,
} = require('../controllers/deseados_controller');

router.get('/wishlist/:user', obtenerWishlistRoutes);
router.post('/wishlist/', agregarWishlistRoutes);
router.delete('/wishlist/', borrarWishlistRoutes);

module.exports = router;
