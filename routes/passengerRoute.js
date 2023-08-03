const express = require("express");
const passengerRoutes = express.Router();

const { getFlight } = require("../controller/passengerController");

passengerRoutes.route("/getFlight").post(getFlight);

module.exports = passengerRoutes;
