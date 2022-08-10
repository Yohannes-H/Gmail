import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoPjJqtawdTKbVDCBgBBqv2s0SKQVWCkQ",
  authDomain: "clone-f15c3.firebaseapp.com",
  projectId: "clone-f15c3",
  storageBucket: "clone-f15c3.appspot.com",
  messagingSenderId: "216754698257",
  appId: "1:216754698257:web:3feccc8deb4b239daa59b0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
