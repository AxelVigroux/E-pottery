import { LOAD_PRODUCTS } from "../actions/products/actions-types";

const initialState = {
  products: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { products: action.payload };
    default:
      return state;
  }
};

export default ProductReducer;
