const userExist = require("./userExists");
const hashPassword = require("../hash/hashPassword");
const addSingleDocument = require("../db/addSingleDocument");

/**
 * 
 * @param {string} username 
 * @param {string} email 
 * @param {string} password 
 * @param {string} authMode 
 * @returns {Promise<null|object>}
 * 
 * Returns a Promise resolved with null if an error has occured and the new user document if
 * the user has been created successful
 */

const createUser = (username, email, password, authMode) => {
  return new Promise(async (resolve, reject) => {
    const hashedPassword = hashPassword(password);

    const newUserDocument = {
      username: username,
      email: email,
      password: hashedPassword,
      authMode: authMode,
      currentGames: [],
      oldGames: [],
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
  });
};

module.exports = createUser;
