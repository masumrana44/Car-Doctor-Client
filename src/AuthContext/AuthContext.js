import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const userContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState([]);

  //   Create User With Email and Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   update user Profile
  const updasteUser = (name) => {
    return updateProfile(auth.config.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("User info updated");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  
  //   Login With GOogle
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   Login with Email, password
  const loginWithEmPass=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)

  }

  //   For LogOuţ
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("auth State Changed", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, loginWithGoogle, logOut, createUser, updasteUser,loginWithEmPass };
  return (
    <div>
      <userContext.Provider value={authInfo}>{children}</userContext.Provider>
    </div>
  );
};

export default AuthContext;
