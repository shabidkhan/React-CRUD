import React from 'react';
import "./Nav.css"
const Navbar = ({ onLogout }) => {
  return (
    <div className="navbar">
      <div className="nav-left">Logo</div>
      <div className="nav-right">
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;