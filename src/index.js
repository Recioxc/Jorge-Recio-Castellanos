import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configurationnpm
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIW9lMl7K8mCWVG27neS66ULSPclh9CRA",
  authDomain: "melomania-d4bde.firebaseapp.com",
  projectId: "melomania-d4bde",
  storageBucket: "melomania-d4bde.appspot.com",
  messagingSenderId: "563924355425",
  appId: "1:563924355425:web:d5d410334d6d035e28dd20",
  measurementId: "G-P2LFSEPMJS"
};

// Initialize Firebase



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

