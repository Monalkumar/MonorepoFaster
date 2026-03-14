import React from "react";
import useCount from "../CustomHooks/useCount";

const CounterA =()=>{
    const{count,increament, decreament} = useCount()
    return(
        <div>
        <h1>CountA:{count}</h1>
        <button onClick={increament}>Increamnet</button>
        <button onClick={decreament}>Decreamnet</button>
       </div>
    )
}

export default CounterA;