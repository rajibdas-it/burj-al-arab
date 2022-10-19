import React, { useState } from "react";
import { Link } from "react-router-dom";
import Propic from "../../assets/rajib.jpeg";

import { authContext } from "../../Context/UserContext";

const Header = () => {
  const { user } = useState(authContext);
  return (
    <div>
      {/* menu start */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl font-serif italic bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          >
            Burj-Al-Arab
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="mr-5">
            <ul className="flex  gap-5">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
              {user?.uid ? (
                <li>
                  <p>Welcome, {user?.email}</p>
                </li>
              ) : (
                "n/a"
              )}
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={Propic} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* menu end */}
      {/* Banner start  */}
      <div
        className="hero "
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to <br /> <span className="italic">Burj-Al-Arab</span>
            </h1>
            <p className="mb-5">A global icon of Arabian luxury</p>
            <button className="btn btn-primary">
              <Link to="/">Reserved</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Banner end */}
    </div>
  );
};

export default Header;
