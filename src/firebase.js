import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvqVLJxdAysUvQKD-TOyuKWFacxWi_pmE",
    authDomain: "e-shop-94813.firebaseapp.com",
    projectId: "e-shop-94813",
    storageBucket: "e-shop-94813.appspot.com",
    messagingSenderId: "311098896741",
    appId: "1:311098896741:web:48d1f62ec8ccca87c4318c",
    measurementId: "G-XB2VZWW6HX"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
