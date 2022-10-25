import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../pages/Shared/Loading";

const useBookingData = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    // const url = `http://localhost:5000/booking?email=${user.email}`
    const url = `http://localhost:5000/booking/${user?.email}`;

    fetch(url, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          navigate("/");
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => {
        setBookings(data);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }
  return [bookings, setBookings];
};

export default useBookingData;
