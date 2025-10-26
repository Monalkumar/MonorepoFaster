import React, { useState, useEffect } from "react";

const TrafficApp: React.FC = () => {
  const [index, setIndex] = useState(0);

  const colorsConfig =
    [
      { color: "red", timing: 2000 },
      { color: "yellow", timing: 2300 },
      { color: "green", timing: 2500 }

    ]
  const current = colorsConfig[index]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % colorsConfig.length)
    }, current.timing);
   return()=>{
    clearTimeout(timer)
   }
  }, [index])
  return (
    <div style={{ border: "1px solid black", height: "251px", width: "95px", borderRadius: "25px", backgroundColor:"black" }}>
     {
      colorsConfig.map((items,i)=>(
        <div key={items.color} style={{backgroundColor:items.color,margin:"auto", boxShadow:"2px", borderRadius:"50px", opacity: index === i  ? 1 : 0.2, height:"75px", width:"85px"}}></div>
      ))
     }
    </div>
  )
}

export default TrafficApp