const express = require("express");
const os = require("os");
const Twitter = require("./twitter_index");

const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

app.use("/twitter", Twitter.TwitterIndex);

