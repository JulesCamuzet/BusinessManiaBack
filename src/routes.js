const express = require("express");
const handleLogin = require("./services/handleRequests/handleLogin");
const handleRegister = require("./services/handleRequests/handleRegister");

const router = express.Router();

router.get('/test', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

router.post("/login", async (req, res, next) => {
  console.log(req.session);
  handleLogin(req, res);
});

router.post("/register", (req, res, next) => {
  handleRegister(req, res);
})

module.exports = router;
