import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();


const auth =getAuth(app)
const AuthProvider = ({ children }) => {

  const goProvider = new GoogleAuthProvider()
  const giProvider = new GithubAuthProvider()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
   
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>unsubscribe()
  },[])

  const googleProvider = () =>signInWithPopup(auth,goProvider)

  const githubProvider = () =>signInWithPopup(auth,giProvider)

  const emailRegister =(email,password)=> {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const emailSignIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const updateUser = (userInfo)=> updateProfile(auth.currentUser, userInfo)

  const logout = ()=> {
    setLoading(true)
   return signOut(auth)
  }

  const authInfo = {
    user,
    loading,
    googleProvider,
    githubProvider,
    emailRegister,
    emailSignIn,
    updateUser,
    logout,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
