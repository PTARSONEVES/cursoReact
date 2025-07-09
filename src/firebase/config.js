import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVrT5BnUBeuCCeS5ydGHg10JJ3j-2M5xo",
  authDomain: "cursoreact-94ce7.firebaseapp.com",
  projectId: "cursoreact-94ce7",
  storageBucket: "cursoreact-94ce7.firebasestorage.app",
  messagingSenderId: "503809971929",
  appId: "1:503809971929:web:c685cf20b256b238b750c8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };