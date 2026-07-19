import React, { useState,useEffect } from "react"

const MoreParctice =()=>{
    const[products, setProducts] = useState([]);
    const[loading,setLoading] = useState(false);
    const [error, setError] = useState(null);
    const[hasMore, setHasMore] = useState(true);
    const[page,setPage] = useState(0)

    const fetchApis =async()=>{
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setProducts(result.products);
        console.log(result.products)
    }
    useEffect(()=>{
        fetchApis()
    },[])
    return(
        <div>Infinite Scrolling</div>
    )
}

export default MoreParctice;