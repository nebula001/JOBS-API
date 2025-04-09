const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name must be provided"],
    minLength: 3,
    maxLength: 50,
  },
});
