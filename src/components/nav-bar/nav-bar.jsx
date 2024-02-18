import React from "react";
import "./nav-bar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as ArrowDownSec } from "../../assets/icons/arrow-down-secondary.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import { NavLink } from "react-router-dom";
import profile from "../../assets/images/profile.png";

function NavBar() {
  return (
    <nav>
      <div className="container nav_wrapper">
        <div className="nav_left">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <div className="nav_menu">
            <NavLink to="/">
              <p>Главная</p>
              <ArrowDown />
            </NavLink>
            <NavLink to="/the-shops">
              <p>Магазины</p>
            </NavLink>
            <NavLink to="/notes">
              <p>Записки</p>
            </NavLink>
          </div>
        </div>
        <div className="nav_right">
          <input type="text" placeholder="Поиск" className="search_input" />
          <div className="nav_right_actions">
            <Mail />
            <Notification />
          </div>
          <NavLink to="/profile">
            <div className="nav_profile">
              <img src={profile} alt="" />
              <ArrowDownSec />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
