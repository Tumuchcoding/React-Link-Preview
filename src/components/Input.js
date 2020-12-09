import React, { useState } from "react";

function Input({ getUrlData }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getUrlData(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="paste a URL and hit enter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default Input;
