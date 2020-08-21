const express = require('express');
const router = express.Router();

const { enviarContactoRoutes } = require('../controllers/contacto_controller');

router.post('/api/contacto', enviarContactoRoutes);

module.exports = router;
