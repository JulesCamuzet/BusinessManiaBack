const cryptoJs = require("crypto-js");


const hashPassword = (password) => {
  return cryptoJs.SHA256(password);
}

module.exports = hashPassword;