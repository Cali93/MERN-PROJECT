const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./api/routes/users');
const profile = require('./api/routes/profile');
const posts = require('./api/routes/posts');
const projects = require('./api/routes/projects');
const cors = require('cors');
const path = require('path');

const app = express();

// CORS (CROSS ORIGIN SHARING RESSOURCES) middleware
app.use(cors());
// body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
// DB Config
const db = require('./api/config/keys').mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./api/config/passport')(passport);

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/projects', projects);

// Server static assets if in production
if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});