import { initializeApp } from "firebase/app";

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';

import { 
  getDatabase, 
  ref, 
  set, 
  onValue, 
  update, 
  child, 
  push, 
  get,
  remove
} from "firebase/database";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_apiKey}`,
  authDomain: `${process.env.REACT_APP_authDomain}`,
  databaseURL: `${process.env.REACT_APP_databaseURL}`,
  projectId: `${process.env.REACT_APP_projectId}`,
  storageBucket: `${process.env.REACT_APP_storageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_messagingSenderId}`,
  appId: `${process.env.REACT_APP_appId}`,
  measurementId: `${process.env.REACT_APP_measurementId}`
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { 
  database, 
  auth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  ref, 
  set, 
  onValue,
  update,
  child,
  push,
  get,
  remove
};