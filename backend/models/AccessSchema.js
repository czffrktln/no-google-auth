const mongoose = require('mongoose')

const AccesSchema = new mongoose.Schema({
  word: String
})

module.exports = mongoose.model('access', AccesSchema)