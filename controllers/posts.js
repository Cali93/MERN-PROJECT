const mongoose = require('mongoose');
const Post = require('../models/Post');
const User = require('../models/User');
const Profile = require('../models/Profile');
const validatePostInput = require('../validation/post');

exports.createPost = (req, res) => {

  const {errors, isValid} = validatePostInput(req.body);

  // Check Validation
  if(!isValid){
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  const newPost = new Post({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  })

  newPost.save().then(post => res.json(post)).catch(err => res.status(404).json(err));
}

exports.getAllPosts = (req, res) => {
  let errors = {};
  Post
    .find()
    .then(posts => {
      if(!posts){
        errors.noposts = 'There are no posts';
        return res.status(404).json(errors);
      }
      res.json(posts);
    })
    .catch(err => res.status(404).json(err));
}

exports.getPost = (req, res) => {
  let errors = {};
  Post
    .findById(req.params.id)
    .then(post => {
      if(!post){
        errors.noposts = 'There is no post for this ID';
        return res.status(404).json(errors);
      }
      res.json(post);
    })
    .catch(err => res.status(404).json({error: 'There is no post for this ID'}));
}

exports.deletePost = (req, res) => {
  Profile.findOne({ user: req.user.id }).then(profile => {
    Post.findById(req.params.id)
      .then(post => {
        // Check for post owner
        if (post.user.toString() !== req.user.id) {
          return res
            .status(401)
            .json({ notauthorized: 'User not authorized' });
        }

        // Delete
        post.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
  });
}