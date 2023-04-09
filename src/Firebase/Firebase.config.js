// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTXwAGsxencbVQfNVKmAlslBuaWwFKOD0",
  authDomain: "car-doctor-5f187.firebaseapp.com",
  projectId: "car-doctor-5f187",
  storageBucket: "car-doctor-5f187.appspot.com",
  messagingSenderId: "57820777095",
  appId: "1:57820777095:web:dd9b5832ce23b660778622",
  measurementId: "G-CCHBBLQ3XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;