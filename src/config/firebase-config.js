import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBTZFx-hJ3Jb_7j76jyJuk-rDAPUz7Tmp0",
  authDomain: "sinar-606db.firebaseapp.com",
  projectId: "sinar-606db",
  storageBucket: "sinar-606db.appspot.com",
  messagingSenderId: "825105728783",
  appId: "1:825105728783:web:9b303f2b1edc5157b16a7a",
  measurementId: "G-87K0HR9JYY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);