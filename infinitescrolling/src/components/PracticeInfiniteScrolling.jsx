import React, { useCallback, useEffect, useState } from "react";

const PracticeInfiniteScrolling = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchProduct = async () => {
    try {
        setLoading(true);
        setError(null)
      const LIMIT = 10;
      const skip = page * LIMIT;
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
      );
      if (!response.ok) {
        throw new Error(`Https error ${response.status}`);
      }
      const result = await response.json();
      setProducts((prev) => [...prev, ...result.products]);
      if (result.products.length === 0) return setHasMore(false);
      if(result.products.length<LIMIT){
      setHasMore(false);
      }

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const scrollProducts = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
    if (scrollTop + innerHeight + 100 >= scrollHeight && !loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", scrollProducts);
    return()=>{
      window.removeEventListener("scroll", scrollProducts);
    }
    
  },[scrollProducts]);
  useEffect(() => {
    fetchProduct();
  },[page]);
  return (
    <div>
      <div>{error && <div>Error:{error}</div>}</div>

      {products.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt="image" />
        </div>
      ))}
     <div>{loading && <h1>Loading.....</h1>}</div>
    </div>
  );
};
export default PracticeInfiniteScrolling;
