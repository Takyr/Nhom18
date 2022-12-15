// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPmhc48mh80Ly_XzJEpE-dRb5qzZWRffM",
  authDomain: "testproj-1a15e.firebaseapp.com",
  projectId: "testproj-1a15e",
  storageBucket: "testproj-1a15e.appspot.com",
  messagingSenderId: "728595152906",
  appId: "1:728595152906:web:273a753b5687174cb31ff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)