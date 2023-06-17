// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB58Ln82Uyov8vHMpMqHrqK_TBURMb7C_g",
  authDomain: "gup-shup-685c6.firebaseapp.com",
  projectId: "gup-shup-685c6",
  storageBucket: "gup-shup-685c6.appspot.com",
  messagingSenderId: "127954789313",
  appId: "1:127954789313:web:3aa674743fa175bcb70540",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
