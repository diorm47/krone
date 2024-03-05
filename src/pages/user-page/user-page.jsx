import React from "react";
import "./user-page.css";
import Carousel from "../../components/carousel/carousel";
import profile_bg from "../../assets/images/profile-bg.png";
import ava from "../../assets/images/profile-ava.png";
import { ReactComponent as Chat } from "../../assets/icons/chat.svg";
import { ReactComponent as ShopAction1 } from "../../assets/icons/shop-action-1.svg";
import { ReactComponent as ShopAction2 } from "../../assets/icons/shop-action-2.svg";
import { ReactComponent as ShopAction3 } from "../../assets/icons/shop-action-3.svg";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Profile from "./profile";
import Activity from "./activity";
import Informations from "./informations";
import MiniUser from "../../components/mini-user/mini-user";

function UserPage() {
  return (
    <div className="user_page container">
      <div className="default_carousel_top">
        <Carousel />
      </div>
      <div className="user_page_profile">
        <div className="complaint">
          <p>Жалоба</p>
        </div>
        <img src={profile_bg} alt="" className="user_page_profile_bg" />
        <div className="user_page_profile_content">
          <div className="user_page_profile_content_left">
            <div className="user_page_profile_ava">
              <img src={ava} alt="" />
            </div>
            <div className="user_page_profile_content_desc">
              <div className="user_page_profile_content_username">
                <i>
                  <p>Member</p>
                </i>
                <Chat />
              </div>
              <div className="user_page_profile_content_prefix">
                <p>Префикс</p>
                <div className="shop_banner_actions_list">
                  <ShopAction1 />
                  <ShopAction2 />
                  <ShopAction3 />
                </div>
              </div>
              <div className="user_page_profile_content_status">
                <p>Статус данного человека отображается здесь</p>
                <p>
                  <span>Регистрация:</span> 19 Дек 2023
                </p>
                <p>
                  <span>Активность:</span> 8 мин. назад просматривает <br />{" "}
                 
                  <div className="user_link">
                  профиль пользователя
                    <span className="blue"> Member</span>
                    <MiniUser />
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className="user_page_profile_content_right">
            <div>
              <p>Депозит</p>
              <span>172</span>
            </div>
            <div>
              <p>Сообщения:</p>
              <span>172</span>
            </div>
            <div>
              <p>Реакции:</p>
              <span>172</span>
            </div>
            <div>
              <p>Уровень</p>
              <span>172</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main_block user_page_nav">
        <NavLink to="profile">
          <p className="text_opacity_hover">Профиль</p>
        </NavLink>
        <NavLink to="activity">
          <p className="text_opacity_hover">Активность</p>
        </NavLink>
        <NavLink to="publications">
          <p className="text_opacity_hover">Публикации</p>
        </NavLink>
        <NavLink to="informations">
          <p className="text_opacity_hover">Информация</p>
        </NavLink>
      </div>
      <div className="user_pages_content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="activity" element={<Activity />} />
          <Route path="publications" element={<Activity />} />
          <Route path="informations" element={<Informations />} />
        </Routes>
      </div>
    </div>
  );
}

export default UserPage;
