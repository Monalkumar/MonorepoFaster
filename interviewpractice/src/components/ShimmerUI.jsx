import React,{useState,useEffect} from "react";
import ShimmerUIComponents from "./ShimmerUIComponents";

const ShimmerUI =()=>{
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const[error,setError] = useState(null)
    const fetchApi = async()=>{
        try{
            setError(null)
            setLoading(true)
        const response = await fetch("https://dummyjson.com/products");
        if(!response.ok){
            throw new Error(`Https error message ${response.status}`)
        }
        const result = await response.json()
        setProducts(result.products)
        console.log(result.products)
    }
    catch(error){
        setError(`error message ${error.message}`)
    }
    finally{
        setLoading(false)
    }
        }
       

    useEffect(()=>{
        fetchApi()
    },[])
    return(
        <div>
<div>
{loading && (
    <div>
    <ShimmerUIComponents/>
    </div>
)}
{
    error && (
        <div>Error:{error}</div>
    )
}
</div>
        
        {products.map((product)=>(
            <img src={product.thumbnail} alt="image" />

        ))}
        
        </div>
    )
}

export default ShimmerUI