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
  apiKey: "AIzaSyA8-dsbrSbuxb9HykjU1dK6_FYVh5IySyg",
  authDomain: "huge-icons.firebaseapp.com",
  projectId: "huge-icons",
  storageBucket: "huge-icons.appspot.com",
  messagingSenderId: "871615865020",
  appId: "1:871615865020:web:a04a44e11530a8149cf0b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);