import { getAuth } from "firebase/auth"; //firebase authentication
import firebase from "firebase/compat/app"; //firebase compatibility
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

// Get a reference to the Firestore database service
export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;
