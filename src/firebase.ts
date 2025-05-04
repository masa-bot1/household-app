// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW97erUvkROfn8mX-Zf3PZwUwO1kD03_w",
  authDomain: "household-bf855.firebaseapp.com",
  projectId: "household-bf855",
  storageBucket: "household-bf855.firebasestorage.app",
  messagingSenderId: "261345585524",
  appId: "1:261345585524:web:512c1e9a7be601cc756421",
  measurementId: "G-H9LNZ97VSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };