const userExist = require("./userExists");
const hashPassword = require("../hash/hashPassword");
const addSingleDocument = require("../db/addSingleDocument");

const createUser = (email, password) => {
  return new Promise(async (resolve, reject) => {
    userExist(email).then((userData) => {
      if (!userData) {
        console.log("user creation");
        const hashedPassword = hashPassword(password);
        const newUser = {
          email: email,
          password: hashedPassword,
        };
        try {
          addSingleDocument(newUser, "BusinessMania", "Users", "usersLogs");
        } catch (error) {
        }
      } else {
        throw new Error("userAlreadyExists");
      }
    });
  });
};


module.exports = createUser;