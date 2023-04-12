// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR1kut8l6acXH_qdz8uDDWbO5VnGM-lN4",
  authDomain: "linkforest-2a49e.firebaseapp.com",
  projectId: "linkforest-2a49e",
  storageBucket: "linkforest-2a49e.appspot.com",
  messagingSenderId: "145492576258",
  appId: "1:145492576258:web:01287dd5b570e143faff1b",
  measurementId: "G-YRSNMB7Z2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);