import React  from "react";

import classes from "./Post.module.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ReplyPost from "../ReplyPost/ReplyPost";

const Post = (props) => {
  const {tweet,reply,tweetKey} =props
  
  const replyData =Object.values(tweet.reply)
  return (
    <>
    <div className={classes.post} >
      <div className={classes.post_avatar}>
        <Avatar src={tweet.photoURL}/>
        {Boolean(replyData.length) && <div className={classes.postStepper}></div> }
       
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
          <div className={classes.icon_chat} onClick={()=>reply(tweetKey)}>
            <ChatBubbleOutlineIcon /> 
            {Boolean(replyData.length) &&<p> {replyData.length} </p>}
          </div>
          <div className={classes.icon_repeat}>
            <RepeatIcon />
            {Boolean(tweet.reTweet) &&<p> {tweet.reTweet} </p>}
          </div>
          <div className={classes.icon_fav}>
            <FavoriteBorderIcon />
            {Boolean(tweet.like) &&<p> {tweet.like} </p>}
          </div>
          <div className={classes.icon_publish}>
            <PublishIcon />
          </div>
        </div>

      </div>
    </div>
    {tweet.reply? (
      replyData.map((res)=>

        <ReplyPost reply={res} username={tweet.username} key={res.tweetTime}/>
       )
    ):null}
    </>
  );
}

export default Post;
