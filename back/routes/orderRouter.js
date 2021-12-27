const router = require("express").Router();
const OrderModel = require("../models/OrderModel");
const ProductModel = require("../models/ProductModel");
const withAuth = require("../withAuth");
const cors = require("cors");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// router.post("/order/save", async (req, res) => {
//   console.log("trigger router ?");
//   let total = req.body.total;
//   let order = await OrderModel.saveOneOrder(req.body.customer_id, total);

//   if (order.code) {
//     res.json({ status: 500, error: order });
//   }
//   console.log("ORDER ROUTE OK", order);
//   res.json({ status: 400, results: order });
// });

router.post("/stripe/charge", cors(), async (req, res) => {
  console.log("stripe-routes.js 9 | route reached", req.body);

  let { amount, id } = req.body;
  console.log("stripe-routes.js 10 | amount and id", amount, id);

  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "EUR",
      description: "E-pottery",
      payment_method: id,
      confirm: true,
    });
  } catch (error) {
    console.log("stripe-routes.js 17 | error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

module.exports = router;
