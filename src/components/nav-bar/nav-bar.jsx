import React, { useEffect, useState } from "react";
import "./nav-bar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as ArrowDownSec } from "../../assets/icons/arrow-down-secondary.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as MailFilled } from "../../assets/icons/mail-filled.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import { ReactComponent as NotificationFilled } from "../../assets/icons/notification-filled.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout-icon.svg";
import { ReactComponent as NavMenu } from "../../assets/icons/nav-menu.svg";
import { ReactComponent as NavMenuExit } from "../../assets/icons/exit-menu.svg";
import { ReactComponent as NavMenuDropIcon } from "../../assets/icons/nav-menu-drop.svg";
import { NavLink, useNavigate } from "react-router-dom";
import profile from "../../assets/images/profile.png";

function NavBar() {
  const [mailsDrop, setMailsDrop] = useState(false);
  const [notDrop, setNotDrop] = useState(false);
  const [profDrop, setProfDrop] = useState(false);
  const [menuDrop, setMenuDrop] = useState(false);
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/theme-search");
  };

  const [navMenu, setNavMenu] = useState(false);
  const [navMenuDrop, setNavMenuDrop] = useState(false);

  return (
    <>
      {navMenu ? (
        <div className="overlay" onClick={() => setNavMenu(false)}></div>
      ) : (
        ""
      )}
      {/* mob menu */}
      <div
        className={
          navMenu
            ? "nav_mob_menu_modal nav_mob_menu_modal_visible"
            : "nav_mob_menu_modal"
        }
      >
        <div className="nav_mob_menu_top">
          <NavMenuExit onClick={() => setNavMenu(false)} />
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="nav_mob_menu_list">
          <div
            className={
              navMenuDrop
                ? "nav_mob_menu_list_top_link nav_mob_menu_list_top_link_visible"
                : "nav_mob_menu_list_top_link"
            }
          >
            <div
              className="nav_mob_menu_list_top_link_item"
              onClick={() => setNavMenuDrop(!navMenuDrop)}
            >
              <p>Форумы</p>
              <NavMenuDropIcon />
            </div>
            {navMenuDrop ? (
              <div className="nav_mob_menu_list_top_link_menu">
                <NavLink to="/new-messages">
                  <p>Новые сообщения</p>
                </NavLink>
                <NavLink to="/theme-without-answer">
                  <p>Темы без ответов</p>
                </NavLink>
                <NavLink to="/my-themes">
                  <p>Мои темы</p>
                </NavLink>
                <NavLink to="/tracked-themes">
                  <p>Отслеживаемые темы</p>
                </NavLink>
                <NavLink to="/my-theme-messages">
                  <p>Темы с моими сообщениями</p>
                </NavLink>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="nav_mob_menu_list_item">
            <NavLink to="/shops">
              <p>Магазины</p>
            </NavLink>
          </div>
          <div className="nav_mob_menu_list_item">
            <NavLink to="/notes">
              <p>Записки</p>
            </NavLink>
          </div>
        </div>
        <div className="search_input_mob_menu">
          <input
            type="text"
            placeholder="Поиск"
            className="search_input"
            onChange={redirect}
          />
        </div>
      </div>

      {/* navbar */}
      <nav>
        <div className="container nav_wrapper">
          <div className="nav_left">
            <div className="nav_mob_menu">
              <NavMenu onClick={() => setNavMenu(true)} />
            </div>
            <NavLink to="/" className="nav_logo">
              <Logo />
            </NavLink>
            <div className="nav_menu">
              <div className="home_nav_links">
                <NavLink to="/">
                  <div
                    className="home_nav_link_link"
                    onMouseEnter={() => setMenuDrop(true)}
                  >
                    <p>Форумы</p>
                    <ArrowDown />
                  </div>
                </NavLink>
                {menuDrop ? (
                  <div
                    className="home_nav_links_drop"
                    onClick={() => setMenuDrop(false)}
                    onMouseEnter={() => setMenuDrop(true)}
                    onMouseLeave={() => setMenuDrop(false)}
                  >
                    <NavLink to="/new-messages">
                      <p>Новые сообщения</p>
                    </NavLink>
                    <NavLink to="/theme-without-answer">
                      <p>Темы без ответов</p>
                    </NavLink>
                    <NavLink to="/my-themes">
                      <p>Мои темы</p>
                    </NavLink>
                    <NavLink to="/tracked-themes">
                      <p>Отслеживаемые темы</p>
                    </NavLink>
                    <NavLink to="/my-theme-messages">
                      <p>Темы с моими сообщениями</p>
                    </NavLink>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <NavLink to="/shops" className="nav_desc_link">
                <p>Магазины</p>
                <div className="active_line"></div>
              </NavLink>
              <NavLink to="/notes" className="nav_desc_link">
                <p>Записки</p>
                <div className="active_line"></div>
              </NavLink>
            </div>
          </div>
          <div className="nav_right">
            <input
              type="text"
              placeholder="Поиск"
              className="search_input"
              onChange={redirect}
            />
            <div className="nav_right_actions">
              <div className="nav_mails">
                <div
                  onMouseEnter={() => setMailsDrop(true)}
                  className={
                    mailsDrop ? "nav_icon nav_icon_active" : "nav_icon"
                  }
                >
                  <Mail className="not_filled" />
                  <MailFilled className="filled_icon" />
                </div>

                {mailsDrop ? (
                  <div
                    className="nav_bar_drop"
                    onClick={() => setMailsDrop(false)}
                    onMouseLeave={() => setMailsDrop(false)}
                  >
                    <div className="nav_bar_drop_title">
                      <p>Переписки</p>
                    </div>
                    <div className="nav_bar_drop_content">
                    <NavLink to="/mails">
                      <div className="nav_bar_drop_content_top">
                        <img src={profile} alt="" />
                        <div>
                          <p>Название темы сообщения</p>
                          <p>Участники: Username</p>
                          <p>Сегодня: в 00:00</p>
                        </div>
                      </div>
                      </NavLink>

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
                  onMouseEnter={() => setNotDrop(true)}
                  className={notDrop ? "nav_icon nav_icon_active" : "nav_icon"}
                >
                  <Notification className="not_filled" />
                  <NotificationFilled className="filled_icon" />
                </div>

                {notDrop ? (
                  <div
                    className="nav_bar_drop nots_drop"
                    onClick={() => setNotDrop(false)}
                    onMouseLeave={() => setNotDrop(false)}
                  >
                    <div className="nav_bar_drop_title">
                      <p>Оповещения</p>
                    </div>
                    <div className="nav_bar_drop_content">
                    <NavLink to="/profile/alerts">
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
                      </NavLink>

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
                onMouseEnter={() => setProfDrop(true)}
              >
                <img src={profile} alt="" />
                <ArrowDownSec />
              </div>

              {profDrop ? (
                <div
                  className="nav_profile_drop"
                  onClick={() => setProfDrop(false)}
                  onMouseLeave={() => setProfDrop(false)}
                >
                  <div className="nav_profile_drop_links">
                    <p>0.0000000 BTC</p>

                    <NavLink to="/user">
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
    </>
  );
}

export default NavBar;
