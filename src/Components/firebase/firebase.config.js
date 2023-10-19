// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhTWyUk7bErCpysyGoF4HGkveCwuDQs2Y",
  authDomain: "techies-client.firebaseapp.com",
  projectId: "techies-client",
  storageBucket: "techies-client.appspot.com",
  messagingSenderId: "278791952722",
  appId: "1:278791952722:web:ce4013f550a36d2b19028b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
