const express = require('express');
const router = express.Router();
const passport = require('passport');

const userCtrl = require('../../controllers/users');
// @route GET     api/users/register
// @description   Register user
// @access        Public
router.post('/register', userCtrl.register);

// @route GET     api/users/login
// @description   Login user // Returning the JWToken
// @access        Public

router.post('/login', userCtrl.login);

// @route GET     api/users/current
// @description   Return current user
// @access        Private
router.get('/current', passport.authenticate('jwt', {
  session: false
}), userCtrl.current);

// @route GET     api/users/user
// @description   Test users route
// @access        Public
// router.get('/user', userCtrl.test);

module.exports = router;