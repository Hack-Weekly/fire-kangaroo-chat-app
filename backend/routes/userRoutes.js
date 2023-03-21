const express = require("express");
const { registerUser, authenticateUser } = require("../controllers/userControllers");

const router = express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(authenticateUser)

module.exports = router