import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  // const [name, setName] = useState("home");

  return (
    <div className="container nav mt-2 justify-content-between">
      <div className="logo">
        <h3>Cover</h3>
      </div>
      <div className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "in-active")}
        >
          Home
        </NavLink>

        <NavLink
          to="/features"
          className={({ isActive }) => (isActive ? "active" : "in-active")}
        >
          Features
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? "active" : "in-active")}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}
