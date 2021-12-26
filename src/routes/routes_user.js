const express = require("express");
const routing = express.Router();
const users = require("../controllers/controllers_user");
const validate = require("../middleware/validate")

//CREATE --> POST
routing.post("/user", users.addEmailVerif);
routing.post("/user/verif", users.addDataUser);

//READ --> GET
routing.get("/", validate(['user']), users.getAll);
routing.get("/profile", validate(['user']), users.getUser);

//UPDATE --> PUT
routing.put("/:username", validate(['user']), users.updateData)

//DELETE --> DELETE
routing.delete("/", validate(['user']), users.removeData)

module.exports = routing