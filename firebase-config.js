const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getAuth } = require("firebase/auth");
const admin = require('firebase-admin');

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCplEnB3MhU1XFrSDquAerj8j1G6QZsQ08",
    authDomain: "doc-master-backend.firebaseapp.com",
    projectId: "doc-master-backend",
    storageBucket: "doc-master-backend.appspot.com",
    messagingSenderId: "381050834912",
    appId: "1:381050834912:web:f1d6f11559bc2dbf08e585",
    measurementId: "G-FJ1PNRYZ17"
};

admin.initializeApp({
  credential: admin.credential.cert('./doc-master-backend-firebase-key.json'),
  projectId: "doc-master-backend",
});
    
const firestoreApp = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(firestoreApp);
const auth = getAuth(firestoreApp);

module.exports = { db, auth, admin, firestoreApp };