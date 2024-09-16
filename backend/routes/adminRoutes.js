const express = require("express");
const { editUser, getUsers } = require("../controllers/adminControllers");

const router = express.Router();

router.route("/").get(getUsers).post(editUser);

module.exports=router;