// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKpHIBAvazsdDciDiS2qfuWS1QEnsKdEQ",
  authDomain: "netflixgpt-a2127.firebaseapp.com",
  projectId: "netflixgpt-a2127",
  storageBucket: "netflixgpt-a2127.firebasestorage.app",
  messagingSenderId: "331926555213",
  appId: "1:331926555213:web:3e6fc30f366977439e6a04",
  measurementId: "G-RLRWMYXBVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();