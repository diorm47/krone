import React from "react";
import "./profile-pages.css";

function Security() {
  return (
    <div className="information_page">
      <div className="information_item twopoint_auth_wrapper">
        <div className="information_item_left">
          <p>Двухфакторная аутентификация:</p>
        </div>
        <div className="information_item_right">
          <div className="twopoint_auth">
            <button className="twopoint_auth_active">Отключена</button>
            <button>Включить</button>
          </div>
        </div>
      </div>
      <div className="information_item">
        <div className="information_item_left">
          <p>Ваш текущий пароль:</p>
        </div>
        <div className="information_item_right">
          <input type="text" value="Member" />
        </div>
      </div>{" "}
      <div className="information_item">
        <div className="information_item_left">
          <p>Новый пароль:</p>
        </div>
        <div className="information_item_right">
          <input type="password" value="Member" />
        </div>
      </div>{" "}
      <div className="information_item">
        <div className="information_item_left">
          <p>Подтверждение нового пароля:</p>
        </div>
        <div className="information_item_right">
          <input type="password" value="Member" />
        </div>
      </div>
      <div className="information_item">
        <div className="information_item_left"></div>
        <div className="information_item_right">
          <button className="save_btn">Сохранить</button>
        </div>
      </div>
    </div>
  );
}

export default Security;
