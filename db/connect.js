const mongoose = require('mongoose')

const connectDB = async (url) => {
  try {
    await mongoose.connect(url)
    console.log('...connected to the database')
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connectDB;