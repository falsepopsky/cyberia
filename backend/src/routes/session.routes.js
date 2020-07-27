const express = require('express');
const router = express.Router();

const {
  logIn,
  signUp,
  destroySession,
} = require('../controllers/session_controller');

router.post('/auth/', logIn);
router.post('/auth/signup/', signUp);
router.delete('/auth/', destroySession);

module.exports = router;
