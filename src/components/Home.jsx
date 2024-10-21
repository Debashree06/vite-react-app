import React from "react";
import { Link } from "react-router-dom";

function Home() {
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
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          J SPIDER
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
          <Link className="nav-link" to="/signUp">
            Sign Up
          </Link>
        </div>
      </nav>

      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Home Page!</h1>
      </div>
    </div>
  );
}

export default Home;
