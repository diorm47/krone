import React from "react";
import "./home-page.css";
import Carousel from "../../components/carousel/carousel";
import avatar from "../../assets/images/profile.png";
import rub from "../../assets/icons/rub.png";

import { ReactComponent as Send } from "../../assets/icons/send.svg";
import { ReactComponent as Bitcoin } from "../../assets/icons/bitcoin.svg";
import { ReactComponent as Euro } from "../../assets/icons/euro.svg";
import { ReactComponent as USD } from "../../assets/icons/usd.svg";

import { ReactComponent as BlockChat } from "../../assets/icons/block-chat.svg";
import Switch from "../../components/switch/switch";
import Footer from "../../components/footer/footer";
import { NavLink } from "react-router-dom";
import MiniUser from "../../components/mini-user/mini-user";

function HomePage() {
  return (
    <div className="home_page">
      <div className="home_top_block">
        <Carousel />
      </div>
      <div className="hompe_page_content container">
        <div className="hompe_page_left">
          <div className="forum_chat_wrapper">
            <div className="forum_chat_title">
              <p>FORUM CHAT</p> <div className="forum_chat_line"></div>{" "}
              <i>
                <span>Онлайн 0 пользователей</span>
              </i>
            </div>

            <div className="forum_chat">
              <div className="forum_chat_messages">
                <div className="forum_chat_user">
                  <div className="user_link">
                    <img src={avatar} alt="" />
                    <MiniUser />
                  </div>
                  <div className="forum_chat_user_message">
                    <p>
                      <b>Mark:</b> Всем привет, я новенький!
                    </p>
                  </div>
                </div>
                <div className="forum_chat_user">
                  <div className="user_link">
                    <img src={avatar} alt="" />
                    <MiniUser />
                  </div>
                  <div className="forum_chat_user_message">
                    <p>
                      <b>Vik:</b> Привет и Вам. Какой сегодня день? :)
                    </p>
                  </div>
                </div>
                <div className="forum_chat_me">
                  <div className="forum_chat_my_message">
                    <p>Привет и Вам. Какой сегодня день? :)</p>
                  </div>
                </div>
                <div className="forum_chat_user">
                  <div className="user_link">
                    <img src={avatar} alt="" />
                    <MiniUser />
                  </div>
                  <div className="forum_chat_user_message">
                    <p>
                      <b>Ольга:</b> Всем привет, у вас тут очень весело,
                      атмосферно!
                    </p>
                  </div>
                </div>
              </div>
              <div className="forum_chat_type">
                <input type="text" placeholder="Напишите ваше сообщение..." />
                <button className="blue_btn">
                  <Send />
                </button>
              </div>
            </div>
          </div>
          <div className="main_block">
            <div className="main_block_title">
              <p>Название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch open={true} />
              </div>
            </div>
            <div className="themes_block">
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <NavLink to="/themes">
                    <p>Название темы, для примера оно будет длинное ...</p>
                  </NavLink>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                    <NavLink to="/theme">
                      <p>Последняя размещенная тема</p>
                    </NavLink>
                  </div>
                  <div className="themes_block_item_right_time">
                    <div className="user_link">
                      <p>
                        28 мин. назад - <span>Nickname</span>{" "}
                      </p>
                      <MiniUser />
                    </div>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <NavLink to="/themes">
                    <p>Название темы, для примера оно будет длинное ...</p>
                  </NavLink>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                  <NavLink to="/theme">
                      <p>Последняя размещенная тема</p>
                    </NavLink>
                  </div>
                  <div className="themes_block_item_right_time">
                    <div className="user_link">
                      <p>
                        28 мин. назад - <span>Nickname</span>{" "}
                      </p>
                      <MiniUser />
                    </div>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <NavLink to="/themes">
                    <p>Название темы, для примера оно будет длинное ...</p>
                  </NavLink>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                  <NavLink to="/theme">
                      <p>Последняя размещенная тема</p>
                    </NavLink>
                  </div>
                  <div className="themes_block_item_right_time">
                    <div className="user_link">
                      <p>
                        28 мин. назад - <span>Nickname</span>{" "}
                      </p>
                      <MiniUser />
                    </div>
                  </div>
                </div>
              </div>
              <div className="create_theme_btn">
          <NavLink to="/create-theme">
            <button>Создать тему</button>
          </NavLink>
        </div>
            </div>
          </div>
          <div className="main_block empty_main_block">
            
            <div className="main_block_title">
              <p>Эксперементальное название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch />
              </div>
            </div>
          </div>
          <div className="main_block">
            <div className="main_block_title">
              <p>Название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch open={true} />
              </div>
            </div>
            <div className="themes_block">
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <NavLink to="/themes">
                    <p>Название темы, для примера оно будет длинное ...</p>
                  </NavLink>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                  <NavLink to="/theme">
                      <p>Последняя размещенная тема</p>
                    </NavLink>
                  </div>
                  <div className="themes_block_item_right_time">
                    <div className="user_link">
                      <p>
                        28 мин. назад - <span>Nickname</span>{" "}
                      </p>
                      <MiniUser />
                    </div>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <NavLink to="/themes">
                    <p>Название темы, для примера оно будет длинное ...</p>
                  </NavLink>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                  <NavLink to="/theme">
                      <p>Последняя размещенная тема</p>
                    </NavLink>
                  </div>
                  <div className="themes_block_item_right_time">
                    <div className="user_link">
                      <p>
                        28 мин. назад - <span>Nickname</span>{" "}
                      </p>
                      <MiniUser />
                    </div>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <NavLink to="/themes">
                    <p>Название темы, для примера оно будет длинное ...</p>
                  </NavLink>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                  <NavLink to="/theme">
                      <p>Последняя размещенная тема</p>
                    </NavLink>
                  </div>
                  <div className="themes_block_item_right_time">
                    <div className="user_link">
                      <p>
                        28 мин. назад - <span>Nickname</span>{" "}
                      </p>
                      <MiniUser />
                    </div>
                  </div>
                </div>
              </div>
              <div className="create_theme_btn">
          <NavLink to="/create-theme">
            <button>Создать тему</button>
          </NavLink>
        </div>
            </div>
          </div>
          <div className="main_block empty_main_block">
            <div className="main_block_title">
              <p>Эксперементальное название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch />
              </div>
            </div>
          </div>
          <div className="main_block empty_main_block">
            <div className="main_block_title">
              <p>Эксперементальное название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch />
              </div>
            </div>
          </div>
          <div className="main_block empty_main_block">
            <div className="main_block_title">
              <p>Эксперементальное название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch />
              </div>
            </div>
          </div>
        </div>

        <div className="hompe_page_right">
          <div className="main_block">
            <div className="main_block_secondary_title">
              <p>Команда сайта онлайн</p>
            </div>
            <div className="online_command">
              <div className="online_command_item">
                <div className="user_link user_link_r">
                  <img src={avatar} alt="" />
                  <MiniUser />
                </div>
                <div className="online_command_item_desc">
                  <p>Vik</p>
                  <span>Администратор</span>
                </div>
              </div>
              <div className="online_command_item">
                <div className="user_link user_link_r">
                  <img src={avatar} alt="" />
                  <MiniUser />
                </div>
                <div className="online_command_item_desc">
                  <p>Vik</p>
                  <span>Администратор</span>
                </div>
              </div>
              <div className="online_command_item">
                <div className="user_link user_link_r">
                  <img src={avatar} alt="" />
                  <MiniUser />
                </div>
                <div className="online_command_item_desc">
                  <p>Vik</p>
                  <span>Администратор</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hompe_page_right_carousel">
            <Carousel />
          </div>
          <div className="main_block">
            <div className="main_block_secondary_title">
              <p>Конвертер валют</p>
            </div>
            <div className="currency_conv">
              <div className="currency_conv_item">
                <div className="currency_conv_item_name">
                  <Bitcoin />
                  <span>Bitcoin</span>
                </div>

                <input
                  type="text"
                  value="1"
                  className="currency_conv_item_valu"
                />
              </div>
              <div className="currency_conv_item">
                <div className="currency_conv_item_name">
                  <Euro />
                  <span>EURO</span>
                </div>

                <input
                  type="text"
                  value="9123"
                  className="currency_conv_item_valu"
                />
              </div>
              <div className="currency_conv_item">
                <div className="currency_conv_item_name">
                  <USD />
                  <span>USD</span>
                </div>

                <input
                  type="text"
                  value="2193"
                  className="currency_conv_item_valu"
                />
              </div>
              <div className="currency_conv_item">
                <div className="currency_conv_item_name">
                 <img src={rub} alt="" />
                  <span>RUB</span>
                </div>

                <input
                  type="text"
                  value="2193"
                  className="currency_conv_item_valu"
                />
              </div>
            </div>
          </div>
          <div className="main_block">
            <div className="main_block_secondary_title">
              <p>Сообщения профилей</p>
            </div>
            <div className="online_command profile_messages">
              <div className="online_command_item">
                <div className="user_link user_link_r">
                  <img src={avatar} alt="" />
                  <MiniUser />
                </div>
                <div>
                  <p>Vik</p>
                  <span>
                    Сообщения из профиля участника сайта, которое будет здесь
                    отображаться
                  </span>
                </div>
              </div>
              <div className="online_command_item">
                <div className="user_link user_link_r">
                  <img src={avatar} alt="" />
                  <MiniUser />
                </div>
                <div>
                  <p>Vik</p>
                  <span>
                    Сообщения из профиля участника сайта, которое будет здесь
                    отображаться
                  </span>
                </div>
              </div>
              <div className="online_command_item">
                <div className="user_link user_link_r">
                  <img src={avatar} alt="" />
                  <MiniUser />
                </div>
                <div>
                  <p>Vik</p>
                  <span>
                    Сообщения из профиля участника сайта, которое будет здесь
                    отображаться
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
