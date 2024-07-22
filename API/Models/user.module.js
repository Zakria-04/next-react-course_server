const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userPass: {
    type: String,
  },
  phone: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const USER_MODEL = model("user", UserSchema);
module.exports = USER_MODEL;
