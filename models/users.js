const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  about: { type: String },
  preferences: { type: Array },
  type: { type: String, required: true },
  instrument: { type: Array },
  icon: { type: String },
  pins: { type: Array },
  level: { type: String },
});

module.exports = mongoose.model("users", userSchema);
