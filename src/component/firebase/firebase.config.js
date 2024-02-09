// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey, 
//   authDomain: import.meta.env.VITE_authDomain, 
//   projectId: import.meta.env.VITE_projectId, 
//   storageBucket: import.meta.env.VITE_storageBucket, 
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHTLkLDxZUTXMAakia7jYUV6Lcd2dCCB4",
  authDomain: "e-commers-webside.firebaseapp.com",
  projectId: "e-commers-webside",
  storageBucket: "e-commers-webside.appspot.com",
  messagingSenderId: "969150754568",
  appId: "1:969150754568:web:0155a1288c6ba4dde0c6bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);