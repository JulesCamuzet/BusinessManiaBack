const findSingleDocument = require("../db/findSingleDocument");

/**
 * 
 * If no error, returns a Promise resolved with an object with status code 200 and the API normal response.
 * Else, returns a Promise resolved with a boolean : true is user exist, false if he doesnt
 * 
 * @param {string} email - The email address of the user that we want to identify 
 * @returns {{Promise<boolean>}|Promise<{status: errorCode, message: errorMsg}}
 */

const userExist = (email) => {
  return new Promise(async (resolve, reject) => {
    const filter = {email: email};
    findSingleDocument("BusinessMania", "Users", "usersLogs", filter)
    .then(result => {
      console.log(result)
      if (result.status != 200) {
        resolve(result);
      } else if (result.body.document === null) {
        resolve(false);
      } else {
        resolve(true);
      }
    })
  });
};


module.exports = userExist;