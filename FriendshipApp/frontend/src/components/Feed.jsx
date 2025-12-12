import React from "react";
import { useSelector } from "react-redux";

const Feed = () => {
  const user = useSelector((store) => store.user);
  return (
    <div>
      <h1 className="text-center">{user.name}</h1>
      <div className="flex justify-center p-5 m-5">
        <img className="w-96 h-95" src={user.photoUrl} alt="image" />
      </div>
    </div>
  );
};

export default Feed;
