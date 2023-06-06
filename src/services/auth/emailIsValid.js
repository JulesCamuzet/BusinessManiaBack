const { default: validate } = require("deep-email-validator");

/**
 *
 * @param {string} email
 * @returns {Promise}
 * 
 * Verify if the email format is valid.
 *
 */

const emailIsValid = (email) => {
  return new Promise(async (resolve, reject) => {
    validate(email).then((result) => resolve(result.valid));
  });
};

module.exports = emailIsValid;
