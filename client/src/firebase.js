// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ctma-48bb8.firebaseapp.com",
  projectId: "ctma-48bb8",
  storageBucket: "ctma-48bb8.firebasestorage.app",
  messagingSenderId: "1079963153538",
  appId: "1:1079963153538:web:b07f0ca01e5823ac80f09b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
