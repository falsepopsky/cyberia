const express = require('express');
const router = express.Router();

const { calendarioRoutes } = require('../controllers/calendario_controller');

router.get('/api/calendario', calendarioRoutes);

module.exports = router;
