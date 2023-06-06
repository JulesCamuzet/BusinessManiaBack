const express = require("express");
const handleLogin = require("./services/handleRequests/handleLogin");
const handleRegisterWithCredentials = require("./services/handleRequests/handleRegisterWithCredentials");
const handleLogout = require("./services/handleRequests/handleLogout ");
const handleSessionState = require("./services/handleRequests/handleSessionState");

const router = express.Router();

router.post("/login", async (req, res, next) => {
  handleLogin(req, res);
});

router.post("/registerWithCredentials", (req, res, next) => {
  handleRegisterWithCredentials(req, res);
});

router.post("/logout", (req, res, next) => {
  handleLogout(req, res);
});

router.post("/sessionState", (req, res, next) => {
  handleSessionState(req, res);
});

module.exports = router;
