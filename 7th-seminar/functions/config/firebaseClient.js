const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyC4UAFMRIaFZRFKgG6N6r7bcBs5r4EIZmQ",
  authDomain: "wesopt29-29377.firebaseapp.com",
  projectId: "wesopt29-29377",
  storageBucket: "wesopt29-29377.appspot.com",
  messagingSenderId: "737107332227",
  appId: "1:737107332227:web:14b6dbc81cac20cc2fdfb6",
  measurementId: "G-8RFC040KGJ"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };
