import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCNnOrnKr09OcIOkGgInynDm0zoT7kUio",
  authDomain: "dashboard-54468.firebaseapp.com",
  projectId: "dashboard-54468",
  storageBucket: "dashboard-54468.firebasestorage.app",
  messagingSenderId: "31121261809",
  appId: "1:31121261809:web:cbd9a61655c7fb19755550",
  measurementId: "G-BHJDYH973E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);