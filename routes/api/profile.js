const express = require('express');
const router = express.Router();

// @route GET     api/profile/profile
// @description   Test profile route
// @access        Public
router.get('/profile', (req, res) => res.json({
  msg: "Profile works"
}));

module.exports = router;