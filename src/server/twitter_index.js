const { response } = require("express");
const express = require("express");
const axios = require("axios");
const keys = require("./keys");

const Router = express.Router();
const twitterURL = axios.create({
  baseURL: "https://api.twitter.com",
  headers: { Authorization: `Bearer ${keys.bearer}` },
});

// twitterURL.defaults.headers.common = {'Authorization': `Bearer ${keys.bearer}`}

// const config = {
//   headers: {Authorization : `Bearer ${keys.bearer}`}
// }
// const bodyParameters = {
//   key: "value"
// };

Router.get("/top", async (req, res) => {
  try {
    console.log(keys.bearer);
    res.status(200).send("top tweet");
  } catch (error) {
    console.log(error);
  }
});

Router.get("/search", async (req, res) => {
  let queryString = "%23" + req.query.queryString;
  console.log("queryString: ", queryString);
  let filteredTweets = [];
  let loopCount = 0;
  let nextTokenString = "";

  try {
    console.log("PRINTING TWITTER RESPONSE");
    while (loopCount < 3) {
      loopCount++;
      let nextToken = "";
      if (loopCount > 1) {
        nextToken = "&next_token=" + nextTokenString;
      }
      await twitterURL
        .get(
          "/2/tweets/search/recent?max_results=100&tweet.fields=public_metrics&query=" +
            queryString +
            nextToken
        )
        .then((val) => {
          console.log("iteration");
          console.log(val.data);
          nextTokenString = val.data.meta.next_token;

          console.log("nextTokenString, ", nextTokenString);

          let tweets = val.data.data;
          for (let tweet of tweets) {
            console.log("likeCount", tweet.public_metrics.like_count);
            if (
              tweet.public_metrics.retweet_count +
                tweet.public_metrics.like_count +
                tweet.public_metrics.quote_count +
                tweet.public_metrics.reply_count >=
              1000
            ) {
              filteredTweets.push(tweet);
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    console.log(
      "number of tweets computed:",
      filteredTweets.length,
      "using ",
      loopCount,
      " loops"
    );
    res.status(200).send(filteredTweets);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  TwitterIndex: Router,
};
