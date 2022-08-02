
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut 
  } from 'firebase/auth';

import {getFirestore} from 'firebase/firestore'

// import 'firebase/firestore'
// import 'firebase/firebase-auth'

const firebaseConfig = {
  apiKey: "AIzaSyC9DbO8tYu4f9PRJfhPbvXNLDaHm8pkrLY",
  authDomain: "my-app-fbad6.firebaseapp.com",
  projectId: "my-app-fbad6",
  storageBucket: "my-app-fbad6.appspot.com",
  messagingSenderId: "666612982712",
  appId: "1:666612982712:web:7e6a2976a6c9469b86654d"
};

// firebaseConfig.firestore.settings({timesampsInSnapshots:true})
export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)

const auth = getAuth();

export {
auth,
createUserWithEmailAndPassword,
updateProfile,
onAuthStateChanged,
signInWithEmailAndPassword,
signOut
}


// pcAlg7HnIV59mWjb7Pva