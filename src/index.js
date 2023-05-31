const express = require("express");
const router = require("./routes");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.get("*", router);
app.post("*", router);

app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
