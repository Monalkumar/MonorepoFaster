import React from "react";
import TrafficApp from "./components/TrafficApp";
import './App.css'

const App:React.FC=()=> {
  
  return (
    <>
      <div>
        <h3 style={{textAlign:"center"}}>Traffic Light</h3>
       <TrafficApp/>
      </div>
      
    </>
  )
}

export default App
