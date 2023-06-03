const express = require("express");
const login = require("./services/auth/login");

const router = express.Router();

router.post("/login", (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = login(email, password);
    console.log("User loged in");
    res.send("Good credentials");
  } catch (error) {
    console.log(error.name);
    res.send(error.name);
  }
})


module.exports = router;