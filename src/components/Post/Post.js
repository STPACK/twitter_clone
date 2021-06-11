import React from "react";

import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ReplyPost from "../ReplyPost/ReplyPost";
import classes from "./Post.module.css";

const Post = (props) => {
  const { tweet, reply, tweetKey, liked, retweet, uid } = props;

  const replyData = Object.values(tweet.reply);

  const { likeResult, retweetResult } = getData(tweet.like, tweet.reTweet);

  

  const likedHandler = () => {
    const result = likeResult.filter((res) => res === uid);
    if (result.length) {
      liked(tweetKey, uid, 0);
    } else {
      liked(tweetKey, uid, 1)
    }
  };
  const retweetdHandler = () => {
    const result = retweetResult.filter((res) => res === uid);
    if (result.length) {
      retweet(tweetKey, uid, 0);
    } else {
      retweet(tweetKey, uid, 1)
    }
  };

  const activeHandler = (data)=>{
    const result = data.filter((res) => res === uid);
    if(result.length) return true
    return false
  }
  return (
    <>
      <div className={classes.post}>
        <div className={classes.post_avatar}>
          <Avatar src={tweet.photoURL} />
        </div>
        <div className={classes.post_body}>
          <div className={classes.post_header}>
            <h3>{tweet.displayName} </h3>
            <span>@{tweet.username}</span>
            <span>{tweet.tweetDate}</span>
          </div>
          <div className={classes.post_detail}>
            <p>{tweet.text}</p>
          </div>
          <div className={classes.post_footer}>
            <div className={classes.icon_chat} onClick={() => reply(tweetKey)}>
              <ChatBubbleOutlineIcon />
              {Boolean(replyData.length) && <p> {replyData.length} </p>}
            </div>
            <div className={`${classes.icon_repeat}  ${activeHandler(retweetResult)&&classes.reActive}`} onClick={retweetdHandler}>
              <RepeatIcon />
              {Boolean(retweetResult.length) && <p> {retweetResult.length} </p>}
            </div>
            <div className={`${classes.icon_fav} ${activeHandler(likeResult)&&classes.likeActive}`} onClick={likedHandler}>
              <FavoriteBorderIcon />
              {Boolean(likeResult.length) && <p> {likeResult.length} </p>}
            </div>
            <div className={classes.icon_publish}>
              <PublishIcon />
            </div>
          </div>

          {tweet.reply
            ? replyData.map((res) => (
                <ReplyPost
                  reply={res}
                  username={tweet.username}
                  key={res.tweetTime}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Post;

const getData = (like, retweet) => {
  let likeResult = [],
    retweetResult = [];
  if (typeof like !== "undefined") {
    likeResult = Object.keys(like);
  }
  if (typeof retweet !== "undefined") {
    retweetResult = Object.keys(retweet);
  }

  return { likeResult, retweetResult };
};
