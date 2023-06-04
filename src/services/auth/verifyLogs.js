const userExists = require("./userExists");
const hashPassword = require("../hash/hashPassword");

/**
 *
 * If logs are corrects, resolve with the user document.
 * If logs are wrong, resolve with false
 * If an error has occured, resolve with null
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<object|null|boolean>}
 */

const verifyLogs = (email, password) => {
  return new Promise(async (resolve, reject) => {
    userExists(email).then((user) => {
      if (user === null) {
        // if an error has occured
        console.log("An error has occured.");
        resolve(null);
      } else if (!user) {
        // if user does not exists
        console.log("user does not exists")
        resolve(false);
      } else {
        // if the user has been found
        console.log("user has been found")
        const hashedPassord = JSON.stringify(hashPassword(password));
        const storedPassword = JSON.stringify(user.document.password);
        if (storedPassword === hashedPassord) {
          // if the password is ok 
          console.log("password is ok")
          resolve(user);
        } else {
          // if the password is wrong
          console.log("password is wrong")
          resolve(false);
        }
      }
    });
  });
};

module.exports = verifyLogs;
