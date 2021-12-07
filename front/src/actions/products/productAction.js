import { LOAD_PRODUCTS } from "./actions-types";
import axios from "axios";
import { config } from "../../config";

export const getAllProducts = () => {
  return function (dispatch) {
    axios.get(config.api_url + "/products").then((response) => {
      dispatch({
        type: LOAD_PRODUCTS,
        payload: response.data.results,
      });
    });
  };
};
