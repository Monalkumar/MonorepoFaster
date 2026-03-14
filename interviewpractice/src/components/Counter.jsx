import React from "react";
import useCount from "../CustomHooks/useCount.jsx"



const Counter =()=>{
    const{count,increament,decreament} = useCount()
    return(
        <div>
        <h1>Counts:{count}</h1>
        <button onClick={increament}>Increamnet</button>
        <button onClick={decreament}>decreamenet</button>
        </div>
    )
}
export default Counter;