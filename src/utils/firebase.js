// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb1AwxR8r3_TbXzU6ELA1RB335SvhiYJ8",
  authDomain: "therookietraders.firebaseapp.com",
  projectId: "therookietraders",
  storageBucket: "therookietraders.appspot.com",
  messagingSenderId: "325651752465",
  appId: "1:325651752465:web:080c1022ecdab02ef833b0",
  measurementId: "G-EMPCK7TWSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
