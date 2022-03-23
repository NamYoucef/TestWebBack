const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  todos: [
    {
      title: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
      status: {
        type: Boolean,
        default: false,
      },
      rank: {
        type: Number,
        default: 0,
      },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
