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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
