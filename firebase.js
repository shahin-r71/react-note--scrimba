import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB9dqAU1WP2zs9IerTNEY0PMv2wYajRE-M",
  authDomain: "react-notes-8f4c1.firebaseapp.com",
  projectId: "react-notes-8f4c1",
  storageBucket: "react-notes-8f4c1.appspot.com",
  messagingSenderId: "965361644792",
  appId: "1:965361644792:web:94fbf2dfb226bb61d7370d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")