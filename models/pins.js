const mongoose = require("mongoose");

const pinSchema = mongoose.Schema({
  author: { type: String, required: true },
  position: { type: Object, required: true },
  title: { type: String },
  description: { type: String },
  type: { type: String },
});

module.exports = mongoose.model("pins", pinSchema);
