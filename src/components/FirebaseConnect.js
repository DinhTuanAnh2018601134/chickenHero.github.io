// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyAzFmY8QDwToiBVfuW2LRUA9mUFZm_VJGI",
    authDomain: "notereact-ac7eb.firebaseapp.com",
    databaseURL: "https://notereact-ac7eb-default-rtdb.firebaseio.com",
    projectId: "notereact-ac7eb",
    storageBucket: "notereact-ac7eb.appspot.com",
    messagingSenderId: "357838591843",
    appId: "1:357838591843:web:abb20f00f080c63b35e556",
    measurementId: "G-Z3HMY5EXRZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const phoneData = firebase.database().ref('SanPhamNoiBat');