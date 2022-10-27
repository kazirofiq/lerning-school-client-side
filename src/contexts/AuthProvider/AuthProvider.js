import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';




export const AuthContest = createContext();
const auth =getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }
   
  useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
    console.log('user inside', currentUser);
        setUser(currentUser)
    });

    return () => {
        unsubscribe();
    }
  }, []) 


    
    const authInfo = {user, providerLogin}
  
    return (
        <AuthContest.Provider value={ authInfo }>
            {children}
        </AuthContest.Provider>
    );
};

export default AuthProvider;