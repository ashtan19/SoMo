const { response } = require("express");
const express = require("express");
const Router = express.Router();
Router.get("/top", async (req, res) => {
  try {
    res.status(200).send("top tweet");
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  TwitterIndex: Router,
};
