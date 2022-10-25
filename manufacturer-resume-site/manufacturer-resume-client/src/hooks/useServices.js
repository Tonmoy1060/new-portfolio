import React, { useEffect, useState } from 'react';

const useServices = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch('https://manufacturer-resume.onrender.com/services')
      .then(res => res.json())
      .then( data => setServices(data));
   }, [])
   return [services, setServices];
};

export default useServices;