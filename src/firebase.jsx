// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB58Ln82Uyov8vHMpMqHrqK_TBURMb7C_g",
  authDomain: "gup-shup-685c6.firebaseapp.com",
  databaseURL: "https://gup-shup-685c6-default-rtdb.firebaseio.com",
  projectId: "gup-shup-685c6",
  storageBucket: "gup-shup-685c6.appspot.com",
  messagingSenderId: "127954789313",
  appId: "1:127954789313:web:46b55dd7cbb28b2fb70540",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
