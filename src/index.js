import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [diclaration, setDiclaration] = useState("");

  const hend = () => {
    setDiclaration(`${firstName} ${lastName}`);
  };

  return (
    <>
      <input
        type="text"
        placeholder="first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={hend}>Send</button>
      <div>
        <p>{diclaration}</p>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
