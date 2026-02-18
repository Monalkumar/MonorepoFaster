import React, { useEffect, useState } from "react";

 const UsersManagement =()=>{
 const [products,setProducts] = useState([]);
 const [loading,setLoading] = useState(false);
 const [error,setError] = useState(null);
 const [input, setInput] = useState("");
 const [selectedproducts,setSelectedProducts] = useState(null);
 

const fetchData = async()=>{ 
    try {
        setError(null);
        setLoading(true)
        const response = await fetch("https://dummyjson.com/products/search?q="+ input);
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
   const timer = setTimeout(()=>{
    fetchData()
    },1000)
    return()=>{
        clearTimeout(timer)
    }
    
},[input])

const handleText =(e)=>{
setInput(e.target.value)
}

    return(
        <>
        
        <div>
        {
    selectedproducts && (
  <div style={{
    position: "fixed",
    top: "30%",
    left: "30%",
    background: "white",
    padding: "20px",
    border: "1px solid black",
    width:"507px",
    height:"305px"
  }}>
    <h2>{selectedproducts.title}</h2>
    <p>{selectedproducts.description}</p>
    <p>Price: ${selectedproducts.price}</p>

    <button onClick={() => setSelectedProducts(null)}>
      Close
    </button>
  </div>  
)}
        
        <div>{error && <h2>{error}</h2>}</div>
         { loading && <h2>Loading.....</h2>}
        <div>
        <input type="text" value={input} placeholder="search here....." onChange={handleText}/>
        </div>
         
        { products.map((product)=>(
            <div key={product.id}><h3  style={{cursor:"pointer"}} onClick={()=>setSelectedProducts(product)}>{product.title}</h3></div>
        )) }
        </div>
        <div>
       
        </div>
        </>
    )
}

export default UsersManagement;