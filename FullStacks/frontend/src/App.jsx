import { useState } from "react";
import "./App.css";

const App = () => {
  const [backendMessage, setBackendMessage] = useState("");
  const [dbResult, setDbResult] = useState("");

  const testBackend = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/test");
      const data = await res.json();
      setBackendMessage(data.message);
      console.log("Backend test:", data);
    } catch (err) {
      console.error(err);
    }
  };

  const testDB = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/addTest");
      const data = await res.json();
      setDbResult(JSON.stringify(data));
      console.log("DB insert test:", data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>FullStack Test Page</h1>
      <button onClick={testBackend} style={{ marginRight: "10px" }}>
        Test Backend
      </button>
      <button onClick={testDB}>Test DB Insert</button>

      {backendMessage && <p>Backend Response: {backendMessage}</p>}
      {dbResult && <p>DB Insert Result: {dbResult}</p>}
    </div>
  );
};

export default App;
