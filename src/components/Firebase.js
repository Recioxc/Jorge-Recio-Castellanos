
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDIW9lMl7K8mCWVG27neS66ULSPclh9CRA",
    authDomain: "melomania-d4bde.firebaseapp.com",
    projectId: "melomania-d4bde",
    storageBucket: "melomania-d4bde.appspot.com",
    messagingSenderId: "563924355425",
    appId: "1:563924355425:web:d5d410334d6d035e28dd20",
    measurementId: "G-P2LFSEPMJS"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)