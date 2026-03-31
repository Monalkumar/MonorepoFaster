import React, { useState, useEffect } from "react";
import useDebounce from "../CustomHooks/useDebounce";

const DebounceValue = () => {
  const [search, setSearch] = useState("");
  const  debounce  = useDebounce(search, 500);
  useEffect(() => {
    if (debounce) {
      console.log("API  call", debounce);
    }
  }, [debounce]);

  return (
    <div>
      <h1>Hello</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search here....."
      />
    </div>
  );
};
export default DebounceValue;
