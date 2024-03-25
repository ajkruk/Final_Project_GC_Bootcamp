import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCwiMSyQHXgL8MLgNpRHKW43fw4nRfXEUg",
  authDomain: "final-project-27649.firebaseapp.com",
  projectId: "final-project-27649",
  storageBucket: "final-project-27649.appspot.com",
  messagingSenderId: "887178166292",
  appId: "1:887178166292:web:0563d9042d8019263de701"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
// const userRef = ref(storage, 'user.jpg');
// const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// const userImagesRef = ref(storage, 'images/user.jpg')
// userRef.name === userImagesRef.name;
// userRef.fullPath === userImagesRef.fullPath;
// uploadBytes(storageRef, file).then((snapshot) => {
//   console.log('Uploaded a blob or file!');
// });
// getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//   console.log('File available at', downloadURL);
// });

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
 signInWithPopup(auth, authProvider);
}
export function signOut(): void {
 auth.signOut();
}
