import React, { useState } from "react";
import "./stylesTabs.css";

export const Tabs = () => {
  const [text, setText] = useState("Contingut 1");

  const mostrarText = (text) => {
    setText(text);
  };
  return (
    <div className="tabs-container">
      <h1>Tabs</h1>
      <div className="tabs-buttons">
        <button
          style={{ background: text === "Contingut 1" ? "cyan" : "" }}
          onClick={() => mostrarText("Contingut 1")}
        >
          1
        </button>
        <button
          style={{ background: text === "Contingut 2" ? "cyan" : "" }}
          onClick={() => mostrarText("Contingut 2")}
        >
          2
        </button>
      </div>
      <div className="tabs-text">{text}</div>
    </div>
  );
};
