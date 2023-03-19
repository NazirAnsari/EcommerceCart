import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './cart.css'
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEpHo24khUI-OpnNmqNmjCMGyjdgngfNU",
  authDomain: "cart-70c55.firebaseapp.com",
  projectId: "cart-70c55",
  storageBucket: "cart-70c55.appspot.com",
  messagingSenderId: "688476453903",
  appId: "1:688476453903:web:1a7cd188ac98b28a1bb77a"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

