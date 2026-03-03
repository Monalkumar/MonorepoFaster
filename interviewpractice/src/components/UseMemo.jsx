import React,{useState,useMemo} from "react";


    const UseMemo =()=>{
    const [counter, setCounter] = useState(0);
    const[number,setNumber] = useState(1);
    const heavyTask =(num)=>{
    console.log("hello world")
        
        for(let i=0; i<=100000; i++){}
        return num*2
    }

     const computedValue = useMemo(() => {
    return heavyTask(number);
  }, [number]);

    
    return(
        <div>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increamnet Counter</button>
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number+1)}>Increamnet Number</button>
        <div>{computedValue}</div>
        
        </div>
    )
}

export default UseMemo; 


