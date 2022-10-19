import React from "react";
import Service from "./Service";

const Home = () => {
  return (
    <div className="w-[80%] border border-red-400 mx-auto mt-5">
      <div className="mb-5">
        <h1 className="text-center text-3xl font-bold italic mb-2">
          Our Services
        </h1>
        <hr className="w-[50%] mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Service></Service>
        <Service></Service>
        <Service></Service>
      </div>
    </div>
  );
};

export default Home;
