import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth =getAuth(app)
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
    return ()=>unsubscribe()
  },[])

  const providerLogin = (provider) =>signInWithPopup(auth,provider)

  const emailRegister =(email,password)=> createUserWithEmailAndPassword(auth,email,password)

  const signIn =(email,password)=>signInWithEmailAndPassword(auth,email,password)

  const providerLogout = ()=> signOut(auth)

  const authInfo = {
    user,
    providerLogin,
    providerLogout,
    emailRegister,
    signIn
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
