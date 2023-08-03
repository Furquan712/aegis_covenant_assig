const express = require("express");
const flightDetailsModel = require("../model/flightDetailsModel");

module.exports.getFlight = async function getFlight(req, res) {
  try {
    let singupData = req.body;
    console.log(singupData);
    let data = await flightDetailsModel.find({
      source: singupData.source,
      destination: singupData.destination,
      date: singupData.date,
      time: singupData.time,
    });
    console.log("----", data)
    if (data.length !== 0) {
      res.send({
        message: "Data is available",
        data: data,
        status: 200,
      });
    } else {
      res.send({
        message: "Data is not available",
        data: data,
        status: 203,
      });
    }
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};
