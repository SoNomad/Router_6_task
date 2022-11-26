import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const setClass = ({ isActive }) => (isActive ? "active" : "in-active");

  return (
    <div className="container nav mt-2 justify-content-between">
      <div className="logo">
        <h3>Cover</h3>
      </div>
      <div className="nav">
        <NavLink to="/" className={setClass}>
          Home
        </NavLink>

        <NavLink to="/features" className={setClass}>
          Features
        </NavLink>
        <NavLink to="/contacts" className={setClass}>
          Contact
        </NavLink>
      </div>
    </div>
  );
}
