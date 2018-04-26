var mongoose = require('mongoose');


var empSchema = new mongoose.Schema({
  name: String,
  email: String
});


module.exports = mongoose.model('Emp', empSchema);