import React, { useState,useEffect, useCallback } from "react"

const MoreParctice =()=>{
    const[products, setProducts] = useState([]);
    const[loading,setLoading] = useState(false);
    const [error, setError] = useState(null);
    const[hasMore, setHasMore] = useState(true);
    const[page,setPage] = useState(0) 

    const fetchApis =async()=>{
        try{
            setLoading(true);
            setError(null)
                 const LIMIT = 10;
        const skip = page*LIMIT
        const response = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`);
        const result = await response.json();
        setProducts((prev)=>[...prev, ...result.products]);
        if(result.products.length===0) return setHasMore(false);

        console.log(result.products)
        }
        catch(error){
            setError(`error:${error.message}`)
        }
        finally{
            setLoading(false)
        }
        
    }
    useEffect(()=>{
        fetchApis()
    },[page])

let count = 0;
window.addEventListener("scroll", () => {
  count++;
  console.log(count + " baar chala");
});

    const handleScroll = useCallback(()=>{
        if(loading && !hasMore) return;
        const Top = document.documentElement.scrollTop;
        const Height = document.documentElement.scrollHeight;
        const innerHeight = window.innerHeight;
        if(Top+innerHeight+100>=Height){
            setPage((prev)=>prev+1)
        }
    },[hasMore,loading])

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[handleScroll])
    return(
        <div>
        {error && (
            <div>Error:{error}</div>
        )}
        
        <h1>Infinite Scrolling</h1>
        {
           products.length>0 && products.map((product)=>(
            <div>
            <img src={product.thumbnail} alt ="product_Image"/>
            </div>
           ))
        }
        {
            loading && (
                <div>Loading.....</div>
            ) 
        }
        
        </div>
    )
}

export default MoreParctice;