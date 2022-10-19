import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const authContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const user = { displayName: "Rajib" };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const contextValue = { user, createUser, userSignIn };
  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default UserContext;
