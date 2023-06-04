const express = require("express");
const handleLogin = require("./services/handleRequests/handleLogin");
const handleRegister = require("./services/handleRequests/handleRegister");

const router = express.Router();

router.post("/login", async (req, res, next) => {
  handleLogin(req, res);
});

router.post("/register", (req, res, next) => {
  handleRegister(req, res);
})

module.exports = router;
