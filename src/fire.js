import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDEpHo24khUI-OpnNmqNmjCMGyjdgngfNU",
  authDomain: "cart-70c55.firebaseapp.com",
  projectId: "cart-70c55",
  storageBucket: "cart-70c55.appspot.com",
  messagingSenderId: "688476453903",
  appId: "1:688476453903:web:1a7cd188ac98b28a1bb77a"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;