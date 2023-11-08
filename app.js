const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI =
  'mongodb+srv://Benjamin:benjamin101@cluster0.eqnu0lq.mongodb.net/node-auth';
mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(3030);
    console.log('...db connected');
  })
  .catch(error => {
    console.log(error);
  });

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
