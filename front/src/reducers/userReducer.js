/* eslint-disable default-case */
import { LOGGED_IN_USER, LOGOUT_USER } from "../actions/user/actions-types";

const initialState = {
  isLogged: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return { ...state, user: action.payload, isLogged: true };

    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
