import React from "react";
import { FaBed, FaFemale } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Booking = () => {
  const singleService = useLoaderData();
  const { bed, fair, id, img, person, roomType } = singleService;
  return (
    <div>
      <h1 className="mt-5 mb-5 text-4xl font-bold text-center">
        Details of {roomType}
      </h1>
      <div className="w-[70%] mx-auto">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img className="w-full" src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="flex items-center">
              <p className="flex items-center gap-1">
                <span>
                  <FaBed />
                </span>
                <span>{bed}</span>
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <FaFemale />
                </span>
                <span>{person}</span>
              </p>
              <p>Per Night: ${fair}</p>
            </div>
            <div className="card-actions justify-center">
              <Link to={`../booking-confirm`}>
                <button className="btn btn-primary">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
