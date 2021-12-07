const router = require("express").Router();
const ProductsModel = require("../models/ProductModel");
let config = require("../config");
const withAuth = require("../withAuth");

/** ONE PRODUCT */

router.get("/product/:id", async (req, res) => {
  const id = req.params.id;

  let product = await ProductsModel.getOneProduct(id);

  if (product.code) {
    res.json({ status: 500, error: product });
  }
  res.json({ status: 200, results: product });
});

/** USER PRODUCT */

router.get("/products/:user_id", async (req, res) => {
  const user_id = req.params.user_id;

  let products = await ProductsModel.getProductByUserId(user_id);

  if (products.code) {
    res.json({ status: 500, error: products });
  }
  res.json({ status: 200, results: products });
});

/** ALL PRODUCTS */

router.get("/products", async (req, res) => {
  let products = await ProductsModel.getAllProduct();

  if (products.code) {
    res.json({ status: 500, error: products });
  }
  res.json({ status: 200, results: products });
});

/** ADD PRODUCT */

router.post("/product/add", withAuth, async (req, res) => {
  let newProduct = await ProductsModel.saveOneProduct(req);

  if (newProduct.code) {
    res.json({ status: 500, error: newProduct });
  }
  res.json({ status: 200, results: newProduct });
});

/** PICTURE */

router.post("/product/picture", withAuth, async (req, res, next) => {
  let product = await ProductsModel.updatePicture(req);

  if (product.code) {
    res.json({ status: 500, message: "Error", result: product });
  }

  res.json({ status: 200, message: "Update done !", result: product });
});

/* UPDATE PRODUCT */

router.put("/product/update/:id", async (req, res) => {
  let id = req.params.id;

  let product = await productModel.updateOneProduct(id);

  if (product.code) {
    res.json({ status: 500, message: "Error", result: product });
  }
  res.json({ status: 200, message: "Update done !", result: product });
});

/* DELETE PRODUCT */

router.delete("/product/delete/:id", async (req, res) => {
  let id = req.params.id;

  let product = await productModel.getOneProduct(id);

  let deleteProduct = await productModel.deleteOneProduct(id);

  if (deleteProduct.code) {
    res.json({ status: 500, message: "Error", result: product });
  }

  res.json({ status: 200, result: deleteProduct });
});

module.exports = router;
