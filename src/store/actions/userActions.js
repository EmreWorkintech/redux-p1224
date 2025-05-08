export const GET_USERS = "gets user list";
export const GET_STATE_LOADING = "loading";
export const GET_ERROR = "gets error";
export const ADD_FAV = "adds to fav";
export const REMOVE_FAV = "removes from fav";

export function getUsers(users) {
  return {
    type: GET_USERS,
    payload: users,
  };
}

export function getStateloading() {
  return {
    type: GET_STATE_LOADING,
  };
}

export function getError(message) {
  return {
    type: GET_ERROR,
    payload: message,
  };
}

export function addFav(user) {
  return {
    type: ADD_FAV,
    payload: user,
  };
}

export function removeFav(user) {
  return {
    type: REMOVE_FAV,
    payload: user,
  };
}
