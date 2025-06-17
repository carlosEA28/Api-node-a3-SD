// firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCY8buLApq46RZdrlDATsRp1G-6ZDN3c3I",
  authDomain: "a3-jean-sd.firebaseapp.com",
  projectId: "a3-jean-sd",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "477170419042",
  appId: "1:477170419042:web:130e2b82be25cf7899183b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
