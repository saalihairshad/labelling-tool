const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newSchema = new Schema({
  id_str: String,
  full_text: String,
}, { strict: false });

module.exports = mongoose.model('Itunes', newSchema);
