import React,{useEffect, useState} from "react";

const ProgressBar =({progress})=>{
    const [animated,setAnimated] =  useState(0);
    useEffect(()=>{
     let timer = setTimeout(()=>{
       setAnimated(progress)
     },2000)
     return()=>{
        clearTimeout(timer)
     }
    },[progress])
    return(
        <div className="outer">
        <div className="inner" style={{width: `${animated}%`, color:animated < 51 ? "white": ""}}>
        {progress}%
        </div>
        </div>
    )
}

const ProgressApp =()=>{
    const progressGraph = [1,11,21,31,41,51,61,71,81,91,97]
    return(
        <div>
        {
            progressGraph.map((progressing)=>(
             <ProgressBar progress={progressing}/>
            ))
        }
        
        </div>
    )
}

export default ProgressApp
