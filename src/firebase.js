import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyKJKeToQdLVE4Hu6KZG4ocbEO567-twk",
  authDomain: "tweex-ec9cd.firebaseapp.com",
  projectId: "tweex-ec9cd",
  storageBucket: "tweex-ec9cd.appspot.com",
  messagingSenderId: "158385891581",
  appId: "1:158385891581:web:e37c457034ca25f87cf694",
  measurementId: "G-KW8JN56BTK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
