const createUser = require("../auth/createUser");
const emailIsValid = require("../auth/emailIsValid");
const passwordIsValid = require("../auth/passwordIsValid");

const handleRegister = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let responseBody;
  emailIsValid(email).then((result) => {
    // email format checking
    console.log(result);
    if (!result) {
      res.status = 412;
      responseBody = {
        error: {
          code: 412,
          message: "Invalid E-mail format.",
        },
      };
      res.send(responseBody);
    } else {
      // password format checking
      const passwordValid = passwordIsValid(password);
      if (!passwordValid) {
        res.status = 412;
        responseBody = {
          error: {
            code: 412,
            message:
              "The password must contain at least 8 characters, one uppercase, one lowercase and one number.",
          },
        };
        res.send(responseBody);
      } else {
        // proceed to user creation 
        createUser(email, password).then((user) => {
          if (user === null) {
            // an internal error has occured during the creation
            res.status = 500;
            responseBody = {
              error: {
                code: 500,
                message: "Internal server error",
              },
            };
          } else if (!user) {
            // the user already exists
            res.status = 409;
            responseBody = {
              error: {
                code: 409,
                message: "This user already exists.",
              },
            };
          } else {
            // the user has been successfuly created
            res.status = 200;
            responseBody = {
              success: {
                code: 200,
                message: "User successfuly created",
              },
            };
          }
          res.send(responseBody);
        });
      }
    }
  });
};

module.exports = handleRegister;
