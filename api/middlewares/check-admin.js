const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('../models/User');
const keys = require('../config/keys');

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        // the condition could be user.memberType == 'admin' so that the user can access admin routes
        if (user.memberType === 'Admin') {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  }))
}