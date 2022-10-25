import React, { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddService = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loading></Loading>;
  }
  const imageKey = "34f752286aded2af59f38a1fb88e9020";
  const handleAddService = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const image = e.target.image.files[0];

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    fetch(url, {
       method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const img = data.data.url;
        if (img) {
          const service = { name: title, description, price, img };

          fetch("https://manufacturer-resume.onrender.com/service", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(service),
          })
            .then((response) => response.json())
            .then((data) => {
               toast(`Successfully Added ${title} service`)
               setLoading(false);
               e.target.reset();
            });
         }
      });
  };
  return (
    <form onSubmit={handleAddService}>
      <h1 className="text-center text-2xl mb-9 text-primary font-bold">
        Add your new Service
      </h1>
      <div className="card w-full bg-base-100 shadow-xl card-body">
        <div className="flex">
          <div className="form-control w-full max-w-xs">
            <div>
              <label className="label">
                <span className="label-text">Service Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control max-w-xs mt-5">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder="description"
                required
              ></textarea>
            </div>
          </div>
          <div className="form-control w-full max-w-xs ml-20">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Set price"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <input
              type="file"
              name="image"
              placeholder="Type here "
              className="input input-bordered w-full max-w-xs mt-16"
              required
            />
          </div>
        </div>
      </div>
      <div className="card-actions justify-end mt-4">
        <button className="btn btn-sm px-6 py-4 pb-7 btn-primary text-white">
          Add Service
        </button>
      </div>
    </form>
  );
};

export default AddService;
