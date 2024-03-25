import React from "react";
import "./Menu.scss";

const Menu = ({ CloseMenu }) => {
  return (
    <div className="menu_bg">
      <div className="nav">
        <div className="nav_main">
          <div className="nav_top">
            <img
              src="https://asialuxe.uz/assets/logo-36c1ac00.svg"
              alt="logo"
            />
            <div className="nav_close" onClick={() => CloseMenu()}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
          <ul>
            <li>
              <ion-icon name="home-outline"></ion-icon>
              Kirish
            </li>
            <li>
              <a href="tel:(71) 201-77-77">
                <ion-icon name="call-outline"></ion-icon>
                (71) 201-77-77
              </a>
            </li>
            <li>
              <a href="https://asialuxe.uz/offices">
                <ion-icon name="location-outline"></ion-icon>
                Qayerdan sotib olishh kerak?
              </a>
            </li>
            <li>
              <a href="https://asialuxe.uz/vacancy">
                <ion-icon name="bag-handle-outline"></ion-icon>
                Bo'sh ish o'rinlar
              </a>
            </li>
            <li>
              <a href="https://b2b.asialuxe.uz/login">
                <ion-icon name="person-circle-outline"></ion-icon>
                Agnetlik
              </a>
            </li>
            <li>
              <a href="https://asialuxe.uz/about">
                <ion-icon name="business-outline"></ion-icon>
                Kompaniya haqida
              </a>
            </li>
            <li>
              <a href="https://asialuxe.uz/support">
                <ion-icon name="headset-outline"></ion-icon>
                Qo'llab quvatlash
              </a>
            </li>
            <li>
              <a href="https://asialuxe.uz/contract_2024.pdf">
                <ion-icon name="document-text-outline"></ion-icon>
                Shartnoma
              </a>
            </li>
          </ul>
        </div>
        <div className="nav_footer">
          <div className="nav_gmail">
            <div className="nav_yordam">
              <h3>info@asialuxe.uz</h3>
              <p>Turistlarga yordam</p>
            </div>
            <div className="nav_links">
              <a href="tel:+998712017777">+998712017777</a>
              <div className="nav_link">
                <a href="https://www.facebook.com/asia.luxe.travel">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="https://www.instagram.com/asialuxe.travel">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="send"></ion-icon>
                </a>
                <a href="https://www.youtube.com/channel/UCqlYt1cED7Fn0tNpXvZ5MaQ">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </div>
            </div>
          </div>
          <div className="nav_bottom">
            <p>© 2017 - 2024 Barcha huquqlar himoyalangan Asialuxe Travel</p>
            <a href="https://old.asialuxe.uz/upload/docs/2023/public-offer-2023.pdf">
              Oilaviy taklif
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
