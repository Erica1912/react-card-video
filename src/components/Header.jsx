import React from "react";
import "../style/components/Header.css";
import logo from "../assets/logo-platzi-video-BW2.png"
import  logo2 from "../assets/user-icon.png"

const Header = () => (
  <header className="header">
    <img
      className="header__img"
      src={logo}
      alt="Platzi Video"
    />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={logo2} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
