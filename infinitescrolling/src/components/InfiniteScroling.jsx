import React, { useState, useEffect } from "react";

const InfiniteScrolling = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      const LIMIT = 10;
      const skip = page * LIMIT;
      setLoading(true);   
      setError(null);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );
      if (!response.ok) {
        throw new Error(`HTTPS error ${response.status}`);
      }
      const result = await response.json();
      setProducts((prev) => [...prev, ...result.products]);
      if (result.products.length === 0) return setHasMore(false);
    } catch (error) {
      setError(`error found ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  function handleScroll() {
    const Top = document.documentElement.scrollTop;
    const Height = document.documentElement.scrollHeight;
    const InnerHeight = window.innerHeight;
    if (Top + InnerHeight + 100 >= Height && !loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <header>
    <div>
      {error && <p>error: {error}</p>}
      {products.map((product) => (
        <div key={product.id}>
          <img
            style={{ display: "flex",hover:"" }}
            src={product.thumbnail}
            alt={product.title}
          />
          <span>{product.title}</span>
        </div>
      ))}

      <div>{loading && <p>Loading......</p>}</div>
    </div>
    </header>
    <footer>
    <span>Developed by Monal @2025.All Rights Reserved</span>
    </footer>
    </>
  );
};

export default InfiniteScrolling;

