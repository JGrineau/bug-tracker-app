// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add a script to import other Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAb6sslgxqFn58KBwolvCyjQlJz8eDNv0I",
  authDomain: "todo-app-f55e3.firebaseapp.com",
  projectId: "todo-app-f55e3",
  storageBucket: "todo-app-f55e3.appspot.com",
  messagingSenderId: "909573387926",
  appId: "1:909573387926:web:a6b30f1e3b911e89f7b4b7",
  measurementId: "G-NXYDNEFWG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);