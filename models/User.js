const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 150
    },
    email: {
      type: String,
      maxlength: 150,
      unique: true
    },
    message: {
      type: String,
      maxlength: 150
    }
  },
  { collection: "users" }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
