import React, {useState,useEffect} from "react";


const TrafficLightApp = () => {
  const [index, setIndex] = useState(0);
  const array = [
    { color: "red", timing: 1000 },
    { color: "yellow", timing: 1500 },
    { color: "green", timing: 2100 },
  ];
  const current = array[index];
useEffect(()=>{
    const timer= setTimeout(()=>{
     setIndex((prev)=>(prev+1)%array.length)
    },current.timing)
    return()=>{
        clearTimeout(timer)
    }

},[index])


  return <div style={{border:"1px solid black", height:"300px", width:"85px", borderRadius:"25px"}}>
 { array.map((array, i)=>(
    <div style={{backgroundColor:array.color, borderRadius:"50px", opacity: index===i?1:0.2, height:"75px", width:"85px"}}></div>
  ))}
  </div>;
};

export default TrafficLightApp;
