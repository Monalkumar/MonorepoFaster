  import React, { useState, useEffect, useCallback } from "react";
  const InfiniteScrollingPractice = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const scrollProducts = useCallback(()=>{
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    if(scrollTop + windowHeight+100>=scrollHeight && !loading && hasMore){
        setPage((prev)=>prev+1)
    }
  },[loading,hasMore])

  useEffect(()=>{
    window.addEventListener("scroll", scrollProducts);
    return()=>{
        window.removeEventListener("scroll", scrollProducts)
    }
  },[scrollProducts])
  const fetchData = async () => {
    const limit = 10;
    const skip = page * limit;
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      
      if (!response.ok) {
        throw new Error(`Https error, ${response.status}`);
      }
      const result = await response.json();
      setProducts((prev)=>[...prev,...result.products]);
      if(result.products.length===0) return setHasMore(false)
    } catch (error) {
      setError(`Error ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);


  return (
    <div>
      
      {error && <h2>{error.message}</h2>}
      <div>
        {products.map((product) => (
            <div key={product.id}>
          <img
            style={{ display: "flex" }}
            src={product.thumbnail}
            alt={product.title}
          />
          </div>
        ))}
      </div>
      <div> {loading && <h1>loading......</h1>}</div>
     
    </div>
  );
};

export default InfiniteScrollingPractice;
