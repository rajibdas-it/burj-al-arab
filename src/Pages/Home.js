import React, { useContext } from "react";
import Service from "./Service";
import { ServicesContext } from "../Layout/Main";

const Home = () => {
  const services = useContext(ServicesContext);
  return (
    <div>
      <div className="w-[80%] mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
