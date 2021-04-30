import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA4U2k6wBT-ZpakBYEEPQZoR0uFTEsoOu0",
  authDomain: "crwn-db-20210429.firebaseapp.com",
  projectId: "crwn-db-20210429",
  storageBucket: "crwn-db-20210429.appspot.com",
  messagingSenderId: "458372627447",
  appId: "1:458372627447:web:f1209151ea91b0c83cccf2",
  measurementId: "G-JETKX8H3S8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
