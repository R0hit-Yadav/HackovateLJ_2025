import React from "react";
import "../pages/Dashboard.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Agri Dashboard</h2>
      <ul>
        <li className="active">Dashboard</li>
        <li>Profile</li>
        <li>Settings</li>
        <li className="logout">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
