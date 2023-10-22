import React from "react";
import "./components.css";
import List from "./List";

export default function Panel() {
  return (
    <div className="panel-container">
      <div className="stat-container">
        <div className="stat-container-1"></div>
        <div className="stat-container-2"></div>
      </div>
      <div className="habits-cotainer">
        <List />
      </div>
    </div>
  );
}
