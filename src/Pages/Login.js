import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Context/UserContext";

const Login = () => {
  const { userSignIn } = useContext(authContext);
  const navigate = useNavigate();

  const handleUserSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleUserSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
                <label className="label">
                  <Link to="/signup" className="label-text-alt link link-hover">
                    <small>New to this website?</small>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
