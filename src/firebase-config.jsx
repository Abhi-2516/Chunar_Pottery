import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxpNOYkeBm8ZpswaknMjT4B_D3CnOnr-w",
  authDomain: "pottery-e9b23.firebaseapp.com",
  projectId: "pottery-e9b23",
  storageBucket: "pottery-e9b23.firebasestorage.app",
  messagingSenderId: "71952774376",
  appId: "1:71952774376:web:6d12b0335a336c3f74455d",
  measurementId: "G-71BR3L492J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider, signOut };  // Export signOut here to use in other components
