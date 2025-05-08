import React from "react";
import {
  GET_ERROR,
  GET_USERS,
  GET_STATE_LOADING,
  ADD_FAV,
  REMOVE_FAV,
} from "../actions/userActions";
const initialState = {
  users: [],
  loading: false,
  error: "",
  favs: [],
};
function sortObject(obj, key) {
  return obj.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        error: "",
        users: sortObject(action.payload, "first_name"),
      };
    case GET_STATE_LOADING:
      return { ...state, loading: true, error: "" };
    case GET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ADD_FAV:
      return {
        ...state,
        favs: sortObject([action.payload, ...state.favs], "first_name"),
        users: state.users.filter((user) => user.id != action.payload.id),
      };
    case REMOVE_FAV:
      return {
        ...state,
        favs: state.favs.filter((item) => item.id != action.payload.id),
        users: sortObject([...state.users, action.payload], "first_name"),
      };
    default:
      return { ...state };
  }
}

export default userReducer;
