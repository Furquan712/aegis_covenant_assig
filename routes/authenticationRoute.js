const express = require("express");
const authenticationRoutes = express.Router();

const { signup, login } = require("../controller/authenticationController");

authenticationRoutes.route("/signup").post(signup);

authenticationRoutes.route("/login").post(login);

module.exports = authenticationRoutes;
