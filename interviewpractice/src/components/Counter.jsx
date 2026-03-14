import React from "react";
import useCount from "../CustomHooks/useCount.jsx"



const Counter =()=>{
    const{count,increamenet,decreamenet} = useCount()
    return(
        <div>
        <h1>Counts:{count}</h1>
        <button onClick={increamenet}>Increamnet</button>
        <button onClick={decreamenet}>decreamenet</button>
        </div>
    )
}
export default Counter;