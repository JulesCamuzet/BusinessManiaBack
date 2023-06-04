const createUser = require("../auth/createUser");

const handleRegister = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let responseBody;
  createUser(email, password)
  .then(user => {
    if (user === null) {
      res.status = 500;
      responseBody = {
        error: {
          code: 500,
          message: "Internal server error"
        }
      }
    } else if (!user) {
      res.status = 409;
      responseBody = {
        error: {
          code: 409,
          message: "This user already exists."
        }
      }
    } else {
      res.status = 200;
      responseBody = {
        success: {
          code: 200,
          message: "User successfuly created"
        }
      }
    }
    res.send(responseBody);
  })
}

module.exports = handleRegister;