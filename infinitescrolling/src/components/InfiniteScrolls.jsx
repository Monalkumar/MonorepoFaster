import React, { useState,useEffect } from "react";

const InfiniteScrolls = () => {
    const [products,setProducts] = useState([]);
    const[page,setPage] = useState(0);
    const[loading,setLoading] = useState(false);
    const[hasMore,setHasMore] = useState(true)
    const[error,setError] = useState(null)

    const fetchAPis = async ()=>{
     
        const LIMIT = 10;
        try{
            setError(null);
            setLoading(true)
              const skip = page*LIMIT
        const response = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`);
        if(!response.ok){
            throw new Error(`https error ${response.status}`)
        }
        const result = await response.json();
        setProducts((prev)=>[...prev,...result.products])
         if(result.products.length===0) return setHasMore(false)
        }
        catch(error){
            setError(`error message ${error.message}`)
        }
        finally{
            setLoading(false)
        }
        
    }

    useEffect(()=>{
        fetchAPis();
    },[page])


    const handleScroll =()=>{
        const Top = document.documentElement.scrollTop;
        const Height = document.documentElement.scrollHeight;
        const innerHeight = window.innerHeight;
        if(Top+innerHeight+100>=Height && !loading && hasMore){
            setPage((prev)=>prev+1)
        }
       
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.addEventListener("scroll", handleScroll)
        }
    },[])
    return(
        <div>
         <div>
           {error && <div>Error:{error}</div>}
            </div>
        
        {
            
        products.map((product)=>(
            <div>
           
            <img src={product.thumbnail} alt="image"/>
            
             </div>
        ))
       
        }
        <div> {loading&&<div>Loading...</div>}</div>
        
        </div>
    )
}

export default InfiniteScrolls;