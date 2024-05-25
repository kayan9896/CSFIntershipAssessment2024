const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  movieTitle: { type: String, required: true },
  director: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  opinion: { type: String }
});

module.exports = mongoose.model('Survey', surveySchema);