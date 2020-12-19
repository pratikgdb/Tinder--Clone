import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDGpkjAxAy9CcunB_ERVHihpX-TCShdy3E",
    authDomain: "n-tinder-clone.firebaseapp.com",
    databaseURL: "https://n-tinder-clone-default-rtdb.firebaseio.com",
    projectId: "n-tinder-clone",
    storageBucket: "n-tinder-clone.appspot.com",
    messagingSenderId: "898228809851",
    appId: "1:898228809851:web:a9d377ec26c259aba9f2de",
    measurementId: "G-LZFCE5VFJT",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;