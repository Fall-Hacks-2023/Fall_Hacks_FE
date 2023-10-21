import React from "react";

export default function Sidebar() {
  return (
    <div className="side-bar-container">
      <div>
        <span>Habits Leaf</span>
      </div>
      <div>
        <ul>
          <li>
            <AiFillHome />
            <span>Home</span>
          </li>
          <li>
            <BsFillFilePostFill />
            <span>All Habits</span>
          </li>
          <li>
            <MdExitToApp />
            <span>Finished Habits</span>
          </li>
          <li>
            <MdExitToApp />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
