import React, { useState, useEffect } from "react";

const PaginationApp = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[input,setInput] = useState("")

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://dummyjson.com/products?limit=100"+input);
      if (!response.ok) {
        throw new Error(`Please check response ${response.status}`);
      }
      const result = await response.json();
      setProducts(result.products);
      console.log(result);
    } catch (error) {
      setError(`pleas resolve ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePage =(selectedPage)=>{
    setPage(selectedPage);
    
  }
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(input.toLowerCase())
  );
  const totalPage = Math.ceil(products.length/10)
  return (
    <div>
      {loading && <p>Loading....</p>}
      {error && <p>Error:{error}</p>}
      <input style={{display:"flex"}} type="text" placeholder="type here" onChange={(e)=>setInput(e.target.value)}/>

      {filteredProducts.slice(page * 10 - 10, page * 10).map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.title}</p>
        </div>
      ))}
      <div>
        <button onClick={() => handlePage(page - 1)} disabled={page===1} >◀</button>

        {[...Array(totalPage)].map((_, i) => (
          <span className={page===i+1 ? "colrs" : ""} onClick={()=>handlePage(i+1)} key={i}>{i + 1}</span>
        ))}

        <button onClick={() => handlePage(page+1)} disabled={page===totalPage}>▶</button>
      </div>
    </div>
  );
};

export default PaginationApp;
