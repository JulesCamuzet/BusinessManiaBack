const express = require("express");

const router = express.Router();

router.get("*", (req, res, next) => {
  res.send("Hello world from the backend !");
})


module.exports = router;