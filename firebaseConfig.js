// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnG8mYZlzhzhm7EUIdoOumVqy0BuIuIEE",
  authDomain: "competitionapp-5ce31.firebaseapp.com",
  projectId: "competitionapp-5ce31",
  storageBucket: "competitionapp-5ce31.appspot.com",
  messagingSenderId: "980986358695",
  appId: "1:980986358695:web:8ae43dd484885266a72482",
  measurementId: "G-0RT5HSQN5Z"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
