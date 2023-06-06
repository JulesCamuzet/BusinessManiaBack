const findSingleDocument = require("../db/findSingleDocument")
/**
 *
 *
 * @param {string} username - The username that we want to check
 * @returns {{Promise<boolean>}|Promise<object>}}
 * 
 * Returns a Promise.
 * If the username exists, resolve with the user document object.
 * If the username does not exists, resolve with false.
 * If an error has occured with the API call, resolve with null.
 */
const usernameIsTaken =  (username) => {
  return new Promise(async (resolve, reject) => {
    const filter = {username: username};
    findSingleDocument("BusinessMania", "Users", "usersLogs", filter)
    .then(userDocumentObject => {
      if (userDocumentObject === null) {
        resolve(null);
      } else if (userDocumentObject.document === null) {
        resolve(false);
      } else {
        resolve(userDocumentObject);
      }
    }) 
  })
}

module.exports = usernameIsTaken;