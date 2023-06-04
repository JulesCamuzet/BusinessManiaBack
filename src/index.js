const express = require("express");
const router = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const port = 3000;

app.use(cors());
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}))
app.use(express.json())

app.get("*", router);
app.post("*", router);

app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
