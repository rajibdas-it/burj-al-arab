import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

const authContext = createContext();

const auth = getAuth(app);

const UserContext = () => {
  return <div></div>;
};

export default UserContext;
