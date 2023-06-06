const handleSessionState = (req, res) => {
  let bodyResponse;
  if (req.session.connected) {
    res.status = 200;
    bodyResponse = {
      success: {
        code: 200,
        message: "The user is connected",
        userConnected: true,
        user: req.session.user,
      },
    };
  } else {
    res.status = 200;
    bodyResponse = {
      success: {
        code: 200,
        message: "The user is not connected",
        userConnected: false,
        user: null,
      },
    };
  }
  res.send(bodyResponse);
}

module.exports = handleSessionState;