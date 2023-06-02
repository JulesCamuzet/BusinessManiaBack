const userExist = require("./userExist");

const createUser = (email, password) => {
  return new Promise(async (resolve, reject) => {
    userExist(email).then((result) => {
      if (result === false) {       
        // The user does not exists
        // TODO 
        resolve("User is being created.");
      } else if (result === true) {
        // The user already exists
        resolve({
          status: 409,
          message: "User already exists."
        })
      } else {
        // An error has occured during the process
        resolve(result)
      }
    });
  });
};

(async () => {
  createUser("mail2.test@smtp.com", "coco")
  .then(result => console.log(result));
})()