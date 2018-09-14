const express = require('express');
const router = express.Router();

const passport = require('passport');

const profileCtrl = require('../controllers/profile');

// @route GET     api/profile/profile
// @description   Test profile route
// @access        Public
router.get('/profile', (req, res) => res.json({
  msg: "Profile works"
}));

// @route GET     api/profile/handle/:handle
// @description   Get profile by handle
// @access        public
router.get('/handle/:handle', profileCtrl.getProfileByHandle);

// @route GET     api/profile/user/:userid
// @description   Get profile by user id
// @access        public
router.get('/user/:userid', profileCtrl.getProfileById);

// @route GET     api/profile
// @description   Get current user's profile
// @access        private
router.get('/', passport.authenticate('jwt', {session: false}), profileCtrl.getCurrentProfile);

// @route GET     api/profile/all
// @description   Get all profiles
// @access        public
router.get('/all', profileCtrl.getAllProfiles);

// @route POST    api/profile
// @description   Create or update current user's profile
// @access        private
router.post('/', passport.authenticate('jwt', {session: false}), profileCtrl.createProfile);

// @route POST    api/profile/education
// @description   Add experience to profile
// @access        private
router.post('/experience', passport.authenticate('jwt', {session: false}), profileCtrl.addExperience);

// @route POST    api/profile/education
// @description   Add education to profile
// @access        private
router.post('/education', passport.authenticate('jwt', {session: false}), profileCtrl.addEducation);

// @route delete  api/profile/experience/:exp_id
// @description   Delete experience from profile
// @access        private
router.delete('/experience/:exp_id', passport.authenticate('jwt', {session: false}), profileCtrl.deleteExperience);

// @route delete  api/profile/education/:edu_id
// @description   Delete education from profile
// @access        private
router.delete('/education/:edu_id', passport.authenticate('jwt', {session: false}), profileCtrl.deleteEducation);

// @route delete  api/profile
// @description   Delete user and profile
// @access        private
router.delete('/', passport.authenticate('jwt', {session: false}), profileCtrl.deleteUserAndProfile);


module.exports = router;