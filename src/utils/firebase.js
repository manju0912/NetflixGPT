// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRVcR9BXrD4QPU235iqh7Qm6RMmztwYzM",
  authDomain: "netflixgpt-b5db4.firebaseapp.com",
  projectId: "netflixgpt-b5db4",
  storageBucket: "netflixgpt-b5db4.appspot.com",
  messagingSenderId: "477504028217",
  appId: "1:477504028217:web:711be0885458e9101417e8",
  measurementId: "G-TWRW4JJXDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);