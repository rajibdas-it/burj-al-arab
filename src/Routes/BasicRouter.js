import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Booking from "../Pages/Booking";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/booking", element: <Booking></Booking> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Register></Register> },
    ],
  },
]);
