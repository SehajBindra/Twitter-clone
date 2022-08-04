// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKRFqolB5T-PpWP-RNRz5B-QeQlTmleyQ",
  authDomain: "twitter-clone-d94f6.firebaseapp.com",
  projectId: "twitter-clone-d94f6",
  storageBucket: "twitter-clone-d94f6.appspot.com",
  messagingSenderId: "1549044948",
  appId: "1:1549044948:web:8745198653091a219c7f41",
  measurementId: "G-82GFZPB3RW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
