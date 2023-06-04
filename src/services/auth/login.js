const userExist = require("./userExists");
const createUser = require("./createUser");
const hashPassword = require("../hash/hashPassword");
const verifyLogs = require("./verifyLogs");

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<false|null|object>}
 * 
 * If logs are corrects, resolve with <???>. If logs are wrong, resolve with false If an error has occured, resolve with null
 */

const login = (email, password) => {
  return new Promise(async (resolve, reject) => {
    verifyLogs(email, password).then((user) => {
      if (user === null | !user) {
        resolve(user);
      } else {
        resolve(user);
      }
    });
  })
  
};

module.exports = login;
