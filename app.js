const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb://localhost:27017/NodeAuth';
// 'mongodb+srv://Benjamin:benjamin101@cluster0.eqnu0lq.mongodb.net/node-auth';
mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(3000, () => {
      try {
        console.log('server running on port 3000');
      } catch (error) {
        res.status(404).json({ msg: error });
      }
    });
    console.log('...db connected');
  })
  .catch(error => {
    console.log(error);
  });

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);
// app.get('/signup', (req, res) => res.render('signup'))
