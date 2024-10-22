import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0px",
          padding: "10px 20px",
          backgroundColor: "#D4DF9E",
        }}
      >
        <div
          style={{
            fontSize: "34px",
            fontWeight: "bold",
          }}
        >
          <span style={{ color: "orange" }}>J</span>SPIDER
        </div>
        <div className="nav-links">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/product">
            Products
          </Link>
          <Link className="nav-link" to="/signUp">
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
