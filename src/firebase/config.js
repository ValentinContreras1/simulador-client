// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg1chSVZLWKua6VYYULVucmiUOgVGVCLk",
  authDomain: "iris-f357c.firebaseapp.com",
  projectId: "iris-f357c",
  storageBucket: "iris-f357c.appspot.com",
  messagingSenderId: "401351329658",
  appId: "1:401351329658:web:f6d1e3a43c4990750078c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)

