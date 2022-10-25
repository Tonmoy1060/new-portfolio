import React from "react";

const MessageSection = () => {
  return (
    <div className="bg-cyan-50  py-12 mt-16">
      <h1 className="text-4xl font-bold text-center py-8">
        Let us handle your <br /> child , Personally
      </h1>
      <div className="flex justify-center items-center">
        <form className="w-1/2" action="">
          <div className="lg:flex pt-8">
            <input
              type="text"
              placeholder="First Name"
              className="input w-full max-w-sm lg:mr-5 mb-5"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input w-full max-w-sm mb-5"
            />
          </div>
          <div className="lg:flex ">
            <input
              type="text"
              placeholder="Email Address"
              className="input w-full max-w-sm lg:mr-5 mb-5"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input w-full max-w-sm mb-5"
            />
          </div>
          <textarea
            className="textarea  w-full lg:max-w-full max-w-sm"
            placeholder="Your Message"
          ></textarea>
          <div className="flex justify-center items-center mt-6">
          <button className="btn px-10 btn-primary text-white">Sent Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageSection;
