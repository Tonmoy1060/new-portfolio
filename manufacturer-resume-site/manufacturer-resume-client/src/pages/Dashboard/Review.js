import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const Review = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleReview = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const location = e.target.location.value;
    const comment = e.target.comment.value;

    const review = {
      name: name,
      location: location,
      comment: comment,
      email: user.email,
    };

    fetch("http://localhost:5000/review", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast(`Thanks ${review?.name} for review us`);
        } else {
          toast.error("you already commented");
        }

        e.target.reset();
      });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">
        Welcome {user.displayName},
      </h1>
      <p className="text-xl font-semibold mb-4">Please review us</p>
      <form onSubmit={handleReview} action="">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          class="input w-full max-w-xs"
          required
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Location"
          class="input w-full my-4 max-w-xs"
          required
        />
        <br />
        <textarea
          class="textarea w-full mb-4 max-w-xs"
          placeholder="Say details"
          name="comment"
          required
        ></textarea>
        <br />
        <button class="btn text-white px-9 btn-sm btn-primary">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Review;
