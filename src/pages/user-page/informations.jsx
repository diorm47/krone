import React from "react";
import "./user-page.css";
import ava from "../../assets/images/profile.png";
import MiniUser from "../../components/mini-user/mini-user";
import { NavLink } from "react-router-dom";

function Informations() {
  return (
    <>
      <div className="main_block user_informations">
        <div className="user_informations_title">
          <h4>Информация:</h4>
        </div>
        <div className="user_information_item">
          <span>О себе:</span>
          <p>Информация, которую впишет пользователь</p>
        </div>
        <div className="user_information_item">
          <span>Адрес:</span>
          <p>Информация, которую впишет пользователь</p>
        </div>
        <div className="user_information_item">
          <span>Веб-сайт:</span>
          <p>Информация, которую впишет пользователь</p>
        </div>
        <div className="user_information_item">
          <span>Пол:</span>
          <p>Информация, которую впишет пользователь</p>
        </div>
        <div className="user_information_item">
          <span>Профессия:</span>
          <p>Информация, которую впишет пользователь</p>
        </div>
        <div className="user_informations_title">
          <h4>Связь:</h4>
        </div>
        <div className="user_information_item">
          <span>Telegram:</span>
          <p>@member</p>
        </div>
        <div className="user_information_item">
          <span>Jabber:</span>
          <p>member@member.com</p>
        </div>
        <div className="user_information_item">
          <span>Чат:</span>
          <NavLink to='/mails'>
          <p className="blue text_opacity_hover">Начать переписку</p></NavLink>
        </div>
        <div className="user_informations_title">
          <h4>Подпись</h4>
        </div>
        <div className="inf_sigantures">
          <p>
            То, что у человека находится в подписи То, что у человека находится
            в подписи То, что у человека находится в подписи То, что у человека
            находится в подписи То, что у человека находится в подписи То, что у
            человека находится в подписи То, что у человека находится в подписи
            То, что у человека находится в подписи То, что у человека находится
            в подписи{" "}
          </p>
        </div>
      </div>
      <div className="user_inf_follows">
        <div className="user_inf_follow_list">
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>{" "}
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>{" "}
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>{" "}
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>{" "}
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>
        </div>
        <div className="user_informations_title">
          <h4>Подписчики</h4>
        </div>
        <div className="user_inf_follow_list">
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>{" "}
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>{" "}
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>{" "}
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>{" "}
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>
        </div>
      </div>
    </>
  );
}

export default Informations;
