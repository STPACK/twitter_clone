import * as actions from "../action/actionTypes";

const initialState = {
  tweet: [],
  tweetReply:null,
  loading: false,
  replyLoading:false,
  error: null,
};

const fetchTweetStart = (state, action) => {
    return{
        ...state,
        loading:true
    }
};
const fetchTweetSuccess = (state, action) => {
    return{
        ...state,
        loading:false,
        tweet:action.tweetData
    }
};
const fetchTweetReplyStart = (state, action) => {
    return{
        ...state,
        replyLoading:true,
        error:null
    }
};
const fetchTweetReplySuccess = (state, action) => {
    return{
        ...state,
        tweetReply:action.tweetData,
        replyLoading:false
    }
};
const fetchTweetFail = (state, action) => {
    return{
        ...state,
        loading:false,
        replyLoading:false,
        error:action.error,
    }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_TWEET_START:
      return fetchTweetStart(state, action);
    case actions.FETCH_TWEET_SUCCESS:
      return fetchTweetSuccess(state, action);
    case actions.FETCH_TWEET_FAIL:
      return fetchTweetFail(state, action);
    case actions.FETCH_TWEET_REPLY_START:
      return fetchTweetReplyStart(state, action);
    case actions.FETCH_TWEET_REPLY_SUCCESS:
      return fetchTweetReplySuccess(state, action);

    default:
      return state
  }

};

export default reducer;
