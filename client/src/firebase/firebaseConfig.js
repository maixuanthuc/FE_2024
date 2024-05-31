// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZZw94vnTzgeZRDrMnP7LBTJs81q3sXg0",
    authDomain: "app-chat-4b09e.firebaseapp.com",
    projectId: "app-chat-4b09e",
    storageBucket: "app-chat-4b09e.appspot.com",
    messagingSenderId: "258938516571",
    appId: "1:258938516571:web:4fb57434894b03e0543b7e",
    measurementId: "G-2L90T9B4G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database  = getDatabase(app);

const auth = firebase.auth();
const db = firebase.getFirestore(app);
export {db};