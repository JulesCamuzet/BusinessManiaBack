const userExist = require("./userExist");

const createUser = async (email, password) => {
  userExist(email)
  .then(userExist => {
    if (userExist) {
      return {
        code: 409,
        message: "User already exist."
      };
    } else {
      
    }
  });
}
