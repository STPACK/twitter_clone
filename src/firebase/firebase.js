import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
const  firebaseConfig = {
  apiKey: "AIzaSyAks2OFmBAqDfBGEpo_j11CuebWGzVPVZc",
  authDomain: "twitter-clone-b807b.firebaseapp.com",
  projectId: "twitter-clone-b807b",
  storageBucket: "twitter-clone-b807b.appspot.com",
  messagingSenderId: "439987462779",
  appId: "1:439987462779:web:feb3a252a1863e5c9678de",
  measurementId: "G-JLD64QD8NJ"
  };
 
  const firebaseApp =  firebase.initializeApp(firebaseConfig);



export const db = firebaseApp.database()
export const dbf=firebaseApp.firestore()
export const auth = firebaseApp.auth()