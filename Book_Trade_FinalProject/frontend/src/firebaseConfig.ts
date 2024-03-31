import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyCwiMSyQHXgL8MLgNpRHKW43fw4nRfXEUg",
  authDomain: "final-project-27649.firebaseapp.com",
  projectId: "final-project-27649",
  storageBucket: "final-project-27649.appspot.com",
  messagingSenderId: "887178166292",
  appId: "1:887178166292:web:0563d9042d8019263de701"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;

// export const setProfilePicture = (user: User, photoURL: string) => {
//     updateProfile(user, {photoURL})
// }
// export const setDisplayName = (user: User, displayName: string) => {
//   updateProfile(user, {displayName})
// }

// const authProvider = new GoogleAuthProvider();

// export function signInWithEmail(email: string, password: string) {
//   signInWithEmailAndPassword(auth, email, password)
// }

// export function signInWithGoogle(): void {
//  signInWithPopup(auth, authProvider);
// }

// export function signOut(): void {
//  auth.signOut();
// }
