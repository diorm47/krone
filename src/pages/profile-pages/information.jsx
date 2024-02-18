import React from "react";
import "./profile-pages.css";
import avatar from "../../assets/images/profile.png";
import { ReactComponent as AvatarBtn } from "../../assets/icons/profile-ava-btn.svg";

function Information() {
  return (
    <div className="information_page">
      <div className="information_item">
        <div className="information_item_left">
          <p>Имя пользователя:</p>
        </div>
        <div className="information_item_right">
          <input type="text" value="Member" />
        </div>
      </div>
      <div className="information_item">
        <div className="information_item_left">
          <p>ID:</p>
        </div>
        <div className="information_item_right">
          <input type="text" value="Member" />
        </div>
      </div>
      <div className="information_item profile_avatar_inf">
        <div className="information_item_left">
          <p>Аватар:</p>
        </div>
        <div className="information_item_right ">
          <img src={avatar} alt="" />
          <div className="profile_avatar_btn">
            <AvatarBtn />
          </div>
        </div>
      </div>
      <div className="information_item">
        <div className="information_item_left">
          <p>Нестандартное звание:</p>
        </div>
        <div className="information_item_right">
          <input type="text" value="status" />
          <br />
          <p>
            Если указано, то этот текст заменит звание, которое отображается под
            Вашим <br /> именем в сообщениях.
          </p>
        </div>
      </div>

      <div className="information_item">
        <div className="information_item_left">
          <p>Адрес:</p>
        </div>
        <div className="information_item_right">
          <input type="text" value="Member" />
        </div>
      </div>
      <div className="information_item">
        <div className="information_item_left">
          <p>Веб-сайт:</p>
        </div>
        <div className="information_item_right">
          <input type="text" value="Member" />
        </div>
      </div>
      <div className="information_item">
        <div className="information_item_left">
          <p>Профессия:</p>
        </div>
        <div className="information_item_right">
          <input type="text" value="Member" />
        </div>
      </div>
      <div className="information_item">
        <div className="information_item_left">
          <p>Кошелек BTC:</p>
        </div>
        <div className="information_item_right">
          <input type="text" value="Member" />
        </div>
      </div>

      <div className="information_item">
        <div className="information_item_left">
          <p>Обо мне:</p>
        </div>
        <div className="information_item_right">
          <textarea value="Member"></textarea>
        </div>
      </div>

      <div className="information_item gender_select_item">
        <div className="information_item_left">
          <p>Пол:</p>
        </div>
        <div className="information_item_right">
          <div className="gender_select">
            <div>
              <input type="checkbox" name="" id="" />
              <b>
                {" "}
                <p>Не выбрано</p>
              </b>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <p>Мужчина</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <p>Женщина</p>
            </div>
          </div>
        </div>
      </div>
      <div className="information_item">
        <div className="information_item_left">
          <p>Jabber:</p>
        </div>
        <div className="information_item_right">
          <input type="text" value="Member" />
        </div>
      </div>
      <div className="information_item">
        <div className="information_item_left">
          <p>Telegram:</p>
        </div>
        <div className="information_item_right">
          <input type="text" value="Member" />
        </div>
      </div>

      <div className="information_item">
        <div className="information_item_left"></div>
        <div className="information_item_right">
          <button className="save_btn">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Information;
