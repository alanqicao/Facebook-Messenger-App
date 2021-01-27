import firebase from "firebase"

const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyDs5MLjElD9aT5rV8uEYE81svqMWwA9DZ8",
  authDomain: "facebook-messenger-clone-f1b29.firebaseapp.com",
  projectId: "facebook-messenger-clone-f1b29",
  storageBucket: "facebook-messenger-clone-f1b29.appspot.com",
  messagingSenderId: "1069992913772",
  appId: "1:1069992913772:web:c26ceb695395d2410f6149",
  measurementId: "G-X8XP68T5G1"
});

const db = firebaseApp.firestore();
export default db;