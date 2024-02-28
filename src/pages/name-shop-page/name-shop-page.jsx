import React from "react";
import "./name-shop-page.css";
import { ReactComponent as Pen } from "../../assets/icons/pen.svg";
import { ReactComponent as Trash } from "../../assets/icons/trash.svg";
import { ReactComponent as Employee } from "../../assets/icons/employee.svg";
import { ReactComponent as UploadBtn } from "../../assets/icons/upload_btn.svg";
import { ReactComponent as UploadLogo } from "../../assets/icons/logo-upload.svg";
import { ReactComponent as Automagazine } from "../../assets/icons/avtomagazine.svg";
import { ReactComponent as BlockChat } from "../../assets/icons/block-chat.svg";
import { ReactComponent as Pin } from "../../assets/icons/shop-name/pin.svg";
import { ReactComponent as Delete } from "../../assets/icons/shop-name/delete.svg";
import { ReactComponent as Edit } from "../../assets/icons/shop-name/edit.svg";
import { ReactComponent as Hide } from "../../assets/icons/shop-name/hide.svg";
import { ReactComponent as AddTheme } from "../../assets/icons/add-shop-item.svg";
import { NavLink } from "react-router-dom";

function NameShopPage() {
  return (
    <div className="name_shop_page container">
      <div className="pages_title">
        <h1>Название магазина</h1>
      </div>
      <div className="main_block name_shop_content">
        <div className="name_shop_content_wrapper">
          <div className="name_shop_content_top">
            <div className="name_shop_area">
              <p>Мини-описание магазина:</p>
              <Pen className="pen_icon" />
              <textarea placeholder="Описание"></textarea>
            </div>
            <div className="name_shop_area">
              <p>Общее описание магазина:</p>
              <Pen className="pen_icon" />
              <textarea placeholder="Описание"></textarea>
            </div>
            <div className="name_shop_inputs">
              <div className="name_shop_input">
                <p>ID пользователя:</p>
                <div>
                  <input type="text" placeholder="ID пользователя:" />
                </div>
              </div>
              <div className="name_shop_input">
                <p>Нестандартное звание пользователя:</p>
                <div>
                  <input
                    type="text"
                    placeholder="Нестандартное звание пользователя"
                  />
                  <Trash />
                </div>
              </div>
            </div>
            <div className="shop_employe">
              <Employee />
            </div>
            <div className="shop_upload_img">
              <p>Баннер:</p>
              <UploadBtn />
              <span>.png и .gif</span>
            </div>
            <div className="shop_upload_img">
              <p>Логотип:</p>
              <UploadLogo />
            </div>
            <div className="name_shop_inputs shop_links">
              <div className="name_shop_input">
                <p>Ссылка:</p>
                <div>
                  <input type="text" value="krone.com/magazine" />
                </div>
              </div>
              <div className="name_shop_input ">
                <p>Название магазина:</p>
                <div>
                  <input type="text" value="Название" />
                  <Trash />
                </div>
              </div>
            </div>
            <div className="shop_employe">
              <Automagazine />
            </div>
          </div>
          <div className="shop_name_themes">
            <div className="shop_name_themes_title">
              <p>Темы:</p>
              <div className="shop_name_theme_item_wrapper">
                <div className="shop_name_theme_item_sort_title">
                  <p>Сортировка</p>
                </div>
                <div className="themes_block_item shop_name_theme_item">
                  <div className="themes_block_item_left">
                    <BlockChat />
                    <p>Название темы, для примера оно будет ...</p>
                  </div>
                  <div className="shop_name_theme_item_sort">
                    <input type="text" />
                  </div>
                  <div className="themes_block_item_center">
                    <div>
                      <span>Просмотры</span>
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
                <div className="shop_name_theme_item_actions">
                  <span>
                    Количество просмотров за 24 часа: 576 Количество ответов за
                    24 часа: 43
                  </span>
                  <div className="shop_name_theme_item_actions_list">
                    <Pin />
                    <Delete />
                    <NavLink to="/create-theme">
                      <Edit />
                    </NavLink>
                    <Hide />
                  </div>
                </div>
              </div>
              <div className="shop_name_theme_item_wrapper">
                <div className="shop_name_theme_item_sort_title">
                  <p>Сортировка</p>
                </div>
                <div className="themes_block_item shop_name_theme_item">
                  <div className="themes_block_item_left">
                    <BlockChat />
                    <p>Название темы, для примера оно будет ...</p>
                  </div>
                  <div className="shop_name_theme_item_sort">
                    <input type="text" />
                  </div>
                  <div className="themes_block_item_center">
                    <div>
                      <span>Просмотры</span>
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
                <div className="shop_name_theme_item_actions">
                  <span>
                    Количество просмотров за 24 часа: 576 Количество ответов за
                    24 часа: 43
                  </span>
                  <div className="shop_name_theme_item_actions_list">
                    <Pin />
                    <Delete />
                    <Edit />
                    <Hide />
                  </div>
                </div>
              </div>
              <div className="shop_name_theme_item_wrapper">
                <div className="shop_name_theme_item_sort_title">
                  <p>Сортировка</p>
                </div>
                <div className="themes_block_item shop_name_theme_item">
                  <div className="themes_block_item_left">
                    <BlockChat />
                    <p>Название темы, для примера оно будет ...</p>
                  </div>
                  <div className="shop_name_theme_item_sort">
                    <input type="text" />
                  </div>
                  <div className="themes_block_item_center">
                    <div>
                      <span>Просмотры</span>
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
                <div className="shop_name_theme_item_actions">
                  <span>
                    Количество просмотров за 24 часа: 576 Количество ответов за
                    24 часа: 43
                  </span>
                  <div className="shop_name_theme_item_actions_list">
                    <Pin />
                    <Delete />
                    <Edit />
                    <Hide />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="name_shop_actions">
            <NavLink to="/create-theme">
              <AddTheme />
            </NavLink>
            <button class="save_btn upload_note_btn">Сохранить</button>
            <NavLink to="/the-shops">
              <button class="create_dialog border_btn">
                <p>Профиль магазина</p>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameShopPage;
