import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { modifyCart, deleteItem } from "../actions/cart/cartAction";
import { Link } from "react-router-dom";
import Plus from "../assets/images/plus-solid.svg";
import Minus from "../assets/images/minus-solid.svg";

const Cart = (props) => {
  return (
    <div className="cart-main">
      <h1>Hi cart</h1>
      {props.cart.cart.length > 0 ? (
        <div className="cart-table">
          {props.cart.cart.map((item) => {
            let total = parseInt(item.price) * parseInt(item.quantityInCart);
            return (
              <tr key={item.id}>
                <div className="cart">
                  <td
                    className="cart-picture"
                    style={{
                      backgroundImage: `url(${item.picture})`,
                    }}
                  ></td>
                  <div className="cart-quantity">
                    <td>
                      <h2>{item.name}</h2>
                    </td>
                    <h4>Quantity</h4>
                    <ul>
                      {item.quantityInCart > 0 ? (
                        <li>
                          <button
                            onClick={() => {
                              props.modifyCart(props.cart.cart, item, -1);
                            }}
                          >
                            <img className="cart-icons" src={Minus} />
                          </button>
                        </li>
                      ) : (
                        <li></li>
                      )}
                      <li>{item.quantityInCart}</li>
                      <li>
                        <button
                          onClick={() => {
                            props.modifyCart(props.cart.cart, item, 1);
                          }}
                        >
                          <img className="cart-icons" src={Plus} />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="cart-price">
                    <h2>€{total}</h2>
                    <button
                      onClick={() => {
                        props.deleteItem(props.cart.cart, item);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              </tr>
            );
          })}
        </div>
      ) : (
        <h1>You caret is empty..</h1>
      )}
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    cart: store.cart,
  };
};

const mapDispatchToProps = {
  deleteItem,
  modifyCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
