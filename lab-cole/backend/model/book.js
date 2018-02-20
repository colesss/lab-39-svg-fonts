'use strict';

const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  seriesName: {type: String, required: false},
  seriesPosition: {type: Number, required: false},
  possess: {type: Boolean},
});

module.exports = mongoose.model('books', bookSchema);