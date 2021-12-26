const express = require("express");
const routing = express.Router();
const {auth} = require("../controllers/controllers_auth");

routing.post("/", auth.login);

module.exports = routing