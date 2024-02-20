import React, { useState } from "react";
import "./nav-bar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as ArrowDownSec } from "../../assets/icons/arrow-down-secondary.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout-icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import profile from "../../assets/images/profile.png";

function NavBar() {
  const [mailsDrop, setMailsDrop] = useState(false);
  const [notDrop, setNotDrop] = useState(false);
  const [profDrop, setProfDrop] = useState(false);
  const [menuDrop, setMenuDrop] = useState(false);
  const navigate = useNavigate()

  const closeDrops = () => {
    setMailsDrop(false);
    setNotDrop(false);
    setProfDrop(false);
    setMenuDrop(false);
  };
  const redirect = () => {
   navigate('/theme-search')
  }
  return (
    <>
      <nav>
        <div className="container nav_wrapper">
          <div className="nav_left">
            <NavLink to="/">
              <Logo />
            </NavLink>
            <div className="nav_menu">
              <div className="home_nav_links">
                <NavLink to="/">
                  <div
                    className="home_nav_link_link"
                    onClick={() => setMenuDrop(true)}
                  >
                    <p>Главная</p>
                    <ArrowDown />
                  </div>
                </NavLink>
                {menuDrop ? (
                  <div
                    className="home_nav_links_drop"
                    onClick={() => setMenuDrop(false)}
                  >
                    <NavLink to="">
                      <p>Новые сообщения</p>
                    </NavLink>
                    <NavLink to="">
                      <p>Темы без ответов</p>
                    </NavLink>
                    <NavLink to="/themes-list">
                      <p>Мои темы</p>
                    </NavLink>
                    <NavLink to="">
                      <p>Отслеживаемые темы</p>
                    </NavLink>
                    <NavLink to="">
                      <p>Темы с моими сообщениями</p>
                    </NavLink>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <NavLink to="/the-shops">
                <p>Магазины</p>
              </NavLink>
              <NavLink to="/notes">
                <p>Записки</p>
              </NavLink>
            </div>
          </div>
          <div className="nav_right">
            <input type="text" placeholder="Поиск" className="search_input" onChange={redirect}/>
            <div className="nav_right_actions">
              <div className="nav_mails">
                <div
                  onClick={() => setMailsDrop(!mailsDrop)}
                  className={
                    mailsDrop ? "nav_icon nav_icon_active" : "nav_icon"
                  }
                >
                  <Mail />
                </div>

                {mailsDrop ? (
                  <div
                    className="nav_bar_drop"
                    onClick={() => setMailsDrop(!mailsDrop)}
                  >
                    <div className="nav_bar_drop_title">
                      <p>Переписки</p>
                    </div>
                    <div className="nav_bar_drop_content">
                      <div className="nav_bar_drop_content_top">
                        <img src={profile} alt="" />
                        <div>
                          <p>Название темы сообщения</p>
                          <p>Участники: Username</p>
                          <p>Сегодня: в 00:00</p>
                        </div>
                      </div>
                      <div className="nav_bar_drop_content_link">
                        <NavLink to="/mails">
                          <p>Показать всё</p>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="nav_notifications">
                <div
                  onClick={() => setNotDrop(!notDrop)}
                  className={notDrop ? "nav_icon nav_icon_active" : "nav_icon"}
                >
                  <Notification />
                </div>

                {notDrop ? (
                  <div
                    className="nav_bar_drop nots_drop"
                    onClick={() => setNotDrop(!notDrop)}
                  >
                    <div className="nav_bar_drop_title">
                      <p>Оповещения</p>
                    </div>
                    <div className="nav_bar_drop_content">
                      <div className="not_drop_content">
                        <div className="not_drop_content_top">
                          <div></div>
                          <p>Название темы сообщения</p>
                        </div>
                        <div className="not_drop_content_items">
                          <p>
                            Текст уведомления Текст уведомления Текст
                            уведомления Текст уведомления Текст уведомления
                            Текст уведомления Текст уведомления Текст
                            уведомления Текст уведомления Текст уведомления
                          </p>
                        </div>
                      </div>

                      <div className="nav_bar_drop_content_link">
                        <NavLink to="/profile/alerts">
                          <p>Показать всё</p>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="nav_profile">
              <div
                className="nav_profile_items"
                onClick={() => setProfDrop(true)}
              >
                <img src={profile} alt="" />
                <ArrowDownSec />
              </div>

              {profDrop ? (
                <div
                  className="nav_profile_drop"
                  onClick={() => setProfDrop(false)}
                >
                  <div className="nav_profile_drop_links">
                    <p>0.0000000 BTC</p>

                    <NavLink to="">
                      <p>Мои заказы</p>
                    </NavLink>
                    <NavLink to="">
                      <p>Мой профиль</p>
                    </NavLink>
                    <NavLink to="/name-of-shop">
                      <p>Название магазина</p>
                    </NavLink>
                    <NavLink to="/profile/settings">
                      <p>Настройки</p>
                    </NavLink>
                    <NavLink to="/profile/subscriptions">
                      <p>Подписки</p>
                    </NavLink>
                    <NavLink to="/profile/security">
                      <p>Безопасность</p>
                    </NavLink>
                  </div>
                  <div className="nav_profile_drop_logout">
                    <Logout />
                    <p>Выйти</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
      {mailsDrop || notDrop || profDrop || menuDrop ? (
        <div className="overlay" onClick={closeDrops}></div>
      ) : (
        ""
      )}
    </>
  );
}

export default NavBar;
