const express = require('express');
const router = express.Router();

// @route GET     api/users/user
// @description   Test users route
// @access        Public
router.get('/user', (req, res) => res.json({
  msg: "Users works"
}));

module.exports = router;