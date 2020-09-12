// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDsundi2aR2PMJym9GCt7ogD0kXQJDKPWk",
    authDomain: "todo-app-tpn.firebaseapp.com",
    databaseURL: "https://todo-app-tpn.firebaseio.com",
    projectId: "todo-app-tpn",
    storageBucket: "todo-app-tpn.appspot.com",
    messagingSenderId: "653087406662",
    appId: "1:653087406662:web:f0b4de7d1ed330d7376847",
    measurementId: "G-1SGW6PVXBP"
})

const db = firebaseApp.firestore();

export default db;