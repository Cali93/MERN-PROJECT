const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const postsCtrl = require('../../controllers/posts');

// @route GET     api/posts/posts
// @description   Test posts route
// @access        Public
router.get('/posts', (req, res) => res.json({
  msg: "Posts works"
}));

// @route POST    api/posts
// @description   Create a new post
// @access        Private
router.post('/', passport.authenticate('jwt', {session: false}), postsCtrl.createPost);

// @route GET     api/posts
// @description   Get all the posts
// @access        Public
router.get('/', postsCtrl.getAllPosts);

// @route GET     api/posts/:id
// @description   Get a single post
// @access        Public
router.get('/:id', postsCtrl.getPost);

// @route GET     api/posts/:id
// @description   Delete a post
// @access        Public
router.delete('/:id', passport.authenticate('jwt', {session: false}), postsCtrl.deletePost);



module.exports = router;