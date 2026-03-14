import React, {useState} from "react";
const useCount =(initialState=0)=>{
    const[count,setCount] = useState(initialState);
   const increament =()=>{
    setCount(prev=>prev+1)
   }
   const decreament =()=>{
    setCount(prev=>prev-1)
   }
   const reset =()=>{
    setCount(initialState)
   }
    return {count, increament, decreament, reset}
}

export default useCount;
