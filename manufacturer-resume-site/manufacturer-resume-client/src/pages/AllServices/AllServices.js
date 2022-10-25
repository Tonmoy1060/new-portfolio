import React, { useState } from "react";
import useServices from "../../hooks/useServices";
import AllService from "./AllService";
import BookingModal from "./BookingModal";

const AllServices = () => {
  const [services, setServices] = useServices([]);
  const [bookingService, setBookingService] = useState(null);
  return (
    <div className="py-14">
      <h1 className="text-center font-bold text-3xl text-primary pt-12">
        Our All Services
      </h1>
      <div className="lg:grid grid-cols-4 gap-7 p-14">
        {services.map((service) => (
          <AllService
            key={service._id}
            setBookingService={setBookingService}
            service={service}
          ></AllService>
        ))}
        <BookingModal
          bookingService={bookingService}
          setBookingService={setBookingService}
        ></BookingModal>
      </div>
    </div>
  );
};

export default AllServices;
