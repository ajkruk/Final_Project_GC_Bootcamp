import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCwiMSyQHXgL8MLgNpRHKW43fw4nRfXEUg",
  authDomain: "final-project-27649.firebaseapp.com",
  projectId: "final-project-27649",
  storageBucket: "final-project-27649.appspot.com",
  messagingSenderId: "887178166292",
  appId: "1:887178166292:web:0563d9042d8019263de701"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export const firestore = firebase.firestore();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;

// const authProvider = new GoogleAuthProvider();

// export function signInWithGoogle(): void {
//  signInWithPopup(auth, authProvider);
// }
