import React from "react";
import "./components.css";
import List from "./List";
import HabitForm from "./HabitForm";

export default function Panel() {
  return (
    <div className="panel-container">
      <div className="stat-container">
        <div className="stat-container-1"></div>
        <div className="stat-container-2">
          <HabitForm />
        </div>
      </div>
      <div className="habits-cotainer">
        <List />
      </div>
    </div>
  );
}
