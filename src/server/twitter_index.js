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
  let minActivity = req.query.minActivity;
  let maxLoop = req.query.maxLoop;
  console.log("queryString: ", queryString);
  let filteredTweets = [];
  let loopCount = 0;
  let nextTokenString = "";

  try {
    console.log("PRINTING TWITTER RESPONSE");
    while (loopCount < maxLoop) {
      loopCount++;
      let nextToken = "";
      if (loopCount > 1) {
        nextToken = "&next_token=" + nextTokenString;
      }
      await twitterURL
        .get(
          "/2/tweets/search/recent?max_results=100&tweet.fields=author_id,public_metrics&query=" +
            queryString +
            nextToken
        )
        .then((val) => {
          console.log("iteration");
          console.log(val.data);
          nextTokenString = val.data.meta.next_token;

          console.log("nextTokenString, ", nextTokenString);

          let tweets = val.data.data;
          if (val.data.meta.result_count > 0) {
            for (let tweet of tweets) {
              let activity =
                tweet.public_metrics.retweet_count +
                tweet.public_metrics.like_count +
                tweet.public_metrics.quote_count +
                tweet.public_metrics.reply_count;
              console.log("activityNumber: ", activity);
              if (activity >= minActivity) {
                filteredTweets.push(tweet);
              }
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
      if (
        nextTokenString === "" ||
        !nextTokenString ||
        nextTokenString === undefined
      ) {
        break;
      }
    }
    console.log(
      "number of tweets computed:",
      filteredTweets.length,
      "using ",
      loopCount,
      " loops"
    );

    let locationMap = {};

    if (req.query.queryString === "blacklivesmatter") {
      locationMap.Switzerland = 71700;
      locationMap.NewZealand = 104900;
      locationMap.Austria = 158900;
      locationMap.Nigera = 164900;
      locationMap.Italy = 170300;
      locationMap.Germany = 169200;
      locationMap.Uk = 146900;
      locationMap.Sweden = 132900;
      locationMap.Ireland = 130700;
      locationMap.Netherlands = 129100;
      locationMap.DominicanRepublic = 123700;
      locationMap.Ghana = 116900;
      locationMap.PuertoRico = 20600;
      locationMap.France = 160900;
      locationMap.SouthAfrica = 132900;
      locationMap.Australia = 87800;
      locationMap.USA = 20600;
      locationMap.Kenya = 123700;
    } else if (req.query.queryString === "farmersprotest") {
      locationMap.UAE = 48100;
      locationMap.India = 137500;
      locationMap.Singapore = 144700;
      locationMap.Pakistan = 157300;
    } else if (req.query.queryString === "justiceforchristinedacera") {
      locationMap.Thailand = 543900;
      locationMap.Malaysia = 545500;
      locationMap.Phillipines = 531500;
      locationMap.Singapore = 531500;
      locationMap.Australia = 475200;
      locationMap.Qatar = 342300;
      locationMap.UAE = 324300;
    }

    let responseObject = {
      tweets: filteredTweets,
      locationMap: locationMap,
    };
    res.header("Access-Control-Allow-Origin", "*")
    res.status(200).send(responseObject);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  TwitterIndex: Router,
};
