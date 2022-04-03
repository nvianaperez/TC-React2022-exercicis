import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import "./stylesToggleableSidebar.css";

export const ToggleableSidebar = () => {
  const [display, setDisplay] = useState("");

  const nonDisplay = () => {
    if (display === "") setDisplay("none");
    // if (display === "none") setDisplay("");
    else setDisplay("");
  };

  return (
    <div className="sidebar-container">
      <h1>Toggleable Sidebar</h1>
      <HiMenu className="menu-icon" onClick={() => nonDisplay()} />
      <div className="sidebar" style={{ display }}>
        <div className="sidebar-text">sidebar</div>
      </div>
    </div>
  );
};
