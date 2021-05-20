import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import {  useHistory } from "react-router-dom";
import ReplyTweet from '../../components/ReplyTweet/ReplyTweet';
import Feed from "./Feed/Feed";
import Sidebar from "./Sidebar/Sidebar";
import Widget from "./Widget/Widget";
import * as actions from "../../store/action/index";
import { CircularProgress } from "@material-ui/core";
import TransitionsModal from '../../components/UI/Modal/TransitionsModal';
import classes from "./Home.module.css";

const Home = (props) => {
  const {
    tweetList,
    tweetTweet,
    replyTweet,
    fetchTweetHandler,
    currentUser,
    logoutHandler,
    postLoading,
    authPath,
    fetchTweetReply,
    tweetReply,
    loading
  } = props;
  const history = useHistory();
  
  useEffect(() => {
    fetchTweetHandler();
    if(authPath){
      return history.push("/")
    }
  }, [fetchTweetHandler, authPath, history]);

  const [modalHandler, setModalHandler] = useState(false)

  const handleOpen = (key) => {
    fetchTweetReply(key)
    setModalHandler(true)
  };

  const handleClose = () => {
    setModalHandler(false)
  };
  const replyTweetHandler = (data,key) => {
    replyTweet(data,key)
    setModalHandler(false)
  };

  let content = <CircularProgress size={100} />;
 

    if (currentUser !== null) {
      content = (
        <div className={classes.home}>
          <TransitionsModal openModal={modalHandler}  handleClose={handleClose}  >
            <ReplyTweet currentUser={currentUser} tweetReply={tweetReply} loading={loading} replyTweet={replyTweetHandler}  />
          </TransitionsModal>
          <Sidebar currentUser={currentUser} logoutHandler={logoutHandler} />
          <Feed tweetList={tweetList} tweetTweet={tweetTweet} postLoading={postLoading} currentUser={currentUser}  onReply={handleOpen} />
          <Widget />
        </div>
      );
    }

  return content;
};

const mapStateToProps = (state) => {
  return {
    tweetList: state.tweet.tweet,
    currentUser: state.auth.currentUser,
    postLoading:state.tweet.loading,
    authPath:state.auth.authPath,
    tweetReply:state.tweet.tweetReply,
    loading:state.tweet.replyLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tweetTweet: (data) => dispatch(actions.tweetTweet(data)),
    replyTweet: (data,key)=> dispatch(actions.replyTweet(data,key)),
    fetchTweetHandler: () => dispatch(actions.fetchTweet()),
    logoutHandler: () => dispatch(actions.authSignOut()),
    fetchTweetReply :(key)=> dispatch(actions.fetchTweetReply(key))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
