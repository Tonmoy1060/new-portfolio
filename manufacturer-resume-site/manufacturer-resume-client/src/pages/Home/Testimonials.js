import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
   const [comments, setComments] = useState([]);
   useEffect(() => {
      fetch('comments.json')
      .then(res => res.json())
      .then( data => setComments(data));
   }, [])
  return (
   <div>
   <h1 className="text-4xl font-bold text-center my-14 pt-3">
     Testimonials
   </h1>
   <div className="lg:grid grid-cols-3 gap-8 px-28">
     {comments.slice(0, 3).map((comment) => (
       <Testimonial comment={comment}></Testimonial>
     ))}
   </div>
 </div>
  );
};

export default Testimonials;
