// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-V2c-eLFSGmxWUnvr6-INBi7TJQ4Dr7o",
  authDomain: "msinteriors-72ec8.firebaseapp.com",
  projectId: "msinteriors-72ec8",
  storageBucket: "msinteriors-72ec8.appspot.com",
  messagingSenderId: "516783602051",
  appId: "1:516783602051:web:fc43260923e5e112f71eb6",
  measurementId: "G-92Q6W8EHXY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
