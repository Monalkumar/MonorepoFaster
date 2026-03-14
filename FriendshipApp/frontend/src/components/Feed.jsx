import React from "react";
import { useSelector } from "react-redux";

const Feed = () => {
  const user = useSelector((store) => store.user);
  if(!user) return null
  return (
    <div>
    if(!user) return <h2>Loading</h2>
      <h1 className="text-center">{user?.name}</h1>
      <div className="flex justify-center p-5 m-5">
        <img className="w-96 h-95" src={user?.photoUrl} alt="image" />
      </div>
    </div>
  );
};

export default Feed;
