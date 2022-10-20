import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const NavList = () => {
  const { user } = useContext(authContext);
  return (
    <ul className="flex flex-col lg:flex-row gap-0 lg:gap-5">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/services">Our Services</Link>
      </li>

      {user?.uid ? (
        <li>
          <p>Welcome, {user?.email}</p>
        </li>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavList;
