import React from "react";
import { FaFemale, FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ item }) => {
  const { id, roomType, bed, person, fair, img } = item;
  return (
    <div className="mb-5">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{roomType}</h2>
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
            <p>$ {fair}</p>
            <div className="card-actions justify-end">
              <Link to={`../booking/${id}`}>
                <button className="btn btn-primary">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
