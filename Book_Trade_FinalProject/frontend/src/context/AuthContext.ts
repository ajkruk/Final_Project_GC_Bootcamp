import {
  User,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { createContext, useContext } from "react";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "firebase/database";
import { collection, addDoc } from 'firebase/firestore';
 // Assuming you have initialized Firebase

export interface AuthContextModel {
  user: User | null; // null when not logged in
}

const defaultValue: AuthContextModel = {
  user: null,
};

const AuthContext = createContext(defaultValue);

export const useUser = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user;
};

export const useAuth = () => {
  const navigate = useNavigate();

  const signInWithEmail = async (email: string, password: string) => {
    console.log("signed in");
    await signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user.user.email);
        navigate("/MainPage");
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    } navigate("/MainPage")
  };

  const signOutUser = async () => {
    console.log(auth.currentUser?.email);
    await signOut(auth)
      .then(() => {
        console.log(`Signed out successfully!`);
        navigate("/");
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };
  
  const updateUserProfile = async (displayName: string, photoURL: string) => {
    if (auth.currentUser) {
        console.log(auth.currentUser.displayName)
      await updateProfile(auth.currentUser, { displayName, photoURL })
        .then(() => {
          console.log(
            `updated ${auth.currentUser} displayName: ${displayName}, photoURL ${photoURL}`
          );
          navigate("/MainPage");
        })
        .catch((error: Error) => {
          console.log(error);
        });
    }
  };

  const createUserWithEmail = async (email: string, password: string): Promise<UserCredential> => {
    return await createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log("account created")
            return user
        })
  };

  return { signInWithEmail, signInWithGoogle, signOutUser, updateUserProfile, createUserWithEmail };
};



export const sendMessage = async (senderId: string, recipientId: string, messageContent: string) => {
  try {
    await addDoc(collection(db, 'messages'), {
      senderId,
      recipientId,
      content: messageContent,
      timestamp: new Date()
    });
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  }
};




export default AuthContext;
