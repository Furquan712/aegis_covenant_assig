const express = require("express");
const AuthModel = require("../model/authenticationModel");
const jwt = require("jsonwebtoken");

JWT_KEY = process.env.JWT_KEY;

module.exports.signup = async function singup(req, res) {
  try {
    let singupData = req.body;
    let storeSignupData = await AuthModel.create(singupData);
    if (storeSignupData) {
      res.send({
        message: "Singup Successfully",
        data: storeSignupData,
        status: 200,
      });
    } else {
      res.send({
        message: "You are not Singup",
        data: storeSignupData,
        status: 400,
      });
    }
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

module.exports.login = async function login(req, res) {
  try {
    const userData = req.body;
    if (userData.email) {
      let user = await AuthModel.findOne({ email: userData.email });
      if (user) {
        if (user.password == userData.password) {
          let uid = user["_id"];
          let token = jwt.sign({ payload: uid }, JWT_KEY);
          res.cookie("isLoggedIn", token, { httpOnly: true });
          if (user.role == "Passenger") {
            return res.status(200).send({
              message: "User Is Logged In",
              status: 0,
              data: user,
            });
          }
          if (user.role == "Admin") {
            return res.status(200).send({
              message: "User Is Logged In",
              status: 1,
              data: user,
            });
          }
        } else {
          res.send({
            message: "Wrong Credentials",
          });
        }
      } else {
        res.send({
          message: "User Not Found",
        });
      }
    } else {
      res.send({
        message: "Email field is empty",
      });
    }
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};
