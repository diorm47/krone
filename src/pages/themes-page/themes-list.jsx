import React from "react";
import "./themes-page.css";
import Carousel from "../../components/carousel/carousel";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as BlockChat } from "../../assets/icons/block-chat.svg";
import avatar from "../../assets/images/profile.png";
import { NavLink } from "react-router-dom";
import MiniUser from "../../components/mini-user/mini-user";

function ThemesList() {
  return (
    <div className="themes_list_page container">
      <div className="default_carousel_top">
        <Carousel />
      </div>
      <div className="themes_list_top">
        <div className="themes_list_top_titles">
        <NavLink to="/">
            <p>Форум</p>
          </NavLink>
          <ArrowRight />
          <p>Магазины</p>
        </div>
        <div className="themes_list_top_title">
          <i>
            <h3>Название раздела</h3>
          </i>
        </div>
        <div className="themes_list_top_pagination">
          <p>
            <b>1</b> 2 3 ... 35 <ArrowLeft /> <ArrowRight />
          </p>
        </div>
        <div className="create_theme_btn">
          <NavLink to="/create-theme">
            <button>Создать тему</button>
          </NavLink>
        </div>
      </div>
      <div className="main_block themes_list_block">
        <div className="themes_block_item themes_list_item">
          <div className="themes_block_item_left">
            <BlockChat />
            <div className="themes_list_block_left_det">
              <div className="themes_list_block_left_det_top">
                <div className="shop_theme_btn">
                  <p>Магазин</p>
                </div>
                <p className="themes_list_block_left_det_top_title">
                  Название темы, которые будет отображаться на данной странице
                </p>
              </div>
                 <div className="user_link ">
                <span>Member 12 Дек 2023</span>
                <MiniUser />
              </div>
            </div>
          </div>
          <div className="themes_block_item_center">
            <div className="tal">
              <span>Ответы:</span>
              <p>Просмотры:</p>
            </div>
            <div className="tar">
              <span>23</span>
              <p>1.2К</p>
            </div>
          </div>
          <div className="themes_block_item_right">
            <div>
              <div className="themes_block_item_right_title">
           <NavLink to="/theme">
                  <p>13 Дек 2023</p>
                </NavLink>
              </div>
              <div className="themes_block_item_right_time">
                <div className="user_link user_link_r">
                  <p className="tar">Member</p>
                  <MiniUser />
                </div>
              </div>
            </div>
            <img src={avatar} alt="" />
          </div>
        </div>
        <div className="themes_block_item themes_list_item">
          <div className="themes_block_item_left">
            <BlockChat />
            <div className="themes_list_block_left_det">
              <div className="themes_list_block_left_det_top">
                <div className="shop_theme_btn">
                  <p>Магазин</p>
                </div>
                <p className="themes_list_block_left_det_top_title">
                  Название темы, которые будет отображаться на данной странице
                </p>
              </div>
                 <div className="user_link ">
                <span>Member 12 Дек 2023</span>
                <MiniUser />
              </div>
            </div>
          </div>
          <div className="themes_block_item_center">
            <div className="tal">
              <span>Ответы:</span>
              <p>Просмотры:</p>
            </div>
            <div className="tar">
              <span>23</span>
              <p>1.2К</p>
            </div>
          </div>
          <div className="themes_block_item_right">
            <div>
              <div className="themes_block_item_right_title">
           <NavLink to="/theme">
                  <p>13 Дек 2023</p>
                </NavLink>
              </div>
              <div className="themes_block_item_right_time">
                <div className="user_link user_link_r">
                  <p className="tar">Member</p>
                  <MiniUser />
                </div>
              </div>
            </div>
            <img src={avatar} alt="" />
          </div>
        </div>
        <div className="themes_block_item themes_list_item">
          <div className="themes_block_item_left">
            <BlockChat />
            <div className="themes_list_block_left_det">
              <div className="themes_list_block_left_det_top">
                <div className="shop_theme_btn">
                  <p>Магазин</p>
                </div>
                <p className="themes_list_block_left_det_top_title">
                  Название темы, которые будет отображаться на данной странице
                </p>
              </div>
                 <div className="user_link ">
                <span>Member 12 Дек 2023</span>
                <MiniUser />
              </div>
            </div>
          </div>
          <div className="themes_block_item_center">
            <div className="tal">
              <span>Ответы:</span>
              <p>Просмотры:</p>
            </div>
            <div className="tar">
              <span>23</span>
              <p>1.2К</p>
            </div>
          </div>
          <div className="themes_block_item_right">
            <div>
              <div className="themes_block_item_right_title">
           <NavLink to="/theme">
                  <p>13 Дек 2023</p>
                </NavLink>
              </div>
              <div className="themes_block_item_right_time">
                <div className="user_link user_link_r">
                  <p className="tar">Member</p>
                  <MiniUser />
                </div>
              </div>
            </div>
            <img src={avatar} alt="" />
          </div>
        </div>
        <div className="themes_block_item themes_list_item">
          <div className="themes_block_item_left">
            <BlockChat />
            <div className="themes_list_block_left_det">
              <div className="themes_list_block_left_det_top">
                <div className="shop_theme_btn">
                  <p>Магазин</p>
                </div>
                <p className="themes_list_block_left_det_top_title">
                  Название темы, которые будет отображаться на данной странице
                </p>
              </div>
                 <div className="user_link ">
                <span>Member 12 Дек 2023</span>
                <MiniUser />
              </div>
            </div>
          </div>
          <div className="themes_block_item_center">
            <div className="tal">
              <span>Ответы:</span>
              <p>Просмотры:</p>
            </div>
            <div className="tar">
              <span>23</span>
              <p>1.2К</p>
            </div>
          </div>
          <div className="themes_block_item_right">
            <div>
              <div className="themes_block_item_right_title">
           <NavLink to="/theme">
                  <p>13 Дек 2023</p>
                </NavLink>
              </div>
              <div className="themes_block_item_right_time">
                <div className="user_link user_link_r">
                  <p className="tar">Member</p>
                  <MiniUser />
                </div>
              </div>
            </div>
            <img src={avatar} alt="" />
          </div>
        </div>
        <div className="themes_block_item themes_list_item">
          <div className="themes_block_item_left">
            <BlockChat />
            <div className="themes_list_block_left_det">
              <div className="themes_list_block_left_det_top">
                <div className="shop_theme_btn">
                  <p>Магазин</p>
                </div>
                <p className="themes_list_block_left_det_top_title">
                  Название темы, которые будет отображаться на данной странице
                </p>
              </div>
                 <div className="user_link ">
                <span>Member 12 Дек 2023</span>
                <MiniUser />
              </div>
            </div>
          </div>
          <div className="themes_block_item_center">
            <div className="tal">
              <span>Ответы:</span>
              <p>Просмотры:</p>
            </div>
            <div className="tar">
              <span>23</span>
              <p>1.2К</p>
            </div>
          </div>
          <div className="themes_block_item_right">
            <div>
              <div className="themes_block_item_right_title">
           <NavLink to="/theme">
                  <p>13 Дек 2023</p>
                </NavLink>
              </div>
              <div className="themes_block_item_right_time">
                <div className="user_link user_link_r">
                  <p className="tar">Member</p>
                  <MiniUser />
                </div>
              </div>
            </div>
            <img src={avatar} alt="" />
          </div>
        </div>
        <div className="themes_block_item themes_list_item">
          <div className="themes_block_item_left">
            <BlockChat />
            <div className="themes_list_block_left_det">
              <div className="themes_list_block_left_det_top">
                <div className="shop_theme_btn">
                  <p>Магазин</p>
                </div>
                <p className="themes_list_block_left_det_top_title">
                  Название темы, которые будет отображаться на данной странице
                </p>
              </div>
                 <div className="user_link ">
                <span>Member 12 Дек 2023</span>
                <MiniUser />
              </div>
            </div>
          </div>
          <div className="themes_block_item_center">
            <div className="tal">
              <span>Ответы:</span>
              <p>Просмотры:</p>
            </div>
            <div className="tar">
              <span>23</span>
              <p>1.2К</p>
            </div>
          </div>
          <div className="themes_block_item_right">
            <div>
              <div className="themes_block_item_right_title">
           <NavLink to="/theme">
                  <p>13 Дек 2023</p>
                </NavLink>
              </div>
              <div className="themes_block_item_right_time">
                <div className="user_link user_link_r">
                  <p className="tar">Member</p>
                  <MiniUser />
                </div>
              </div>
            </div>
            <img src={avatar} alt="" />
          </div>
        </div>
        <div className="themes_block_item themes_list_item">
          <div className="themes_block_item_left">
            <BlockChat />
            <div className="themes_list_block_left_det">
              <div className="themes_list_block_left_det_top">
                <div className="shop_theme_btn">
                  <p>Магазин</p>
                </div>
                <p className="themes_list_block_left_det_top_title">
                  Название темы, которые будет отображаться на данной странице
                </p>
              </div>
                 <div className="user_link ">
                <span>Member 12 Дек 2023</span>
                <MiniUser />
              </div>
            </div>
          </div>
          <div className="themes_block_item_center">
            <div className="tal">
              <span>Ответы:</span>
              <p>Просмотры:</p>
            </div>
            <div className="tar">
              <span>23</span>
              <p>1.2К</p>
            </div>
          </div>
          <div className="themes_block_item_right">
            <div>
              <div className="themes_block_item_right_title">
           <NavLink to="/theme">
                  <p>13 Дек 2023</p>
                </NavLink>
              </div>
              <div className="themes_block_item_right_time">
                <div className="user_link user_link_r">
                  <p className="tar">Member</p>
                  <MiniUser />
                </div>
              </div>
            </div>
            <img src={avatar} alt="" />
          </div>
        </div>
        <div className="themes_block_item themes_list_item">
          <div className="themes_block_item_left">
            <BlockChat />
            <div className="themes_list_block_left_det">
              <div className="themes_list_block_left_det_top">
                <div className="shop_theme_btn">
                  <p>Магазин</p>
                </div>
                <p className="themes_list_block_left_det_top_title">
                  Название темы, которые будет отображаться на данной странице
                </p>
              </div>
                 <div className="user_link ">
                <span>Member 12 Дек 2023</span>
                <MiniUser />
              </div>
            </div>
          </div>
          <div className="themes_block_item_center">
            <div className="tal">
              <span>Ответы:</span>
              <p>Просмотры:</p>
            </div>
            <div className="tar">
              <span>23</span>
              <p>1.2К</p>
            </div>
          </div>
          <div className="themes_block_item_right">
            <div>
              <div className="themes_block_item_right_title">
           <NavLink to="/theme">
                  <p>13 Дек 2023</p>
                </NavLink>
              </div>
              <div className="themes_block_item_right_time">
                <div className="user_link user_link_r">
                  <p className="tar">Member</p>
                  <MiniUser />
                </div>
              </div>
            </div>
            <img src={avatar} alt="" />
          </div>
        </div>
        <div className="themes_block_item themes_list_item">
          <div className="themes_block_item_left">
            <BlockChat />
            <div className="themes_list_block_left_det">
              <div className="themes_list_block_left_det_top">
                <div className="shop_theme_btn">
                  <p>Магазин</p>
                </div>
                <p className="themes_list_block_left_det_top_title">
                  Название темы, которые будет отображаться на данной странице
                </p>
              </div>
                 <div className="user_link ">
                <span>Member 12 Дек 2023</span>
                <MiniUser />
              </div>
            </div>
          </div>
          <div className="themes_block_item_center">
            <div className="tal">
              <span>Ответы:</span>
              <p>Просмотры:</p>
            </div>
            <div className="tar">
              <span>23</span>
              <p>1.2К</p>
            </div>
          </div>
          <div className="themes_block_item_right">
            <div>
              <div className="themes_block_item_right_title">
           <NavLink to="/theme">
                  <p>13 Дек 2023</p>
                </NavLink>
              </div>
              <div className="themes_block_item_right_time">
                <div className="user_link user_link_r">
                  <p className="tar">Member</p>
                  <MiniUser />
                </div>
              </div>
            </div>
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemesList;
