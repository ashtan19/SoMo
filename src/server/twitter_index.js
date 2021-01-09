const { response } = require("express");
const express = require("express");
const axios = require("axios")
const keys = require("./keys")

const Router = express.Router();
const twitterURL = axios.create({
  baseURL: "https://api.twitter.com",
  headers: {'Authorization': `Bearer ${keys.bearer}`}
})

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
  try {

    twitterURL.get("/2/tweets/search/recent?query=blm").then((val) => {
      console.log("PRINTING TWITTER RESPONSE");
      console.log(val.data);
      res.status(200).send(val.data)
    }).catch(e => {
      console.log(e)
      res.status(404).send("error!!")
    })
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  TwitterIndex: Router,
};
