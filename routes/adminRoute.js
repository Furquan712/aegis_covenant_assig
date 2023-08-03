const express = require("express");
const adminRoutes = express.Router();

const { addOneFlight } = require("../controller/adminController");

adminRoutes.route("/addOneFlight").post(addOneFlight);

module.exports = adminRoutes;
