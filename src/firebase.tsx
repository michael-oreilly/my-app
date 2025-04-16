import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNjauDmdWjCSjHsjftkCGgIeH2hkAadmg",
  authDomain: "book-tracker-2ee28.firebaseapp.com",
  databaseURL:
    "https://book-tracker-2ee28-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "book-tracker-2ee28",
  storageBucket: "book-tracker-2ee28.firebasestorage.app",
  messagingSenderId: "415716091066",
  appId: "1:415716091066:web:bfd9d8fbc8908655688e83",
  measurementId: "G-Y1KVY8XCKH",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
