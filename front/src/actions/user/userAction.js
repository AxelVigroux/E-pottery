import { LOGOUT_USER, LOGGED_IN_USER } from "./actions-types";

export const logged_in_user = (user) => {
  return function (dispatch) {
    dispatch({
      type: LOGGED_IN_USER,
      payload: user,
    });
  };
};

export const logoutUser = () => {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_USER,
      payload: null,
    });
  };
};
