import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  faEarthAmericas,
  faHotel,
  faPlane,
  faPlaneCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="container">
      <div className="navbar">
        <Link
          to={"/"}
          className={`navbar__links ${activeLink === "/" ? "active" : ""}`}
          onClick={() => handleLinkClick("/")}
        >
          <FontAwesomeIcon icon={faPlane} className="navbar__icons" />
          &nbsp; <p>All tickets</p>
        </Link>

        <Link
          to={"/hotel"}
          className={`navbar__links ${activeLink === "/hotel" ? "active" : ""}`}
          onClick={() => handleLinkClick("/hotel")}
        >
          <FontAwesomeIcon icon={faHotel} className="navbar__icons" />
          &nbsp; <p>Hotels</p>
        </Link>

        <Link
          to={"/tour"}
          className={`navbar__links ${activeLink === "/tour" ? "active" : ""}`}
          onClick={() => handleLinkClick("/tour")}
        >
          <FontAwesomeIcon icon={faEarthAmericas} className="navbar__icons" />
          &nbsp; <p>Tours</p>
        </Link>

        <Link
          to={"/charter"}
          className={`navbar__links ${
            activeLink === "/charter" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("/charter")}
        >
          <FontAwesomeIcon
            icon={faPlaneCircleCheck}
            className="navbar__icons"
          />
          &nbsp; <p>Charter</p>
        </Link>
      </div>
    </div>
  );
}
