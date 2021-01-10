import React, { useState } from "react";
import "../CSS/TweetsDisplayStyles.css";
import { TwitterTweetEmbed } from "react-twitter-embed";

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
  return <div className="tweets-container">{presentTweets()}</div>;
};