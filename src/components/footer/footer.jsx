import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="container footer_wrapper">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div className="footer_menu">
          <div>
            <h3>Покупателям</h3>
            <NavLink to="/">
              <p>Название тестовой ссылки</p>
            </NavLink>
            <NavLink to="/">
              <p>Тестовое название</p>
            </NavLink>
            <NavLink to="/">
              <p>Будет ссылка</p>
            </NavLink>
            <NavLink to="/">
              <p>Небольшая ссылка</p>
            </NavLink>
            <NavLink to="/">
              <p>Средняя ссылка</p>
            </NavLink>
          </div>
          <div>
            <h3>Магазинам</h3>
            <NavLink to="/">
              <p>Тестовое название</p>
            </NavLink>
            <NavLink to="/">
              <p>Название тестовой ссылки</p>
            </NavLink>
            <NavLink to="/">
              <p>Будет ссылка</p>
            </NavLink>
            <NavLink to="/">
              <p>Ссылка</p>
            </NavLink>
            <NavLink to="/">
              <p>Средняя ссылка</p>
            </NavLink>
          </div>
          <div>
            <h3>Информация</h3>
            <NavLink to="/">
              <p>Ссылка</p>
            </NavLink>
            <NavLink to="/">
              <p>Средняя ссылка</p>
            </NavLink>
            <NavLink to="/">
              <p>Тестовое название</p>
            </NavLink>
            <NavLink to="/">
              <p>Средняя ссылка</p>
            </NavLink>
            <NavLink to="/">
              <p>Тестовое название</p>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
