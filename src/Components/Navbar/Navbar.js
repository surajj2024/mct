import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <h3>Application</h3>
      </div>
      <div className="navigators">
        <button className="navigator-btn" onClick={() => navigate("/")}>
          Add Person
        </button>
        <button className="navigator-btn" onClick={() => navigate("/retrieve")}>
          Information
        </button>
      </div>
    </>
  );
}

export default Navbar;
