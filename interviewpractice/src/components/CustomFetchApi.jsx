import React,{useState,useEffect} from "react";
import useFetch from "../CustomHooks/useFetch";

    const CustomFetchApi = () => {
    const[products,setProducts] = useState([])
    const {data,loading,error} = useFetch("https://dummyjson.com/products");
    
    useEffect(() => {
        // Because API data is asynchronous. On the first render data may be undefined, so optional chaining prevents runtime errors and ensures the code runs only when data is available
    if (data?.products) {  
      console.log("API Data:", data.products);   
      setProducts(data.products);
    }
  }, [data]); 
 
    
    return(
        <div>
        {loading && (
            <div><h1>loading....</h1></div>
        )}
        {error && (
            <div><h1>{error.message}</h1></div>
        )}
        {
          products?.map((product)=>(
                <p>{product.title}</p>
            ))
        }
        
        </div>
    )
}
export default CustomFetchApi;