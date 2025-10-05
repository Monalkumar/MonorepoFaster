import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://dummyjson.com/recipes?limit=100");
      if (!response.ok) {
        throw new Error(`Https response showing: ${response.status}`);
      }
      const result = await response.json();
      setRecipes(result.recipes);
    } catch (error) {
      setError(`please resolve it ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectedPage = (clickingPage) => {
    setPage(clickingPage);
  };

  const totalPage = Math.ceil(recipes.length/10)
  return (
    <>
    <header>
      {loading && <p>Loading.....</p>}
      {error && <p>Error:{error}</p>}
      <div>
        {recipes.slice(page * 10 - 10, page * 10).map((recipe) => (
          <div key={recipe.id}>
            <img
              style={{ width: "205px", height: "201px" }}
              src={recipe.image}
              alt={recipe.name}
            />
          </div>
        ))}
        <div>
          <button disabled ={page===1} onClick={() => selectedPage(page - 1)}>◀</button>
          {[...Array(totalPage)].map((_, i) => (
            <span onClick={()=>selectedPage(i+1)} style={{cursor:"pointer"}} key={i} className={page === i + 1 ? "selectPages" : ""}>
              {i + 1}
            </span>
          ))}

          <button disabled = {page===totalPage} onClick={() => selectedPage(page + 1)}>▶</button>
        </div>
      </div>
      </header>
      <footer>
     <span>Developed by Monal @2025.All Rights Reserved</span>
      </footer>
    </>
  );
};

export default Pagination;
