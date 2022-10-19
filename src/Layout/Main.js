import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer";
import Header from "../Pages/SharedPages/Header";

export const ServicesContext = createContext();

const Main = () => {
  const services = useLoaderData();

  return (
    <div>
      <ServicesContext.Provider value={services}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </ServicesContext.Provider>
    </div>
  );
};

export default Main;
