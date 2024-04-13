import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

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

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
