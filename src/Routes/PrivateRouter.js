import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Context/UserContext";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(authContext);
  if (loading) {
    return (
      <div>
        <button className="btn btn-square loading"></button>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;
