import React, { useEffect, useState } from "react";
import useServices from "../../hooks/useServices";
import Service from "./Service";
import { FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";


const Services = () => {
  const [services, setServices] = useServices([]);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-16 pt-6">
        Our Awesome <span className="text-primary">Services</span>
      </h1>
      <div className="lg:grid grid-cols-3 gap-8 px-28">
        {services.slice(0, 3).map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
      <div class="card-actions justify-end px-28">
        <Link to={'/allservices'} class="btn btn-secondary hover:text-red-500 text-white transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 duration-700 ...">Explore more <span className="p-2"><FaArrowRight /></span></Link>
      </div>
    </div>
  );
};

export default Services;
