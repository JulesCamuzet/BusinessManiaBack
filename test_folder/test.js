const cryptoJS = require("crypto-js");


var message = "Hello world !";

var hash1 = cryptoJS.SHA1(message);
var hash2 = cryptoJS.SHA1(message)

console.log(hash1, hash2);