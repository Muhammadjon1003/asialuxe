import React from "react";
import "./Header.scss";
import Lenguage from "./lenguage/Lenguage";
import Menu from "./menu/Menu";

const Uzbek_header = () => {

    
    const openModal = () => {
      document.querySelector(".lenguage").style.display = "flex";
    };
    const CloseModal = () => {
      document.querySelector(".lenguage").style.display = "none";
    };
    const openMenu = () => {
      document.querySelector(".menu_bg").style.display = "flex";
    };
    const CloseMenu = () => {
      document.querySelector(".menu_bg").style.display = "none";
    };


  return (
    <>
      <header>
        <div className="header_container">
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
              <button className="navbar_left_til" onClick={() => openModal()}>
                <ion-icon name="globe-outline"></ion-icon>
                UZ / USD
              </button>
              <button className="navbar_left_menu" onClick={() => openMenu()}>
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <Lenguage CloseModal={CloseModal} />
      <Menu CloseMenu={CloseMenu} />
    </>
  );
};

export default Uzbek_header;
