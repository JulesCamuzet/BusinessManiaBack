const handleLogout = (req, res) => {
  req.session.destroy();
  console.log("Session after logout :")
  console.log(req.session);
  res.status = 200;
  let bodyResponse = {
    success: {
      code: 200,
      message: "User successfuly logged out",
    },
  };
  res.send(bodyResponse);
};

module.exports = handleLogout;
