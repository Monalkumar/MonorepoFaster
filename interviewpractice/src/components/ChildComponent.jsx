import React,{memo} from "react";

const ChildCompoent =memo(({name})=>{
    console.log("hello world")
    return(
        <div>{name}</div>
    )
})

export default ChildCompoent;