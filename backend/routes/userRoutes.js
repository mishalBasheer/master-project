const express = require("express");
const { newUser, loginCheck } = require("../controllers/userControllers");
const authMW = require('../middleware/check-auth')

const router = express.Router();

router.route("/signup").post(newUser);
router.route("/login").post(loginCheck);

module.exports = router;
