const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  img: String,
  codelink: String,
  livelink: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
module.exports = Portfolio;
