import React from "react";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../store/actions/userActions";

function User({ user, isFav = false }) {
  const dispatch = useDispatch();

  function handleClick() {
    if (isFav) {
      dispatch(removeFav(user));
    } else {
      dispatch(addFav(user));
    }
  }

  return <div onClick={handleClick}>{user.first_name}</div>;
}

export default User;
