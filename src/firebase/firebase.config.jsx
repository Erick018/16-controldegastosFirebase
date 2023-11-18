import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg0I8tb6xpXPmRntWWLBrjYHUnwjNbcqI",
  authDomain: "puntoventa-1b873.firebaseapp.com",
  projectId: "puntoventa-1b873",
  storageBucket: "puntoventa-1b873.appspot.com",
  messagingSenderId: "101484661085",
  appId: "1:101484661085:web:cd8b474c530758628300b4"
};

const app = firebase.initializeApp(firebaseConfig)
export const database = app.firestore();
