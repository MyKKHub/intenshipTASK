// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU_k8PbDnM1EFNbLNxPMOadw1omwJeUDE",
  authDomain: "fit-trackie.firebaseapp.com",
  databaseURL: "https://fit-trackie-default-rtdb.firebaseio.com",
  projectId: "fit-trackie",
  storageBucket: "fit-trackie.appspot.com",
  messagingSenderId: "722857256289",
  appId: "1:722857256289:web:42c7870323790905ae5120",
  measurementId: "G-H7699MJTM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
export default app;