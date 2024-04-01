import {
  User,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useContext } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "firebase/database";

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
        navigate("/MainPage"); //maybe navigate like in NewUserForm
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
    }
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
  const createUserWithEmail = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("account created")
            navigate("/UpdateUser")
        }).catch((error: Error) => {
            console.log(error)
        })

  };

  return { signInWithEmail, signInWithGoogle, signOutUser, updateUserProfile, createUserWithEmail };
};

// const viewUsers = async (diplayName: string, photoURL: string) => {
//     await 

// }
// const user = auth.currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.getIdToken;
// }

export default AuthContext;
