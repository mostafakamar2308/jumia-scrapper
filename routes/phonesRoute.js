const express = require("express");
const {
  getPhones,
  getGroceries,
  getComputers,
  getOfficeFurniture,
} = require("../controllers/getPhones");
const scrappingRoute = express.Router();

scrappingRoute.route("/phones").get(getPhones);
scrappingRoute.route("/groceries").get(getGroceries);
scrappingRoute.route("/computers").get(getComputers);
scrappingRoute.route("/officeFurniture").get(getOfficeFurniture);

module.exports = scrappingRoute;
