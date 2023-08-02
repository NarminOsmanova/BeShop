import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAN2_f2kAI-ODmDiB1q4wu5sHRih2cIaLQ",
    authDomain: "beshop-4240a.firebaseapp.com",
    databaseURL: "https://beshop-4240a-default-rtdb.firebaseio.com",
    projectId: "beshop-4240a",
    storageBucket: "beshop-4240a.appspot.com",
    messagingSenderId: "451167802164",
    appId: "1:451167802164:web:6fc598ac1b5f94c1e90b61"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
