const mongoose = require("mongoose");
const emailValidator = require("email-validator");

URL = process.env.URL;
mongoose
  .connect(URL)
  .then(function (e) {
    console.log("FlightDetails Database connected Successfully---!");
  })
  .catch(function (err) {
    console.log(err);
  });

const flightDetailsScheme = new mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  fligts: {},
});

const flightDetailsModel = new mongoose.model(
  "FlightDetails",
  flightDetailsScheme
);
module.exports = flightDetailsModel;
