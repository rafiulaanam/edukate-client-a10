// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTdXlJSXZ-VpVxDoKLAZvzndwi3q0H59w",
  authDomain: "my-edukate.firebaseapp.com",
  projectId: "my-edukate",
  storageBucket: "my-edukate.appspot.com",
  messagingSenderId: "210169234374",
  appId: "1:210169234374:web:7ba55413dd5ff511f1e8c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;