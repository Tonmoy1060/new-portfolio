import React, { useEffect, useState } from 'react';

const useOrderList = () => {
   const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = "https://manufacturer-resume.onrender.com/booking";

    fetch(url, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) =>  res.json()
      )
      .then((data) => {
        setOrders(data);
      });
  }, []);
   return [orders];
};

export default useOrderList;