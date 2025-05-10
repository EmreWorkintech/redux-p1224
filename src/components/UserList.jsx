import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  getStateloading,
  getError,
} from "../store/actions/userActions";
import User from "./User";

function UserList() {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading);
  const error = useSelector((store) => store.error);
  const users = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getStateloading());
    console.log("loading");
    axios
      .get("https://reqres.in/api/users", {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(getUsers(response.data.data));
      })
      .catch((error) => {
        dispatch(getError(error.message));
      });
  }, []);

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="flex-grow">
      <h1 className="font-bold text-2xl">Oyuncu Listesi</h1>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
