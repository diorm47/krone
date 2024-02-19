import React from "react";
import "./home-page.css";
import Carousel from "../../components/carousel/carousel";
import avatar from "../../assets/images/profile.png";

import { ReactComponent as Send } from "../../assets/icons/send.svg";
import { ReactComponent as Bitcoin } from "../../assets/icons/bitcoin.svg";
import { ReactComponent as BlockChat } from "../../assets/icons/block-chat.svg";
import Switch from "../../components/switch/switch";
import Footer from "../../components/footer/footer";
import { NavLink } from "react-router-dom";

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
                <span>Правила чата</span>
              </i>
            </div>

            <div className="forum_chat">
              <div className="forum_chat_messages">
                <div className="forum_chat_user">
                  <NavLink to="/user">
                    <img src={avatar} alt="" />
                  </NavLink>
                  <div className="forum_chat_user_message">
                    <p>
                      <b>Mark:</b> Всем привет, я новенький!
                    </p>
                  </div>
                </div>
                <div className="forum_chat_user">
                <NavLink to="/user">
                    <img src={avatar} alt="" />
                  </NavLink>
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
                <NavLink to="/user">
                    <img src={avatar} alt="" />
                  </NavLink>
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
                <button>
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
                  <p>Название темы, для примера оно будет длинное ...</p>
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
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <p>Название темы, для примера оно будет длинное ...</p>
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
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <p>Название темы, для примера оно будет длинное ...</p>
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
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
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
                  <p>Название темы, для примера оно будет длинное ...</p>
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
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <p>Название темы, для примера оно будет длинное ...</p>
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
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <p>Название темы, для примера оно будет длинное ...</p>
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
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
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
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Администратор</span>
                </div>
              </div>
              <div className="online_command_item">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Администратор</span>
                </div>
              </div>
              <div className="online_command_item">
                <img src={avatar} alt="" />
                <div>
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
                <Bitcoin />
                <div>
                  <p>1</p>
                </div>
              </div>
              <div className="currency_conv_item">
                <Bitcoin />
                <div>
                  <p>9123.9123</p>
                </div>
              </div>
              <div className="currency_conv_item">
                <Bitcoin />
                <div>
                  <p>2193.1293</p>
                </div>
              </div>
              <div className="currency_conv_item">
                <Bitcoin />
                <div>
                  <p>2193.1293</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_block">
            <div className="main_block_secondary_title">
              <p>Сообщения профилей</p>
            </div>
            <div className="online_command profile_messages">
              <div className="online_command_item">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>
                    Сообщения из профиля участника сайта, которое будет здесь
                    отображаться
                  </span>
                </div>
              </div>
              <div className="online_command_item">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>
                    Сообщения из профиля участника сайта, которое будет здесь
                    отображаться
                  </span>
                </div>
              </div>
              <div className="online_command_item">
                <img src={avatar} alt="" />
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
