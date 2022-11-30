import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiK2mQcRQxcMzEgYuL5WoXLJxOtzulLxk",
  authDomain: "clone-4f94e.firebaseapp.com",
  projectId: "clone-4f94e",
  storageBucket: "clone-4f94e.appspot.com",
  messagingSenderId: "279154070534",
  appId: "1:279154070534:web:bc2b700c0ee1a476185f87",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
