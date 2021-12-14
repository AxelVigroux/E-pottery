const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.static(__dirname + "build"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// les routes
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const orderRouter = require("./routes/orderRouter");

app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("listening port " + PORT + " all is ok");
});
