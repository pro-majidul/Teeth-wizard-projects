// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_7vtIy1AcI8_TQ8jRsrn46ZWUa5xk4Jo",
    authDomain: "teeth-wizard-57725.firebaseapp.com",
    projectId: "teeth-wizard-57725",
    storageBucket: "teeth-wizard-57725.firebasestorage.app",
    messagingSenderId: "638801461331",
    appId: "1:638801461331:web:e10248c721e2d3e9d9c6a6"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
