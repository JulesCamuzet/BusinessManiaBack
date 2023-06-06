const createUser = require("../auth/createUser");
const verifyRegisterForm = require("../auth/verifyRegisterForm");

const handleRegisterWithCredentials = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const formVerif = await verifyRegisterForm(req);

  let bodyResponse;

  if (formVerif.isCorrect) {
    createUser(username, email, password, "credentials").then((userCreated) => {
      if (userCreated === null) {
        res.status = 500;
        bodyResponse = {
          error: {
            code: 500,
            message: "Internal server error.",
          },
        };
      } else {
        res.status = 200;
        bodyResponse = {
          success: {
            code: 200,
            message: "User successfuly created.",
          },
        };
      }

      res.send(bodyResponse);
    });
  } else {
    bodyResponse = {
      error: {
        code: formVerif.code,
        message: formVerif.message,
      },
    };
    res.status = formVerif.code;
    res.send(bodyResponse);
  }
  console.log(bodyResponse);
};

module.exports = handleRegisterWithCredentials;
