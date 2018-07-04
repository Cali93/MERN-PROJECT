const express = require('express');
const router = express.Router();

// @route GET     api/posts/posts
// @description   Test posts route
// @access        Public
router.get('/posts', (req, res) => res.json({
  msg: "Posts works"
}));

module.exports = router;