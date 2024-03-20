import React from "react";
import "./Header.scss";

const Uzbek_header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="navbar_logo">
              <img
                src="https://asialuxe.uz/assets/logo-36c1ac00.svg"
                alt="logo"
              />
            </div>
            <div className="navbar_left">
              <button className="navbar_left_agent">
                <a href="https://b2b.asialuxe.uz/login">
                  <ion-icon name="person"></ion-icon>
                  Agentliklar
                </a>
              </button>
              <button className="navbar_left_til">
                <ion-icon name="globe-outline"></ion-icon>
                UZ / USD
              </button>
              <button className="navbar_left_menu">
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Uzbek_header;
