import React from "react";
import BookingModal from "./BookingModal";

const AllService = ({ service, setBookingService }) => {
  const { name, description, price, img, _id } = service;
  return (
      <div class="card  bg-base-100 shadow-2xl my-5">
        <figure class="px-2 pt-5">
          <img
            src={img}
            alt="Shoes"
            class="rounded-xl h-20"
          />
        </figure>
        <div class="card-body  pt-4 items-center text-center pb-3">
          <h2 class="card-title">{name}</h2>
            <label onClick={() => setBookingService(service)} htmlFor="booking-modal" class="btn btn-sm btn-secondary modal-button px-6"><p className="font-bold text-xl text-white">${price}</p></label>
          <p><small className="text-xs ">{description.slice(0,100)}.....</small></p>
        </div>
      </div>
  );
};

export default AllService;
