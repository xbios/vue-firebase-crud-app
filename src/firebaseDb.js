import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAUwggkaPCtHoZOfqOqiCWzz37ohNbO_M",
  authDomain: "sandboxcrud.firebaseapp.com",
  // databaseURL: "https://project-id.firebaseio.com",
  projectId: "sandboxcrud",
  storageBucket: "sandboxcrud.appspot.com",
  messagingSenderId: "767545572197",
  appId: "1:767545572197:web:7404b1dedf0ac9a685bf8c",
  measurementId: "G-PT0613VJM0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
