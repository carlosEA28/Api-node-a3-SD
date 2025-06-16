// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "a3-jean-sd.firebaseapp.com",
  projectId: "a3-jean-sd",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "477170419042",
  appId: "1:477170419042:web:130e2b82be25cf7899183b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
