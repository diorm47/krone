import React from "react";
import "./profile-pages.css";
import Select from "react-select";

function Privacy() {
  const customOptions = [
    {
        value: "member",
        label: (
          <div className="select_item">
            <p>Member</p>
          </div>
        ),
      },
    {
      value: "",
      label: (
        <div className="select_item">
          <p>Все посетители</p>
        </div>
      ),
    },
    {
      value: "",
      label: (
        <div className="select_item">
          <p>Только пользователи</p>
        </div>
      ),
    },
    {
      value: "",
      label: (
        <div className="select_item">
          <p>Люди, на которых я подписан(а)</p>
        </div>
      ),
    },
    {
      value: "",
      label: (
        <div className="select_item">
          <p>Никто</p>
        </div>
      ),
    },
  ];


  return (
    <div className="information_page">
      <div className="information_item confudency_top_wrapper">
        <div className="information_item_left">
          <p>Настройки конфендициальности:</p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Показывать Ваш онлайн-статус</p>
                <span>Это позволит другим людям видеть, когда Вы онлайн</span>
              </div>
            </div>
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Показывать Вашу текущую активность</p>
                <span>
                  Это позволит другим людям видеть, какую страницу Вы
                  просматриваете в данный момент
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="information_item">
        <div className="information_item_left">
          <p>Ваш текущий пароль:</p>
        </div>
        <div className="information_item_right">
          <div className="information_item_select">
            <Select  value='' options={customOptions} />
          </div>
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

export default Privacy;
