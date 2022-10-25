import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, description, price, img } = service;
  return (
    <div className="card w-full mb-8 image-full transition ease-in-out delay-100 shadow-2xl hover:-translate-y-1 hover:scale-110 duration-700 ...">
      <figure>
        <img className="w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body  text-center">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <Link to={'/allservices'} className=" text-5xl font-bold text-red-500">${price}</Link>
        <p>
          <small>{description.slice(0,150)}.....</small>
        </p>
      </div>
    </div>
  );
};

export default Service;
