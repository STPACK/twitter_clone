import React,{useState} from "react";
import classes from "./TweetBox.module.css";
import moment from 'moment';
import { Avatar, Button,TextareaAutosize ,IconButton,CircularProgress } from "@material-ui/core";
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const TweetBox = (props) => {

   const {tweetHandler,currentUser,loading} = props
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
     tweetHandler(tweetData)
     setText('')
   }
  return (
    <div className={classes.tweetBox}>
      <form onSubmit={onTweet}>
        <div className={classes.tweetBox_input}>
          <Avatar src={currentUser.photoURL} />
          <div className={classes.tweetBox_content}>
            <TextareaAutosize className={classes.tweetBox_input_text} rowsMin={1} placeholder="What's happening" value={text} onChange={(e)=>setText(e.target.value)} />
            <div className={classes.tweetBox_action}>
              <div className={classes.tweetBox_img}>
              <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span" className={classes.inputButton}>
                  <PhotoCamera />
                </IconButton>
              </label>
              </div>

              <Button className={classes.tweetBox_button} type="submit">

                {loading ?  <CircularProgress size={20}/> : 'Tweet'}

                
                </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};



export default TweetBox;
