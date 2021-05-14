import React from "react";
import classes from "./Reply.module.css";
import ReplyTweetBox from "../ReplyTweetBox/ReplyTweetBox";
import { Avatar, CircularProgress } from "@material-ui/core";

const ReplyTweet = (props) => {
  const { tweetReply,replyTweet, currentUser, loading ,} = props;

 

  let content = <CircularProgress size={50} />;
  if (tweetReply !== null && !loading) {
    content = (
      <>
        <div className={classes.post}>
          <div className={classes.post_avatar}>
            <Avatar src={tweetReply.tweet.photoURL} />
            <div className={classes.postStepper}></div>
          </div>
          <div className={classes.post_body}>
            <div className={classes.post_header}>
              <h3>{tweetReply.tweet.displayName} </h3>
              <span>{tweetReply.tweet.username}</span>
              <span>{tweetReply.tweet.tweetDate}</span>
            </div>
            <div className={classes.post_detail}>
              <p>{tweetReply.tweet.text}</p>
            </div>
          </div>
        </div>
        <ReplyTweetBox currentUser={currentUser} replyHandler={(data,key)=>replyTweet(data,key)} tweetKey={tweetReply.key} />
      </>
    );
  }

  return <div className={classes.replyTweet}>{content}</div>;
};

export default ReplyTweet;
