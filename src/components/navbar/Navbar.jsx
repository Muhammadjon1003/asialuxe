import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar__link container">
      <Link to={"./avia"}>All tickets</Link>
      <Link to="./hotel">Hotels</Link>
      <Link to="./tour">Tours</Link>
      <Link to="./charter">Charter</Link>
    </div>
  );
}
