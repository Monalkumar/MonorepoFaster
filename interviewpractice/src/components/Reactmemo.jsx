import React,{useState} from "react";
import ChildCompoent from "./ChildComponent";


const Reactmemo =()=>{
    const[count, setCount] = useState(0)

    return(
        <div>
        <h1>{count}</h1>
        <button onClick= {()=>setCount(count+1)}>Click me</button>
        <ChildCompoent name="Magic"/>
        
        </div>
    )
}

export default Reactmemo