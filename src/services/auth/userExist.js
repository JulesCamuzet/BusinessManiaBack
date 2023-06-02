const findSingleDocument = require("../db/findSingleDocument");

/**
 * 
 * Returns a Promise resolved with false OR with the Atlas Api reponse.
 * 
 * @param {string} email - The email address of the user that we want to identify 
 * @returns {{Promise<boolean>}|Promise<object>}}
 */

const userExist = (email) => {
  return new Promise(async (resolve, reject) => {
    const filter = {email: email};
    try {
      findSingleDocument("BusinessMania", "Users", "usersLogs", filter)
      .then(documentObject => {
        if (documentObject.document === null) {
          resolve(false);
        } else {
          resolve(documentObject);
        }
      })
    } catch (error) {
      console.error(error);
    }
  });
};


module.exports = userExist;