import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCeHm69HR9N7DqI-NdTEVjvM16lLaTg_po",
  authDomain: "heavenly-7dc42.firebaseapp.com",
  projectId: "heavenly-7dc42",
  storageBucket: "heavenly-7dc42.firebasestorage.app",
  messagingSenderId: "1058006942616",
  appId: "1:1058006942616:web:647b64bcfa2969955021ed",
  measurementId: "G-SF1RWH1XE7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
