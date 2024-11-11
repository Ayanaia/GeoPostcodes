// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Geopostcodes-logo-header.svg";
import userIcon from "../../assets/user.svg";
import "./NavBar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__content">
        <div className="navbar__left">
          <Link to="/">
            <img src={logo} alt="GeoPostcodes Logo" className="navbar__logo" />
          </Link>
          <nav className="navbar__links">
            <Link to="/data-explorer">Data Explorer</Link>
            <Link to="#">Map Explorer</Link>
            <Link to="#">Download Center</Link>
            <Link to="#">Knowledge Base</Link>
          </nav>
        </div>
        <div className="navbar__right">
          <div className="navbar__user-info">
            <span className="navbar_email">
              jerome.mesters@geopostcodes.com
            </span>
            <span className="navbar__username">GeoPostcodes</span>
          </div>
          <img src={userIcon} alt="User Icon" className="navbar__user-icon" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
