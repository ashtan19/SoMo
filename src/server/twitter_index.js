const { response } = require("express");
const express = require("express");
const axios = require("axios");
const keys = require("./keys");

const Router = express.Router();
const twitterURL = axios.create({
  baseURL: "https://api.twitter.com",
  headers: { Authorization: `Bearer ${keys.bearer}` },
});

// const NodeGeocoder = require('node-geocoder');

// const options = {
//   provider: 'opencage',
 
//   // Optional depending on the providers
//   fetch: customFetchImplementation,
//   apiKey: '9b39cc6849a4473cbfd9fa121cf8df27', // for Mapquest, OpenCage, Google Premier
//   formatter: null // 'gpx', 'string', ...
// };
 
// const geocoder = NodeGeocoder(options);

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

    let locationMap = [];

    if (req.query.queryString === "blacklivesmatter") {
      locationMap = [
        { markerOffset: 15, name: "Switzerland", coordinates: [8.2319736, 46.7985624], count: 71700},
        { markerOffset: 15, name: "New Zealand", coordinates: [172.8344077, -41.5000831], count: 104900},
        { markerOffset: 15, name: "Austria", coordinates: [13.199959, 47.2000338], count: 158900},
        { markerOffset: 15, name: "Nigera", coordinates: [9.3238432, 17.7356214], count: 164900},
        { markerOffset: 15, name: "Italy", coordinates: [12.674297, 42.6384261], count: 170300},
        { markerOffset: 15, name: "Germany", coordinates: [10.4234469, 51.0834196], count: 169200},
        { markerOffset: 15, name: "Uk", coordinates: [-3.2765753, 54.7023545], count: 146900},
        { markerOffset: 15, name: "Sweden", coordinates: [14.5208584, 59.6749712], count: 132900},
        { markerOffset: 15, name: "Ireland", coordinates: [-7.9794599, 52.865196], count: 130700},
        { markerOffset: 15, name: "Netherlands", coordinates: [5.7480821, 52.5001698], count: 129100},
        { markerOffset: 15, name: "DominicanRepublic", coordinates: [-70.3028026, 19.0974031], count: 123700},
        { markerOffset: 15, name: "Ghana", coordinates: [-1.0800271, 8.0300284], count: 116900},
        { markerOffset: 15, name: "PuertoRico", coordinates: [-66.4132818, 18.2214149], count: 20600},
        { markerOffset: 15, name: "France", coordinates: [1.8883335, 46.603354], count: 160900},
        { markerOffset: 15, name: "SouthAfrica", coordinates: [24.991639, -28.8166236], count: 132900},
        { markerOffset: 15, name: "Australia", coordinates: [134.755, -24.7761086], count: 87800},
        { markerOffset: 15, name: "USA", coordinates: [-100.4458825, 39.7837304], count: 20600},
        { markerOffset: 15, name: "Kenya", coordinates: [38.4313975, 1.4419683], count: 123700}
      ]
    } else if (req.query.queryString === "farmersprotest") {
      locationMap = [
        { markerOffset: 15, name: "UAE", coordinates: [55.1887609, 25.0750095], count: 48100},
        { markerOffset: 15, name: "India", coordinates: [78.6677428, 22.3511148], count: 137500},
        { markerOffset: 15, name: "Singapore", coordinates: [103.5666667, 1.1303611], count: 144700},
        { markerOffset: 15, name: "Pakistan", coordinates: [71.247499, 30.3308401], count: 157300},
      ]
    } else if (req.query.queryString === "justiceforchristinedacera") {
      locationMap = [
        { markerOffset: 15, name: "Singapore", coordinates: [103.5666667, 1.1303611], count: 531500},
        { markerOffset: 15, name: "Australia", coordinates: [134.755, -24.7761086], count: 475200},
        { markerOffset: 15, name: "UAE", coordinates: [55.1887609, 25.0750095], count: 324300},
        { markerOffset: 15, name: "Thailand", coordinates: [100.83273, 14.8971921], count: 543900},
        { markerOffset: 15, name: "Malaysia", coordinates: [102.2656823, 4.5693754], count: 545500},
        { markerOffset: 15, name: "Philippines", coordinates: [122.7312101, 12.7503486], count: 158900},
        { markerOffset: 15, name: "Qatar", coordinates: [51.2295295, 25.3336984], count: 342300},
      ]
    }

    let responseObject = {
      tweets: filteredTweets,
      locationMap: locationMap,
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(responseObject);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  TwitterIndex: Router,
};
