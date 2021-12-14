import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getAllProducts } from "../../actions/products/productAction";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { config } from "../../config";
import cart from "../../assets/images/Cart.svg";
import { modifyCart } from "../../actions/cart/cartAction";

const Product = (props) => {
  const [item, setItem] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  let { id } = props.match.params;

  useEffect(() => {
    axios.get(config.api_url + "/product/" + id).then((response) => {
      console.log("RESPONSE", response.data.results[0]);
      setItem(response.data.results[0]);
    });
  }, []);

  if (!item) return "Loading...";
  return (
    <div className="product-main-container">
      {redirect && <Redirect to="/products" />}
      <div className="product-bg"></div>
      <div className="product-left">
        <div
          className="product-pic"
          style={{
            backgroundImage: `url(${item.picture})`,
          }}
        ></div>
      </div>
      <div className="product-right">
        <div className="right-head">
          <h1> {item.name} </h1>
          <Link to={"/creator/" + item.user_id}>
            <p>By {item.creator_name} - Discover more about his work.</p>
          </Link>
        </div>
        <div className="right-description">
          <p>{item.description}</p>
        </div>
        <div className="right-bottom">
          <h2 className="price">{item.price} €</h2>
          <div className="button-add">
            <button
              className="add-cart"
              onClick={(e) => {
                props.modifyCart(props.cart.cart, item, 1);
                setRedirect(true);
              }}
            >
              Add to cart
            </button>
            <img src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    cart: store.cart,
  };
};

const mapDispatchToProps = {
  modifyCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
