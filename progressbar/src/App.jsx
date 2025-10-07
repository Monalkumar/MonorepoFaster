import React from "react";
import ProgressBar from "./components/ProgressBar.jsx";
import "./App.css";

function App() {
  const progressValues = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101];
  return (
    <div>
    <h2 className="heading">Progress Bar</h2>
      {progressValues.map((progressing) => (
        <ProgressBar ProgressBar={progressing} />
      ))}
    </div>
  );
}

export default App;
