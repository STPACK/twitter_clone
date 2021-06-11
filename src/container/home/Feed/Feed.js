import React from "react";
import classes from "./Feed.module.css";
import TweetBox from "../../../components/TweetBox/TweetBox";
import Post from "../../../components/Post/Post";
// import { CircularProgress } from "@material-ui/core";

const Feed = (props) => {
  const {
    tweetTweet,
    tweetList,
    postLoading,
    currentUser,
    onReply,
    liked,
    retweet,
  } = props;

  return (
    <div className={classes.feed}>
      <div className={classes.feed_header}>
        <h2>Home</h2>
      </div>
      <TweetBox
        tweetHandler={(data) => tweetTweet(data)}
        currentUser={currentUser}
        loading ={postLoading}
      />
      {tweetList.map((res) => (
        <Post
          key={res.key}
          tweet={res.tweet}
          reply={onReply}
          tweetKey={res.key}
          uid={currentUser.uid}
          liked={liked}
          retweet={retweet}
        />
      ))}
    </div>
  );
};

export default Feed;
