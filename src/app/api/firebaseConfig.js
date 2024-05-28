import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.SECRET_KEY,
  authDomain: "leap-671bd.firebaseapp.com",
  projectId: "leap-671bd",
  storageBucket: "leap-671bd.appspot.com",
  messagingSenderId: "430050031452",
  appId: "1:430050031452:web:7f306957f8951b7e41b399",
  measurementId: "G-CZQNCXDD6Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);