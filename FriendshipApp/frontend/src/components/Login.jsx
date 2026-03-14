import React, { useState } from "react";
import axios from "axios";
import VideoBackground from "./VideoBackground";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login",{ email, passWord },{ withCredentials: true });
      console.log(res.data);
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="relative min-h-screen">
        <VideoBackground />

        <div className=" flex justify-center items-center h-screen ">
          <div className=" card w-95 p-6 rounded-2xl bg-white/20 backdrop-blur-lg card-xl shadow-lg">
            <div className="card-body justify-center m-auto">
              <h2 className="card-title">Login Your App!</h2>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email</legend>
                <input
                  type="text"
                  value={email}
                  className="input input-bordered w-full bg-white/90"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type here"
                />
                <legend className="fieldset-legend">Password</legend>
                <input
                  type="password"
                  value={passWord}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full bg-white/90"
                  placeholder="Type here"
                />
              </fieldset>
              <div className="justify-end card-actions">
                <button onClick={handleSubmit} className="btn bg-gradient-to-r from-zinc-700 to-blue-200 m-auto">
                  Sign In
                </button>
              </div>
              <div>
                <button
                  className="text-sm font-bold" onClick={() => setLogin(true)}>
                  Don't have an account, please SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
