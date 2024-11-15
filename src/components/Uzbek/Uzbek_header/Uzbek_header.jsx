import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Uzbek_header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Uzbek_header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo-container">
            <img src="https://thumbs.dreamstime.com/b/blue-airplane-icon-airplane-symbol-airport-logo-blue-airplane-icon-airplane-symbol-airport-logo-white-149057197.jpg" alt="Logo" className="logo" />
            <span className="logo-text">Asialuxe</span>
          </Link>

          <div className="nav-links">
            <div className="nav-item">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Flights
              </Link>
            </div>
            <div className="nav-item">
              <span className="disabled-link">Hotels</span>
            </div>
            <div className="nav-item">
              <span className="disabled-link">Tours</span>
            </div>
            <div className="nav-item">
              <span className="disabled-link">Charters</span>
            </div>
          </div>

          <div className="auth-buttons">
            <button className="login">Sign In</button>
            <button className="register">Register</button>
          </div>

          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            <div className="nav-item">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Flights
              </Link>
            </div>
            <div className="nav-item">
              <span className="disabled-link">Hotels</span>
            </div>
            <div className="nav-item">
              <span className="disabled-link">Tours</span>
            </div>
            <div className="nav-item">
              <span className="disabled-link">Charters</span>
            </div>
          </div>
          <div className="mobile-auth-buttons">
            <button className="login">Sign In</button>
            <button className="register">Register</button>
          </div>
        </div>
      </div>
    </header>
  );
}
