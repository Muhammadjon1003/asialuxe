import React from "react";
import "./Lenguage.scss";

const Lenguage = ({ CloseModal }) => {
  return (
    <div className="lenguage">
      <form className="menu">
        <div className="menu_top">
          <h3>Displey sozlamalari</h3>
          <div className="menu_close" onClick={() => CloseModal()}>
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </div>
        <div className="menu_hudud menu_sel">
          <label htmlFor="hudud">Hudud</label>
          <select name="hudud" id="hudud">
            <option value="uz">Uzbekistan</option>
            <option value="tur">Turkey</option>
          </select>
        </div>
        <div className="menu_til menu_sel">
          <label htmlFor="til">Til</label>
          <select name="til" id="til">
            <option value="uzbek">Uzbek</option>
            <option value="rus">Russian</option>
            <option value="eng">English</option>
            <option value="tur">Turkish</option>
          </select>
        </div>
        <div className="menu_valuta menu_sel">
          <label htmlFor="valyuta">Valyuta</label>
          <select name="valyuta" id="valyuta">
            <option value="usd">USD</option>
            <option value="uzs">UZS</option>
            <option value="try">TRY</option>
          </select>
        </div>
        <button className="menu_saqlash" type="submit">
          Saqlash
        </button>
      </form>
    </div>
  );
};

export default Lenguage;
