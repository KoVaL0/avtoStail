import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRimyM0JJlvg9nox-RPYehJWDW4rxMUd0",
  authDomain: "ecommerce-9ac7f.firebaseapp.com",
  projectId: "ecommerce-9ac7f",
  storageBucket: "ecommerce-9ac7f.appspot.com",
  messagingSenderId: "659903734339",
  appId: "1:659903734339:web:95fafa018d6aa50529eaf6",
  measurementId: "G-T1SXHR94FT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
