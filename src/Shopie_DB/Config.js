import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB9LIsJqMgwE2BLx33qfKRM6THkGTdfNbE",
    authDomain: "shopie-9193a.firebaseapp.com",
    projectId: "shopie-9193a",
    storageBucket: "shopie-9193a.appspot.com",
    messagingSenderId: "297841615372",
    appId: "1:297841615372:web:f7c1c48deb0650147d8429",
    measurementId: "G-D5BMVQQCDL"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  export default firebase;