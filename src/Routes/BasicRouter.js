import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Booking from "../Pages/Booking";
import BookingConfirm from "../Pages/BookingConfirm";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("http://localhost:5000/services"),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/services", element: <Services></Services> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Register></Register> },
      {
        path: "/booking/:id",
        element: <Booking></Booking>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params.id}`),
      },
      {
        path: "/booking-confirm",
        element: <BookingConfirm></BookingConfirm>,
      },
    ],
  },
]);
