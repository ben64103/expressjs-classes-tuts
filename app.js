const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
require('dotenv').config();


const connectDB = require('./db/connect');
const auth = require('./routes/auth');

const port = process.env.PORT;
app.use('/home', auth);
 
app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to our website</h1>');
});
app.listen(port, () => {
  console.log('server running on port', port);
});
connectDB(process.env.MONGO_URI);
