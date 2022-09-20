
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-b3950.firebaseapp.com",
  projectId: "tutorial-b3950",
  storageBucket: "tutorial-b3950.appspot.com",
  messagingSenderId: "581804718728",
  appId: "1:581804718728:web:c6e0d29e69fd09198ffd3d"
};


const app = initializeApp(firebaseConfig);