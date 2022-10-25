import React from "react";
import player from "../../assets/images/player.jpg";
import bannerImage2 from '../../assets/images/banner3.jpg'

const TrainChild = () => {
  return (
    <div className="bg-cyan-50 lg:p-10 my-28">
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row lg:px-14">
          <img
            src={bannerImage2}
            class="max-w-lg rounded-lg shadow-2xl lg:mb-8 lg:mx-12"
          />
          <div className="lg:px-12 md:px-20">
            <h1 class="text-4xl font-semibold">
              Let us handle your <br></br> son <span className="text-primary">professionally</span>
            </h1>
            <p class="py-8 text-accent">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex mt-5">
               <div className="flex justify-center flex-col items-center mr-20"><h1 className="text-5xl font-bold text-secondary py-3">500+</h1>
               <p className="font-semibold">Happy Customers</p></div>
               <div className="flex justify-center flex-col items-center"><h1 className="text-5xl font-bold text-secondary py-3">16+</h1>
               <p className="font-semibold">Total service</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainChild;
