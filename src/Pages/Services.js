import React, { useContext } from "react";
import Service from "./Service";

import { ServicesContext } from "../Layout/Main";

const Services = () => {
  const services = useContext(ServicesContext);
  return (
    <div className="w-[80%] mx-auto mt-5">
      <div className="mb-5">
        <h1 className="text-center text-3xl font-bold italic mb-2">
          Our Services
        </h1>
        <hr className="w-[50%] mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((item) => (
          <Service key={item.id} item={item}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
