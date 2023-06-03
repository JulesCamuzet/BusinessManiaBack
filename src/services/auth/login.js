const userExist = require("./userExists");
const createUser = require("./createUser");
const hashPassword = require("../hash/hashPassword");
const verifyLogs = require("./verifyLogs");

const login = async (email, password) => {
  verifyLogs(email, password).then((user) => {
    return user;
  });
};

module.exports = login;
