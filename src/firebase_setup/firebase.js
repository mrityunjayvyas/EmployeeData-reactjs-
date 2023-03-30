// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcRm0D6KTjmBK6FzunbGfDxzodgRyDlxc",
  authDomain: "employeedetails-3a294.firebaseapp.com",
  projectId: "employeedetails-3a294",
  storageBucket: "employeedetails-3a294.appspot.com",
  messagingSenderId: "966585519360",
  appId: "1:966585519360:web:7b1cbafc22acd76dc137e5",
  measurementId: "G-YZ2PPTLPEF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
