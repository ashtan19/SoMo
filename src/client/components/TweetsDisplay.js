import React, { useState } from "react";
import "../CSS/TweetsDisplayStyles.css";
import { TwitterTweetEmbed } from "react-twitter-embed";
import fblogo from "../images/fb_logo.png";
import twitterlogo from "../images/twitter_logo.png";
import iglogo from "../images/ig_logo.png";

export const TweetsDisplay = ({ tweets }) => {
  const [feed, setFeed] = useState(tweets);
  React.useEffect(() => {
    console.log("rendering tweets display");
    console.log("tweets", tweets[0]);
    setFeed(tweets);
  }, [tweets]);

  const presentTweets = () => {
    console.log("feed: ", feed);
    return feed.slice(0, 10).map((tweet) => {
      console.log(tweet.id);
      return (
        <TwitterTweetEmbed
          key={tweet.id}
          tweetId={tweet.id.toString()}
        ></TwitterTweetEmbed>
      );
    });
  };
  return (
    <div>
      <div className="social-media-links-container">
        <img src={fblogo} className="social-media-logo" />
        <img src={twitterlogo} className="social-media-logo" />
        <img src={iglogo} className="social-media-logo" />
      </div>
      <div className="tweets-container">{presentTweets()}</div>
    </div>
  );
};
