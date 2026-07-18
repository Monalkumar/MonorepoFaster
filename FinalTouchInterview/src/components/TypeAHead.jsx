import React, { useState, useEffect,useRef } from "react";

const TypeAHead = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
    
  };

  const fetchAPi = async (signal) => {
    
    try {
     
      setError(null);
      setLoading(true);
      console.log("API CLICKS:", input);
      
      if(!input.trim()){
       setProducts([])
       return
      }
      
      const query = encodeURIComponent(input.trim())
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`,{signal});
      if (!response.ok) {
        throw new Error("failed to fetch");
      }
      
      const result = await response.json();
      setProducts(result.products);
      if(result.products.length===0){
        console.log("list not found")
      }
      console.log(result);

    } catch (error) {
      if(error.name === "AbortError"){
        return;
      }
      setError(`Error Message:${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(abortRef.current){
      abortRef.current.abort()
    }
    const controller = new AbortController();
    abortRef.current = controller
    const timer = setTimeout(() => {
      fetchAPi(controller.signal);
    }, 400);
    return () => {
      clearTimeout(timer);
      controller.abort()
    };
  }, [input]);
  

  return (
    <>
      {error && <div>Error:{error}</div>}

      {loading && <div>Loading.....</div>}
      <h1 style={{ textAlign: "center" }}>Search Bar</h1>
      <div
        style={{
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
          style={{ width: "295px", height: "25px" }}
          type="text"
          placeholder="type here....."
          onChange={handleChange}
          value={input}
        />
      </div>
      {show && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "295px",
              height: "701px",
              border: "1px solid black",
            }}
          >
            {
              
              products.length > 0 ? products.map((product) => (

              <div key={product.id}>{product.title}</div> 

            )) : <div>products not found</div>
          }

          </div>
        </div>
      )}
    </>
  );
};

export default TypeAHead;



