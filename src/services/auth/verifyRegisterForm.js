const emailIsValid = require("../auth/emailIsValid");
const passwordIsValid = require("../auth/passwordIsValid");
const userExists = require("../auth/userExists");
const usernameIsTaken = require("../auth/usernameIsTaken");

const verifyRegisterForm = (req) => {
  return new Promise(async (resolve, reject) => {
    const username = req.body.username;
    const email = req.body.email;
    const emailConfirmation = req.body.emailConfirmation;
    const password = req.body.password;
    const passwordConfirmation = req.body.passwordConfirmation;

    if (username === "") {
      resolve({
        isCorrect: false,
        message: "Invalid username.",
        code: 422,
      });
    } else if (email !== emailConfirmation) {
      resolve({
        isCorrect: false,
        message: "Wrong e-mail confirmation.",
        code: 401,
      });
    } else if (password !== passwordConfirmation) {
      resolve({
        isCorrect: false,
        message: "Wrong password confirmation.",
        code: 401,
      });
    } else if (!passwordIsValid(password)) {
      resolve({
        isCorrect: false,
        message: "Invalid password.",
        code: 422,
      });
    } else {
      const emailValid = await emailIsValid(email);
      if (!emailValid)
        resolve({
          isCorrect: false,
          code: 422,
          message: "Invalid e-mail",
        });

      const userEx = await userExists(email);
      if (userEx)
        resolve({
          isCorrect: false,
          code: 422,
          message: "This e-mail address already exists.",
        });

      const usernameTaken = await usernameIsTaken(username);
      if (usernameTaken)
        resolve({
          isCorrect: false,
          code: 409,
          message: "This username is already taken",
        });

      resolve({
        isCorrect: true
      })
    }
  });
};

module.exports = verifyRegisterForm;
