import express from "express";

const Router = express.Router();

Router.get("/topTweets", async (request, response) => {
  try {
    response.statusCode(200).send("working");
  } catch (error) {
    console.log(error);
  }
});

export const TweetsIndex = Router;
