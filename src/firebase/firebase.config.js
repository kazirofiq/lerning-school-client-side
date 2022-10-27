// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ9QgeZHyIFuj7ZSHzOhKj4tDTUVzUebM",
  authDomain: "client-side-assignment.firebaseapp.com",
  projectId: "client-side-assignment",
  storageBucket: "client-side-assignment.appspot.com",
  messagingSenderId: "664324639228",
  appId: "1:664324639228:web:5b8f29e192e2b5d93c4a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;