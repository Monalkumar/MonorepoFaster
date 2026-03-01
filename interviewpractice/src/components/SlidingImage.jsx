import React,{useState,useEffect} from "react";

const SlidingImage =()=>{
    const fetchApis = async()=>{
        const response = await fetch("https://dummyjson.com/products");
        const result = response.json();
        console.log(result)

    }

    useEffect(()=>{
        fetchApis()
    },[])
    return(
        <div>Hello</div>
    )
}

export default SlidingImage;