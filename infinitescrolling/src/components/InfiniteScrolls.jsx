import React, {useState,useEffect} from "react";
import { useCallback } from "react";

const InfiniteScrolls = ()=>{
    const[products,setProducts] = useState([]);
    const [page,setPage] = useState(0);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);
    const[hasMore,sethasMore] = useState(true)
    const fetchApis = async()=>{
        
        try{
            const LIMIT= 10;
            const skip = page*LIMIT
            setLoading(true);
            setError(null)
        const response = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`);
        if(!response.ok){
            throw new Error(`Https status ${response.status}`)
        }
        const result = await response.json();
        setProducts((prev)=>[...prev,...result.products]);
        if(result.products.length===0) return sethasMore(false);
        if(result.products.length < LIMIT){
        sethasMore(false)
        }
        }
        catch(error){
            setError(`error:${error.message}`)
        }
        finally{
            setLoading(false)
        }
       
    }

    useEffect(()=>{
        fetchApis();
    },[page]);

    const handleScroll=useCallback(()=>{
        const Top = document.documentElement.scrollTop;
        const Height = document.documentElement.scrollHeight;
        const innerheight = window.innerHeight;
        if(Top + innerheight + 100 >= Height && !loading && hasMore){
            setPage((prev)=>prev+1)

        }
        
       
    },[loading,hasMore])

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[handleScroll])
    return(
        <div>
        { error &&(
            <div>Error:{error}</div>
        ) }
       {
        
        products.map((product)=>(
            <div key={product.id}>
            <img src={product.thumbnail} alt="image"/>
            </div>
        ))
       
       }
        {
            loading && (
                <div>Loading....</div>
            )
        }
        </div>
    )
}

export default InfiniteScrolls;