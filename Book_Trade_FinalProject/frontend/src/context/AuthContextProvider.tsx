import { ReactNode, useEffect, useState }
    from 'react';
import { User } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import AuthContext from './AuthContext';

function AuthProvider({children}: {children: ReactNode}) {
 const [ user, setUser ] = useState<User | null>(null);

 useEffect(() => { // useEffect to only register once at start
   return auth.onAuthStateChanged(newUser => {
     setUser(newUser);
   });
 }, []);

 useEffect(() => {
  console.log(user?.email)
 }, [user])

 const value = {
  user,
  setUser
 }

 return (
   <AuthContext.Provider value={value}>
     {children}
   </AuthContext.Provider>
 );
}
export default AuthProvider;
