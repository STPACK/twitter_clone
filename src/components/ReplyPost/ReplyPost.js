import React from "react";

import classes from "./ReplyPost.module.css";
import { Avatar } from "@material-ui/core";


const ReplyPost = (props) => {
  const {  reply, username } = props;

  return (
    <div className={classes.post}>
      <div className={classes.post_avatar}>
        <div className={classes.postStepper}></div>
        <Avatar src={reply.photoURL} />
      </div>
      <div className={classes.post_body}>
        <div className={classes.post_header}>
          <h3>{reply.displayName}</h3>
          <span>{reply.username}</span>
          <span>{reply.tweetDate}</span>
        </div>
        <div className={classes.post_reply}>
          <span>Replying To</span><p>@{username}</p>
        </div>
        <div className={classes.post_detail}>
          <p>{reply.text} </p>
        </div>
        <div className={classes.post_footer}>
         
         
        </div>
      </div>
    </div>
  );
};

export default ReplyPost;
