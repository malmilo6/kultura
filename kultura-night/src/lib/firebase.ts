import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// paste your project config from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyBZ9qGTb6mjVCoec-2MYmeCog1iURtMFiE",
  authDomain: "kultura-e90b7.firebaseapp.com",
  projectId: "kultura-e90b7",
  storageBucket: "kultura-e90b7.firebasestorage.app",
  messagingSenderId: "877903593203",
  appId: "1:877903593203:web:9d073a3a42663446170186",
  measurementId: "G-QWT5R5WMM9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);