import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA-AF7I4_uKlFcCgyufabYB2Z5du5GmzZw",
    authDomain: "final-project-3fa57.firebaseapp.com",
    databaseURL: "https://final-project-3fa57-default-rtdb.firebaseio.com",
    projectId: "final-project-3fa57",
    storageBucket: "final-project-3fa57.appspot.com",
    messagingSenderId: "281827844614",
    appId: "1:281827844614:web:c8fda3b8c3915323335987"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
