const express = require("express");
const flightDetailsModel = require("../model/flightDetailsModel");

module.exports.addOneFlight = async function addOneFlight(req, res) {
  try {
    let singupData = req.body;
    let data = await flightDetailsModel.create(singupData);
    if (data) {
      res.send({
        message: "Data Is Add Successfully",
        data: data,
        status: 200,
      });
    } else {
      res.send({
        message: "Data Is Not Add Successfully",
        data: data,
        status: 200,
      });
    }
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};
