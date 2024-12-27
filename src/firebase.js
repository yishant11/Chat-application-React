import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYNlShNLshoU1HYblT2eKBmGkBcs3ZHck",
  authDomain: "picgram-bdcc0.firebaseapp.com",
  databaseURL: "https://picgram-bdcc0.firebaseio.com",
  projectId: "picgram-bdcc0",
  storageBucket: "picgram-bdcc0.appspot.com",
  messagingSenderId: "356044515819",
  appId: "1:356044515819:web:b9a8d5b99970ddac6c11ae",
  measurementId: "G-N0VRYKGBTE"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore(app);
