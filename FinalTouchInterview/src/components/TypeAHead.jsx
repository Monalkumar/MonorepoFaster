import React, { useState, useEffect } from "react";

const TypeAHead = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
    
  };

  const fetchAPi = async () => {
    try {
      setError(null);
      setLoading(true);
      console.log("API CLICKS:", input);
      const response = await fetch(
        "https://dummyjson.com/products/search?q=" + input,
      );
      if (!response.ok) {
        throw new Error("failed to fetch");
      }
      const result = await response.json();
      setProducts(result.products);
      console.log(result);

    } catch (error) {
      setError(`Error Message:${error}`);
    } finally {
      setLoading(false);
    }
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
      {error && <div>{error.message}</div>}

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
            {products.map((product) => (
              <div key={product.id}>{product.title}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TypeAHead;
