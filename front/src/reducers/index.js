import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import ProductReducer from "./productReducer";
import CartReducer from "./cartReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  products: ProductReducer,
  cart: CartReducer,
});

export default rootReducer;
