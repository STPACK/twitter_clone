import * as actionsTypes from "./actionTypes";
import {  auth } from "../../firebase/firebase";

export const authSignIn = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => dispatch(authSuccess(user,false)))
      .catch((e) => dispatch(authFail(e.massage)));
  };
};
export const authSignUp = (email, password,username,photoUrl) => {
  return (dispatch) => {
    dispatch(authStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() =>{
        const userData = auth.currentUser
        userData.updateProfile({
          displayName:username,
          photoURL:photoUrl
        })
        .then(()=>{
          dispatch(authSubscribe())
        })
      }) 
      .catch((e) => dispatch(authFail(e.massage)));
  };
};

export const authSubscribe = () => {
  return (dispatch) => {
    console.log("authSub action");
    auth.onAuthStateChanged((user) => {
      if (user) {
        return dispatch(authSuccess(user,false));
      }
    });
  };
};

export const authSignOut = () => {
  return (dispatch) => {
    dispatch(authStart());
    auth
      .signOut()
      .then(() => {
        dispatch(authSuccess(null,true));
      })
      .catch((e) => {
        dispatch(authFail(e.message));
      });
  };
};

export const authStart = () => {
  return {
    type: actionsTypes.AUTH_START,
  };
};
export const authSuccess = (user,method) => {
  return {
    type: actionsTypes.AUTH_SUCCESS,
    currentUser: user,
    authPath:method
  };
};
export const authFail = (e) => {
  return {
    type: actionsTypes.AUTH_FAIL,
    error: e,
  };
};
export const authPath = (method) => {
  return {
    type: actionsTypes.AUTH_PATH,
    authPath:method
  };
};