import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useBookingData from "../../hooks/useBookingData";
import Loading from "../Shared/Loading";

const BookingList = () => {
  const [user, loading, error] = useAuthState(auth);
  const [bookings, setBookings] = useBookingData([ ]);
  if(loading){
    return <Loading></Loading>
   }
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Welcome {user?.displayName},</h1>
      <p className="text-sm font-semibold mb-4">your order list here</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{booking?.client}</td>
                <td>{booking?.service}</td>
                <td>{booking?.price}$</td>
                <td>{(booking?.paid) ? <p className="text-primary">PAID</p> : <Link to={`/dashboard/book/${booking?._id}`} className="btn btn-xs px-5 btn-secondary">pay</Link>
                  
                  }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
