import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./checkoutForm";

const PUBLIC_KEY =
  "pk_test_51HjmSAEhuqqRDNMaAn5nyYZYOfRM2X9hToR1PivO48D4j3gel8kncA2A1jVjxixr7TNZYv5NKMmfPuhhvcoZsr5e00i9ov5EAU";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};
export default Stripe;
