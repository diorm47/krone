import React from "react";
import "./profile.css";
import Carousel from "../../components/carousel/carousel";
import { NavLink, Route, Routes } from "react-router-dom";
import Information from "../profile-pages/information";
import Security from "../profile-pages/security";
import Privacy from "../profile-pages/privacy";
import Settings from "../profile-pages/settings";
import Signature from "../profile-pages/signature";
import Subscriptions from "../profile-pages/subscriptions";
import Ignore from "../profile-pages/ignore";
import Alerts from "../profile-pages/alerts";
import Reactions from "../profile-pages/reactions";

function ProfilePage() {
  return (
    <div className="profile_page container">
      <Carousel />
      <div className="profile_page_view ">
        <div className="profile_page_left">
          <Routes>
            <Route path="information" element={<Information />} />
            <Route path="security" element={<Security />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="settings" element={<Settings />} />
            <Route path="signature" element={<Signature />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="ignoring" element={<Ignore />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="reactions" element={<Reactions />} />
          </Routes>
        </div>
        <div className="profile_page_right">
          <h3>Ваш аккаунт</h3>
          <NavLink to="">
            <p>Мой профиль</p>
          </NavLink>
          <NavLink to="">
            <p>Уведомления</p>
          </NavLink>
          <NavLink to="reactions">
            <p>Полученные реакции</p>
          </NavLink>

          <h3 className="mt_20px">Настройки</h3>
          <NavLink to="information">
            <p>Информация</p>
          </NavLink>
          <NavLink to="security">
            <p>Безопасность</p>
          </NavLink>
          <NavLink to="privacy">
            <p>Конфиденциальность</p>
          </NavLink>
          <NavLink to="settings">
            <p>Настройки</p>
          </NavLink>
          <NavLink to="signature">
            <p>Подпись</p>
          </NavLink>
          <NavLink to="subscriptions">
            <p>Подписки</p>
          </NavLink>
          <NavLink to="ignoring">
            <p>Игнорирование</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
