import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [name, setName] = useState("home");

  return (
    <div className="container nav mt-2 justify-content-between">
      <div className="logo">
        <h3>Cover</h3>
      </div>
      <div className="nav">
        <Link to="/" className="nav-link" onClick={() => setName("home")}>
          <div className={name === "home" ? "active" : "in-active"}> Home</div>
        </Link>
        <Link
          to="/features"
          className="nav-link"
          onClick={() => setName("features")}
        >
          <div className={name === "features" ? "active" : "in-active"}>
            Features
          </div>
        </Link>
        <Link
          to="/contacts"
          className="nav-link"
          onClick={() => setName("contacts")}
        >
          <div className={name === "contacts" ? "active" : "in-active"}>
            Contacts
          </div>
        </Link>
      </div>
    </div>
  );
}
