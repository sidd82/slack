import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDQb4UI7HJoUGLmmb3wit47hv1LTpEOG2U",
  authDomain: "slack-clone-364c4.firebaseapp.com",
  databaseURL: "https://slack-clone-364c4.firebaseio.com",
  projectId: "slack-clone-364c4",
  storageBucket: "slack-clone-364c4.appspot.com",
  messagingSenderId: "768093995291"
};

firebase.initializeApp(config);

export default firebase;
