// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ7BdzxIwa-6HbdDtpZAfR-F0JkTjLafA",
  authDomain: "realestate-d42e1.firebaseapp.com",
  projectId: "realestate-d42e1",
  storageBucket: "realestate-d42e1.appspot.com",
  messagingSenderId: "991548942124",
  appId: "1:991548942124:web:0f4ad0e3b3e27c67692e89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth