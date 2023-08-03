const mongoose = require("mongoose");
const emailValidator = require("email-validator");

URL = process.env.URL;
mongoose
  .connect(URL)
  .then(function (e) {
    console.log("Authentication Database connected Successfully---!");
  })
  .catch(function (err) {
    console.log(err);
  });

const AuthScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: function () {
      return emailValidator.validate(this.email);
    },
  },
  contact: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  role: {
    type: String,
    required: true,
  },
});

const AuthModel = new mongoose.model("Auths", AuthScheme);
module.exports = AuthModel;
