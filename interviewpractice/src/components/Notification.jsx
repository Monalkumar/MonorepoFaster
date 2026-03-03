import { useState } from "react";

function Notification() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <button onClick={() => setMessage("Data saved successfully!")}>
        Save
      </button>
      <button onClick={() => setMessage("Data saved successfully!")}>
        Save
      </button>

      <div aria-live="polite">
        {message}
      </div>
      <div>
        {message}
      </div>
    </div>
  );
}

export default Notification;
