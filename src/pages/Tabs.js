import React, { useState } from "react";

export const Tabs = () => {
  const [text, setText] = useState("Contingut 1");

  const mostrarText = (text) => {
    setText(text);
  };
  return (
    <div className="tabs-container">
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
