import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

function FavUserList() {
  const favs = useSelector((store) => store.favs);

  return (
    <div className="flex-grow">
      <h1 className="text-2xl font-bold">Kadro</h1>
      {favs.map((fav) => (
        <User user={fav} isFav={true} />
      ))}
    </div>
  );
}

export default FavUserList;
