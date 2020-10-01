import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuSc7s0H8XTU-rBjMvyJm5kS7XyxWJLVs",
  authDomain: "clone-5c209.firebaseapp.com",
  databaseURL: "https://clone-5c209.firebaseio.com",
  projectId: "clone-5c209",
  storageBucket: "clone-5c209.appspot.com",
  messagingSenderId: "1044148445601",
  appId: "1:1044148445601:web:f0c0568416cd5ec04f2be0",
};

const firebsaeApp = firebase.initializeApp(firebaseConfig);
const db = firebsaeApp.firestore();
const auth = firebase.auth();

export { db, auth };
