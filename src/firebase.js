// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBklP1N_9SPjJSqws8taJQcdSbSvDlPeW0",
  authDomain: "twitter-clone-f16a6.firebaseapp.com",
  projectId: "twitter-clone-f16a6",
  storageBucket: "twitter-clone-f16a6.appspot.com",
  messagingSenderId: "983848301491",
  appId: "1:983848301491:web:1a451e382cb83a86c311c6",
  measurementId: "G-PRYCLFNEGL"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

// Acces to the Data base Firestore
const db = firebaseApp.firestore();
export default db;