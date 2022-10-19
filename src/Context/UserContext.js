import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const authContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const contextInfo = { user: "Rajib" };
  return (
    <authContext.Provider value={contextInfo}>{children}</authContext.Provider>
  );
};

export default UserContext;
