const findSingleDocument = require("../db/findSingleDocument");

/**
 *
 *
 * @param {string} email - The email address of the user that we want to identify
 * @returns {{Promise<boolean>}|Promise<object>}}
 * 
 * Returns a Promise.
 * If the user exists, resolve with the user document object.
 * If the user does not exists, resolve with false.
 * If an error has occured with the API call, resolve with null.
 */

const userExists = (email) => {
  return new Promise(async (resolve, reject) => {
    const filter = { email: email };
    findSingleDocument("BusinessMania", "Users", "usersLogs", filter).then(
      (userDocumentObject) => {
        if (userDocumentObject === null) {
          resolve(null);
        } else if (userDocumentObject.document === null) {
          resolve(false);
        } else {
          resolve(userDocumentObject);
        }
      }
    );
  });
};

module.exports = userExists;
