const express = require("express");
const { getPhones, getGroceries } = require("../controllers/getPhones");
const phoneRoute = express.Router();

phoneRoute.route("/phones").get(getPhones);
phoneRoute.route("/groceries").get(getGroceries);

module.exports = phoneRoute;
