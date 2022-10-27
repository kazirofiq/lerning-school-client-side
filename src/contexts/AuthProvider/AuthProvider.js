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
    const gitProviderLogin = (githubProvider) =>{
        return signInWithPopup(auth, githubProvider);
    }
   
    const createUser = (email, password) => {
       
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
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


    
    const authInfo = {user, providerLogin, logOut, createUser, signIn, gitProviderLogin}
  
    return (
        <AuthContest.Provider value={ authInfo }>
            {children}
        </AuthContest.Provider>
    );
};

export default AuthProvider;