// import React, { useEffect, useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { connect } from "react-redux";
// import axios from "axios";
// import { config } from "../config";

// export const CheckoutForm = (props) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     // const amount

//     if (!error) {
//       console.log("Stripe 23 | token generated!", paymentMethod);
//       //send token to backend here
//       try {
//         const { id } = paymentMethod;
//         const response = await axios.post(config.api_url + "/stripe/charge", {
//           amount: 999,
//           id: id,
//         });
//         console.log("Stripe 35 | data", response.data.success);
//         if (response.data.success) {
//           console.log("CheckoutForm.js 25 | payment successful!");
//         }
//       } catch (error) {
//         console.log("CheckoutForm.js 28 | ", error);
//       }
//     } else {
//       console.log(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
//       <CardElement />
//       <button>Pay</button>
//     </form>
//   );
// };

// const mapStateToProps = (store) => {
//   return {
//     cart: store.cart,
//   };
// };

// export default connect(mapStateToProps, null)(CheckoutForm);
