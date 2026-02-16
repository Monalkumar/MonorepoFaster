import React, { useEffect, useState } from "react";

const UsersManagement =()=>{
 const [products,setProducts] = useState([]);
 const [loading,setLoading] = useState(false);
 const [error,setError] = useState(null);

const fetchData = async()=>{
    try{
        setError(null);
        setLoading(true)
        const response = await fetch("https://dummyjson.com/products");
        if(!response.ok){
            throw new Error(`HTTP response ${response.status}`)
        }
    const result = await response.json();
    console.log(result)
    setProducts(result.products)
    }
    catch(error){
     setError(`error, ${error.message}`)
    }
    finally{
        setLoading(false)
    }
    
}
useEffect(()=>{
    fetchData()
},[])

    return(
        <>
        <div>
        <div>{error && <h2>{error}</h2>}</div>
         
        { products.map((product)=>(
            <div key={product.id}><h3>Users Name : {product.title}</h3></div>
        )) }
        </div>
        <div>
        { loading && <h2>Loading.....</h2>}
        </div>
        </>
    )
}

export default UsersManagement;