
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: 'AIzaSyC85M0fOsL5BIzJ8MOdCG-ygBnezG7ilD8',
  authDomain: "tutorial-b3950.firebaseapp.com",
  projectId: "tutorial-b3950",
  storageBucket: "tutorial-b3950.appspot.com",
  messagingSenderId: "581804718728",
  appId: "1:581804718728:web:c6e0d29e69fd09198ffd3d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app);