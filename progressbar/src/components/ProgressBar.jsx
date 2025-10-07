import React, { useState, useEffect } from "react";

const ProgressBar = ({ ProgressBar }) => {
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimated(ProgressBar);
    }, 1000);
  }, [ProgressBar]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${animated - 100}%)`,
          color: animated < 61 ? "yellow" : "",
        }}
      >
        {ProgressBar}%
      </div>
    </div>
  );
};

export default ProgressBar;
