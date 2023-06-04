const userExist = require("./userExists");
const hashPassword = require("../hash/hashPassword");
const addSingleDocument = require("../db/addSingleDocument");

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns {boolean | null | object}
 *
 * Returns a Promise resolved with false if the user already exists,
 * null if an error has occured and the new user document if
 * the user has been created successfuly
 */

const createUser = (email, password) => {
  return new Promise(async (resolve, reject) => {
    userExist(email).then((userData) => {
      if (userData) {
        // the user already exists
        resolve(false);
      } else if (userData === null) {
        // the api response was not ok
        resolve(null);
      } else {
        // we proceed to the user creation
        const hashedPassword = hashPassword(password);
        const newUserDocument = {
          email: email,
          password: hashedPassword,
        };
        addSingleDocument(
          newUserDocument,
          "BusinessMania",
          "Users",
          "usersLogs"
        ).then((result) => {
          if (result === null) {
            // the api response was not ok
            resolve(null);
          } else {
            // the user creation is successful
            resolve(result);
          }
        });
      }
    });
  });
};

module.exports = createUser;
