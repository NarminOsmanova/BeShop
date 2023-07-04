import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCxD_EcVEjWn8cysqgmHq3tifpL9pieJF8",
    authDomain: "beshop-b9cbb.firebaseapp.com",
    databaseURL: "https://beshop-b9cbb-default-rtdb.firebaseio.com",
    projectId: "beshop-b9cbb",
    storageBucket: "beshop-b9cbb.appspot.com",
    messagingSenderId: "281189375837",
    appId: "1:281189375837:web:16969082a83268a67a12b4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
