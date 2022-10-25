import React from "react";

const Testimonial = ({ comment }) => {
  const { name, say, img, address } = comment;
  return (
    <div class="w-full rounded-xl mb-8 p-3 transition ease-in-out delay-100 hover:shadow-2xl hover:-translate-y-1 hover:scale-110 duration-700 ...">
      <div className="flex items-center">
        <div class="avatar">
          <div class="w-14 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="font-semibold">{address}</p>
        </div>
      </div>
      <div class="pt-3">
        <p>
          <small className="">{say}</small>
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
