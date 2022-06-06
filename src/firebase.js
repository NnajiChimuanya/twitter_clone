// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBuvmL-8_4hXUcQLc67vH_-R_MNPCixiWA",
  authDomain: "twitter-clone-d13f2.firebaseapp.com",
  projectId: "twitter-clone-d13f2",
  storageBucket: "twitter-clone-d13f2.appspot.com",
  messagingSenderId: "661405070488",
  appId: "1:661405070488:web:66134c1d17866077cecced",
  measurementId: "G-XQWBYRY2D3"
};


const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)

