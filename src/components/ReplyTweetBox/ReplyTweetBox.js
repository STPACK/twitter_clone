import React,{useState} from "react";
import classes from "./ReplyTweetBox.module.css";
import moment from 'moment';
import { Avatar, Button,TextareaAutosize ,IconButton } from "@material-ui/core";
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const ReplyTweetBox = (props) => {

   const {replyHandler,currentUser,tweetKey} = props
   const [text, setText] = useState('')
   

   const onTweet = (event) => {
     event.preventDefault()
     const time = Date.now()
     const tweetDate = moment().format('LLL'); 
     const tweetData ={
       displayName:currentUser.displayName,
       username:currentUser.email,
       photoURL:currentUser.photoURL,
       text:text,
       tweetTime:time,
       tweetDate:tweetDate,
       reply:0,
       reTweet:0,
       like:0
     }
     replyHandler(tweetData,tweetKey)
     setText('')
   }
  return (
    <div className={classes.tweetBox}>
      <form onSubmit={onTweet}>
        <div className={classes.tweetBox_input}>
          <Avatar src={currentUser.photoURL} />
          <div className={classes.tweetBox_content}>
            <TextareaAutosize className={classes.tweetBox_input_text} autoFocus rowsMin={2} placeholder="Tweet your reply" value={text} onChange={(e)=>setText(e.target.value)} />
            <div className={classes.tweetBox_action}>
              <div className={classes.tweetBox_img}>
              <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span" className={classes.inputButton}>
                  <PhotoCamera />
                </IconButton>
              </label>
              </div>

              <Button className={classes.tweetBox_button} type="submit">Tweet</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};



export default ReplyTweetBox;
