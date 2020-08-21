const express = require('express');
const router = express.Router();

const {
  logIn,
  signUp,
  destroySession,
} = require('../controllers/session_controller');

router.post('/api/auth', logIn);
router.post('/api/auth/signup', signUp);
router.delete('/api/auth', destroySession);

module.exports = router;
