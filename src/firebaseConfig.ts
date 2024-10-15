
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAJaRw0GJzkPMx264kNSdh1ZbJj9hweHoA",
  authDomain: "to-do-list-8d6b6.firebaseapp.com",
  projectId: "to-do-list-8d6b6",
  storageBucket: "to-do-list-8d6b6.appspot.com",
  messagingSenderId: "978715254480",
  appId: "1:978715254480:web:e6e6e6b82d173fc8d0c8d5"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider= new GoogleAuthProvider();