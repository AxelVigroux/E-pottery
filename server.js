const { cloudinary } = require("./utils/cloudinary");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// les routes
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

app.use(userRouter);
app.use(productRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("listening port " + PORT + " all is ok");
});
