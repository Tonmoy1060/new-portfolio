import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const BookingModal = ({ bookingService, setBookingService }) => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleBooking = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const name = e.target.name.value;
    const price = e.target.price.value;
    const number = e.target.number.value;

    const order = {
      client: displayName,
      service: name,
      price: price,
      email: user.email,
      clientNumber: number,
    };

    fetch("https://manufacturer-resume.onrender.com/booking", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", order);
        toast(`${order?.service} added in dashboard,
        pay to confirm`)
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('sorry')
      });
      
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal flex justify-center items-center">
        <form
          onSubmit={handleBooking}
          className="modal-box relative w-11/12 max-w-xs card shadow-2xl "
          action=""
        >
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <input
            type="text"
            name="displayName"
            value={user?.displayName}
            class="input input-bordered w-full shadow-2xl max-w-sm"
          />

          <input
            type="text"
            name="name"
            value={bookingService?.name}
            class="input input-bordered my-3 shadow-2xl w-full max-w-sm"
            required
          />
          <input
            type="text"
            name="price"
            value={bookingService?.price}$
            class="input input-bordered mb-3 shadow-2xl w-full max-w-sm"
            required
          />
          <input
            type="number"
            name="number"
            placeholder="Your Number"
            class="input input-bordered mb-3 shadow-2xl w-full max-w-sm"
            required
          />
          <button>
          <label
            htmlFor="booking-modal"
            class="btn btn-secondary w-full text-center text-white shadow-2xl max-w-sm"
          >
            Confirm
          </label>
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookingModal;
