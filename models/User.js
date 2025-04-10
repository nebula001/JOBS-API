const mongoose = require("mongoose");
const stricterEmailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name must be provided"],
    minLength: 3,
    maxLength: 50,
  },

  email: {
    type: String,
    required: [true, "Email Id must be provided"],
    match: [stricterEmailRegex, "Please provide valid email address"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "password must be provided"],
    minLength: 4,
  },
});

module.exports = mongoose.model("User", userSchema);
