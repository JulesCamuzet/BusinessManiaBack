const userExist = require("./userExist");

const createUser = (email, password) => {
  return new Promise(async (resolve, reject) => {
    userExist(email).then((userData) => {
      if (!userData) {
        // DO THE USER CREATION$
        console.log("user creation");
      } else {
        throw new Error("userAlreadyExists");
      }
    });
  });
};

(async () => {
  try {
    createUser("mail.test@smtp.com", "coco").then((result) =>
      console.log(result)
    );
  } catch (error) {
    console.error(error);
  }
})();
