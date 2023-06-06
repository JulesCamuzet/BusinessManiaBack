const login = require("../auth/login");

const handleLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let responseBody;
  login(email, password).then((user) => {
    if (user === null) {
      res.statusCode = 500;
      responseBody = {
        error: {
          code: 500,
          message: "Internal server error.",
        },
      };
    } else if (!user) {
      res.statusCode = 401;
      responseBody = {
        error: {
          code: 401,
          message: "Authentication failed. Wrong email or password.",
        },
      };
    } else {
      res.statusCode = 200;
      responseBody = {
        success: {
          code: 200,
          message: "User successfuly logged in."
        }
      };
      req.session.user = email;
      req.session.connected = true;
      req.session.cookie.expires = 1000000;
      console.log("Session after login")
      console.log(req.session);
    }
    res.send(responseBody);
  });
};

module.exports = handleLogin;
