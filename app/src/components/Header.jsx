import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header">
        <div className="image">
          <img src="./images/logo.png" alt="logo" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "no")}
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "no")}
            >
              <li>About</li>
            </NavLink>

            <NavLink
              to="/classes"
              className={({ isActive }) => (isActive ? "active" : "no")}
            >
              <li>Classes</li>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "no")}
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
