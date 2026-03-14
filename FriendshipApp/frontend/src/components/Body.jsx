import React,{useEffect} from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"
import axios from "axios"

const Body = () => {
  
const dispatch = useDispatch()

  const persistentLoginProfile = async () =>{
    try{
    const res = await axios.get("http://localhost:5000/profile/view",{ withCredentials: true });
    dispatch(addUser(res.data));
    console.log(res.data);
  }
  catch(error){
    console.log(error.message);
  }
  
  }

  useEffect(()=>{
persistentLoginProfile()
  },[])

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
