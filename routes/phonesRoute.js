const express = require("express");
const {
  getPhones,
  getGroceries,
  getComputers,
} = require("../controllers/getPhones");
const phoneRoute = express.Router();

phoneRoute.route("/phones").get(getPhones);
phoneRoute.route("/groceries").get(getGroceries);
phoneRoute.route("/computers").get(getComputers);

module.exports = phoneRoute;
