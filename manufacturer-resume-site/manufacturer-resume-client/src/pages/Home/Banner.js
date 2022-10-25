import React from "react";
import bannerImage from '../../assets/images/player.jpg'


const Banner = () => {
  return (
    <div className="bg-cyan-50">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse py-10 lg:px-8">
          <img
            src={bannerImage}
            className="lg:max-w-sm rounded-lg  shadow-2xl lg:mb-8 lg:mx-16"
          />
          <div className="lg:px-12 md:px-20 ">
            <h1 className="text-5xl font-bold">Train your son <br></br>for every game</h1>
            <p className="py-8">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-cyan-400 btn-primary text-white  ">Get An Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
