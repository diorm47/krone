import React from "react";
import "./the-shops-page.css";
import Carousel from "../../components/carousel/carousel";
import { ReactComponent as ShopAction1 } from "../../assets/icons/shop-action-1.svg";
import { ReactComponent as ShopAction2 } from "../../assets/icons/shop-action-2.svg";
import { ReactComponent as ShopAction3 } from "../../assets/icons/shop-action-3.svg";
import { ReactComponent as BlockChat } from "../../assets/icons/block-chat.svg";

function TheShopsPage() {
  return (
    <div className="shops_page container">
      <div className="default_carousel_top">
        <Carousel />
      </div>
      <div className="shop_banner">
        <h2 className="shop_banner_text">Место для баннера</h2>
        <div className="shop_banner_actions">
          <div className="shop_banner_actions_logo">
            <p>logo</p>
          </div>
          <div className="shop_banner_actions_list">
            <ShopAction1 />
            <ShopAction2 />
            <ShopAction3 />
          </div>
        </div>
      </div>
      <div className="shops_page_title">
        <div className="shops_page_title_left">
          <div className="shops_page_title_left_top">
            <h4>Название магазина</h4>
            <div>
              {" "}
              <p>2 сделки</p>
            </div>
            <p>Депозит: 0.000000</p>
          </div>
          <div className="shops_page_title_left_text">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.{" "}
            </p>
          </div>
        </div>
        <div className="shops_page_title_right">
          <div className="main_block">
            <h2>Команда магазина</h2>
            <input type="text" name="" id="" placeholder="Имя пользователя" />
          </div>
        </div>
      </div>
      <div className="shops_page_themes">
        <div className="main_block">
          <div className="main_block_title">
            <p>Темы</p>
          </div>
          <div className="themes_block">
            <div className="themes_block_item">
              <div className="themes_block_item_left">
                <BlockChat />
                <div className="shop_theme_btn">
                  <p>Тема</p>
                </div>
                <p>
                  Название темы, для примера оно будет длинное, или очень сильно
                  длинное, очень...
                </p>
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
                <div className="shop_theme_btn">
                  <p>Тема</p>
                </div>
                <p>
                  Название темы, для примера оно будет длинное, или очень сильно
                  длинное, очень...
                </p>
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
                <div className="shop_theme_btn">
                  <p>Тема</p>
                </div>
                <p>
                  Название темы, для примера оно будет длинное, или очень сильно
                  длинное, очень...
                </p>
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
          <div className="main_block_title main_block_title_second">
            <p>Автоматизированные магазины</p>
          </div>
          <div className="automative_shops">
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
            <p>Название магазина</p>
          </div>
        </div>
      </div>
      <div className="shops_page_about">
        <h3>О магазине</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
          fringilla vel, aliquet nec, vulputate eget, arcu.Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem.{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
          fringilla vel, aliquet nec, vulputate eget, arcu.Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
          eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
          justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem.
        </p>
      </div>
    </div>
  );
}

export default TheShopsPage;
