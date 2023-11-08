const express = require('express');
const { signUpUser,loginUser, getUser } = require('../controllers/auth');
const { verifyToken } = require('../middleware/VariryUser');
require('dotenv').config();

const router = express.Router();


router.post('/signup', signUpUser)
router.post('/login', loginUser)
router.get('/getUser', verifyToken, getUser)

module.exports = router;
