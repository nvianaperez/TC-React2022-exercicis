import React, { useState } from "react";

export function ToggleButton() {
  const [color, setcolor] = useState("yellow");

  const buttonPressed = color !== "yellow";

  const toggle = () => {
    if (color) setcolor("green");
    if (color === "green") setcolor("yellow");
  };

  return (
    <>
      <button style={{ background: color }} onClick={toggle}>
        Toggle Me
      </button>
      {buttonPressed ? <p>Botó premut</p> : <p>Botó no premut</p>}
    </>
  );
}
