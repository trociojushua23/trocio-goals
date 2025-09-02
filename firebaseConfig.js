// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK6AhTAzZF8Fdw2NU11QGK_ChYcYTmpOo",
  authDomain: "mobile-app-j---tracker.firebaseapp.com",
  projectId: "mobile-app-j---tracker",
  storageBucket: "mobile-app-j---tracker.firebasestorage.app",
  messagingSenderId: "447113429400",
  appId: "1:447113429400:web:eee4fff2cc68d089ce2bed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 