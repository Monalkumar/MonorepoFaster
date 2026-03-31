import React from "react";
import useCount from "../CustomHooks/useCount";
import useOnline from "../CustomHooks/useOnline";

const CounterA =()=>{
    const{count,increament, decreament} = useCount()
    return(
        <div>
        <h1>CountA:{count}</h1>
        <button onClick={increament}>Increamnet</button>
        <button onClick={decreament}>Decreamnet</button>
        <h2>{useOnline() ?"🟢":"🔴"}</h2>
       </div>
    )
}

export default CounterA;