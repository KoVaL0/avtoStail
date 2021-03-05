import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../components/StripeCheckout";
import "../stripe.css";

// load stripe outside of components render to avoid recreating stripe object on every render
const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = ({history}) => {
  return (
    <div className="container p-5 text-center">
      <h4>Спасибо!</h4>
      <p>Ваша заявка находтся в ожидании.<br/>В скором времени с вами свяжутся для уточнения информации.</p>
      <button
        onClick={() => history.push("/shop")}
        className="btn btn-primary mt-3"
      >
        Вернуться в каталог
      </button>
      <Elements stripe={promise}>
        <div className="col-md-8 offset-md-2">
          <StripeCheckout />
        </div>
      </Elements>
    </div>
  );
};

export default Payment;
