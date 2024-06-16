const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/signup', authController.viewSignUp);

router.post('/signup', authController.signUp);

router.get('/login', authController.viewLogin);

router.post('/login', authController.login);

module.exports = router;