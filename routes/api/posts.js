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

// @route GET     api/posts/like/:id
// @description   Like a post
// @access        Private
router.post('/like/:id', passport.authenticate('jwt', {session: false}), postsCtrl.likePost);

// @route GET     api/posts/unlike/:id
// @description   Unlike a post
// @access        Private
router.post('/unlike/:id', passport.authenticate('jwt', {session: false}), postsCtrl.unlikePost);

// @route GET     api/posts/comment/:id
// @description   Add a comment to a post
// @access        Private
router.post('/comment/:id', passport.authenticate('jwt', {session: false}), postsCtrl.commentPost);

// @route GET     api/posts/comment/:id/:comment_id
// @description   Delete a comment from post
// @access        Public
router.delete('/comment/:id/:commentid', passport.authenticate('jwt', {session: false}), postsCtrl.deletePostComment);



module.exports = router;