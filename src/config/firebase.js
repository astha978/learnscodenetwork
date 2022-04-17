// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
import {getStorage} from '@firebase/storage'
import { getAuth} from "firebase/auth";
import courseList from "../screens/courseList";


const firebaseConfig = {
  apiKey: "AIzaSyDdA1uEQfkMX-2a8BfRQuRREcUTbahcZqY",
  authDomain: "learningscodenetwork.firebaseapp.com",
  projectId: "learningscodenetwork",
  storageBucket: "learningscodenetwork.appspot.com",
  messagingSenderId: "636585881634",
  appId: "1:636585881634:web:a2ea63e17f6a873c971a7b",
  measurementId: "G-6TQL3SNV70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(courseList);   
const db = getFirestore(courseList);
const storage = getStorage(courseList);
const auth = getAuth(courseList);

export {db,storage,auth}
  

