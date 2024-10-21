import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <marque>
        <h1>Home Page</h1>
        <Link to="/about">About</Link> <br />
        <NavLink to="/contact">Contact</NavLink>
      </marque>
    </>
  );
}

export default Home;
