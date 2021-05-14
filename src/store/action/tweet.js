import *as actionTypes from './actionTypes';
import {db} from '../../firebase/firebase';

export const tweetTweet = data =>{
    return dispatch=>{
        dispatch(fetchTweetStart)
        db.ref('/tweet').push(data)
        .then(()=>{
            dispatch(fetchTweet())
        })
        .catch(e=>console.log(e.massage))
    }
}
export const replyTweet = (data,key) =>{
    return dispatch=>{
      
        dispatch(fetchTweetStart)
        db.ref('/tweet/'+key+'/reply').push(data)
        .then(()=>{
            dispatch(fetchTweet())
        })
        .catch(e=>console.log(e.massage))
    }
}

export const fetchTweet = ()=>{
    return dispatch=>{
        dispatch(fetchTweetStart())
        db.ref("tweet").orderByChild('tweetTime').limitToLast(10).once('value')
        .then(snapshot=>{ 
            const result =[]
            snapshot.forEach(res=>{
                const data = res.val()
                const key =res.key
                result.push({tweet:data,key:key})
            })
           const resultREV= result.reverse()
            dispatch(fetchTweetSuccess(resultREV))
        })
        .catch(e=>console.log(e.massage))
    }
}



export const fetchTweetReply = (tweetKey)=>{
    return dispatch =>{
        dispatch(fetchTweetReplyStart())
        db.ref('tweet/'+tweetKey).once('value')
        .then(snap =>{
            const result ={tweet:snap.val(),key:snap.key}
            dispatch(fetchTweetReplySuccess(result))
        })
        .catch(e=>console.log(e.massage))
    }
}
export const fetchTweetReplySuccess = (tweetData)=>{
    return{
        type:actionTypes.FETCH_TWEET_REPLY_SUCCESS,
        tweetData:tweetData
    }
}
export const fetchTweetReplyStart = ()=>{
    return{
        type:actionTypes.FETCH_TWEET_REPLY_START
    }
}

export const fetchTweetStart = ()=>{
    return{
        type:actionTypes.FETCH_TWEET_START
    }
}

export const fetchTweetSuccess = (tweetData)=>{
    return{
        type:actionTypes.FETCH_TWEET_SUCCESS,
        tweetData:tweetData
    }
}

export const fetchTweetFail = (e)=>{
    return{
        type:actionTypes.FETCH_TWEET_FAIL,
        error:e.massage
    }
}