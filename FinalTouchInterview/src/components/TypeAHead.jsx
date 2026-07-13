import React, { useState, useEffect } from "react";

const TypeAHead = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const[show, setShow] = useState(true)
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const fetchAPi = async () => {
    console.log("API CLICKS:", input);
    const response = await fetch(
      "https://dummyjson.com/products/search?q=" + input,
    );
    const result = await response.json();
    setProducts(result.products);
    console.log(result);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAPi();
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
    <h1 style={{textAlign:"center"}}>Search Bar</h1>
      <div
        style={{
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{ width: "295px", height: "25px" }}
          type="text"
          placeholder="type here....."
          onChange={handleChange}
          value={input}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

      
        <div
          style={{ width: "295px", height: "701px", border: "1px solid black" }}
        >
          {products.map((product) => (
            <div>{product.title}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TypeAHead;
