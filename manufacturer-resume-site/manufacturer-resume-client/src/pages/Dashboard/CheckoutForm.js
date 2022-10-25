import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ exactBooking }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState(" ");
  const [success, setSuccess] = useState('');
  console.log(success)
  const { _id, price, client, email, service, paid } = exactBooking;

  useEffect(() => {
    fetch("https://manufacturer-resume.onrender.com/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || " ");
    setSuccess("");

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: client,
            email: email,
            
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
    } else {
      setCardError(" ");
      setSuccess("Congrats! payment Completed ");

      const payment = {
         email: email,
         transactionId : paymentIntent.id,
         service: service
      }
      fetch(`https://manufacturer-resume.onrender.com/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
        e.target.reset();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-end">
          {
             success ? 
            <button
            className="btn btn-success btn-sm mt-5"
            type="submit"
            disabled={!stripe || !clientSecret || paid || success}
          >
         Already Paid
          </button> :
          <button 
            className="btn btn-success btn-sm mt-5"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
          }
        </div>
      </form>
      <div className="text-end">
        {cardError && <small className="text-red-500">{cardError}</small>}
        {success && <small className="text-green-500">{success}</small>}
      </div>
    </>
  );
};

export default CheckoutForm;
