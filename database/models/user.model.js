const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  room: { type: String, unique: true, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
