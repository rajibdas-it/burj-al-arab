import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Propic from "../../assets/rajib.jpeg";
import { authContext } from "../../Context/UserContext";
import NavList from "./NavList";

const Header = () => {
  const { user, logOut } = useContext(authContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

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
          <div className="mr-5 hidden lg:block">
            <NavList></NavList>
          </div>
          {user?.uid && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={Propic} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <div className="mr-5 block lg:hidden">
                  <NavList></NavList>
                </div>
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                {user?.uid && (
                  <button
                    onClick={handleLogOut}
                    className="btn btn-outline btn-info"
                  >
                    Logout
                  </button>
                )}
              </ul>
            </div>
          )}
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
