import React, {useState} from "react";
const useCount =(initialState=0)=>{
    const[count,setCount] = useState(initialState);
   const increamenet =()=>{
    setCount(prev=>prev+1)
   }
   const decreamenet =()=>{
    setCount(prev=>prev-1)
   }
   const reset =()=>{
    setCount(initialState)
   }
    return {count, increamenet, decreamenet, reset}
}

export default useCount;
