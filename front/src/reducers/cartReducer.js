import { MODIFY_CART } from "../actions/cart/actions-types";

let lsCart = JSON.parse(window.localStorage.getItem("cart"));

if (lsCart === null) {
  lsCart = [];
}
let totalPrice = calculateTotaleAmout(lsCart);

const initialState = {
  cart: lsCart,
  totalPrice: totalPrice,
};

function calculateTotaleAmout(cart) {
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    let total = parseInt(cart[i].price) * parseInt(cart[i].quantityInCart);

    totalPrice += total;
  }

  return totalPrice;
}

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case MODIFY_CART:
      let totalPrice = calculateTotaleAmout(action.payload);
      return { cart: action.payload, totalPrice: totalPrice };

    default:
      return state;
  }
}
