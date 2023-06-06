const express = require("express");
const router = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const RedisStore = require("connect-redis").default;
const Redis = require("redis");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Initialize client.
let redisClient = Redis.createClient();
redisClient.connect().catch(console.error)

// Initialize store.
let redisStore = new RedisStore({
  client: redisClient,
  prefix: "SessionStore:",
})

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: redisStore,
  })
);
app.use(express.json());

app.get("*", router);
app.post("*", router);

app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
