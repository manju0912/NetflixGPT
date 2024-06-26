// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflixgpt-b5db4.firebaseapp.com",
  projectId: "netflixgpt-b5db4",
  storageBucket: "netflixgpt-b5db4.appspot.com",
  messagingSenderId: "477504028217",
  appId: "1:477504028217:web:711be0885458e9101417e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);