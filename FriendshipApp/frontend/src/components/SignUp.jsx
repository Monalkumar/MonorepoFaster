import React, { useState } from "react";
import VideoBackground from "./VideoBackground";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/signup",
        { name, email, passWord },
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="className=" relative min-h-screen>
        <VideoBackground />
        <div className=" flex justify-center items-center h-screen ">
          <div className=" card w-95 p-6 rounded-2xl bg-white/20 backdrop-blur-lg card-xl shadow-lg">
            <div className="card-body justify-center m-auto">
              <h2 className="card-title">Login Your App!</h2>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                  placeholder="Type here"
                />
                <legend className="fieldset-legend">Email</legend>
                <input
                  type="text"
                  value={email}
                  className="input w-full"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type here"
                />
                <legend className="fieldset-legend">Password</legend>
                <input
                  type="password"
                  value={passWord}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  placeholder="Type here"
                />
              </fieldset>
              <div className="justify-end card-actions">
                <button
                  onClick={handleSubmit}
                  className="btn bg-gradient-to-r from-blue-900 to-blue-200 m-auto "
                >
                  Sign UP
                </button>
              </div>
              <div>
                <button
                  className="text-sm font-bold"
                  onClick={() => setLogin(true)}
                >
                  Do you have account! Please Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
