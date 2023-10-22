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
        <div className="habit-headers">
            <div><span>Title</span></div>
            <div><span>Created At</span></div>
            <div><span>Due by</span></div>
            <div><span>Time spent</span></div>
            <div id="remove-header"><span>Remove</span></div>
        </div>
        <List />
      </div>
    </div>
  );
}
