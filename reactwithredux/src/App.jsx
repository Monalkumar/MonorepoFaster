import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increamment } from "./features/users/userSlice";

import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
    <header>
    
      <h1 style={{ color: "red" }}> 🙏🕉राधे राधे🕉🙏</h1>
      <img
        src="https://i.pinimg.com/736x/ed/79/3d/ed793da575589af6aff0c77986426ae4.jpg"
        alt="image"
        style={{ width: "305px", height: "295px" }}
      />
      <h1>{count}</h1>
      <button onClick={() => dispatch(increamment())}>नाम जप</button>
   
    </header>

    <fotter><span style={{fontSize:"10px",color:"black"}}>Developed by Monal @2025.All Rights Reserved</span></fotter>
     </div>
  );
}

export default App;
