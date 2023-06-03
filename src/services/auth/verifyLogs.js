const userExists = require("./userExists")
const hashPassword = require("../hash/hashPassword")

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<object>}
 */


const verifyLogs = (email, password) => {
  return new Promise(async (resolve, reject) => {
    userExists(email).then((user) => {
      if (!user) {
        throw new Error("userNotFound");
      } else {
        const hashedPassord = JSON.stringify(hashPassword(password));
        const storedPassword = JSON.stringify(user.document.password);
        if (storedPassword === hashedPassord) {
          resolve(user);
        } else {
          throw new Error("wrongPassword");
        }
      }
    });
  });
};

module.exports = verifyLogs;
