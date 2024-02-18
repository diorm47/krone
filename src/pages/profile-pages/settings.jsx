import React from "react";
import "./profile-pages.css";

function Settings() {
  return (
    <div className="information_page settings_profile_chex">
      <div className="information_item ">
        <div className="information_item_left">
          <p>Параметры содержимого:</p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>
                  Автоматически отслеживать публикации, которые Вы создаете...
                </p>
              </div>
            </div>
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>
                  Автоматически отслеживать публикации, с которыми Вы
                  взаимодействуете...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="settings_profile_chex_title">
        <p>Получать уведомления, если кто-то...</p>
      </div>
      <div className="information_item ">
        <div className="information_item_left">
          <p>Ответил(а) в отслеживаемую тему:</p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Оповещение</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="information_item ">
        <div className="information_item_left">
          <p> Процитировал(а) Ваше сообщение:</p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Оповещение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information_item ">
        <div className="information_item_left">
          <p>Упомянул(а) Вас в своём сообщении: </p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Оповещение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information_item ">
        <div className="information_item_left">
          <p> Оставил(а) реакцию к Вашему сообщению:</p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Оповещение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information_item ">
        <div className="information_item_left">
          <p> Оставил(а) сообщение в Вашем профиле:</p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Оповещение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information_item ">
        <div className="information_item_left">
          <p>Упомянул(а) Вас в сообщении профиля или комментарии: </p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Оповещение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information_item ">
        <div className="information_item_left">
          <p>Оставил(а) реакцию к сообщению Вашего профиля: </p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Оповещение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information_item ">
        <div className="information_item_left">
          <p>
            {" "}
            Оставил(а) комментарий к Вашему сообщению на странице профиля
            другого пользователя:
          </p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Оповещение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information_item ">
        <div className="information_item_left">
          <p> Также прокомментировал(а) сообщение профиля:</p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Оповещение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information_item ">
        <div className="information_item_left">
          <p> Оставил(а) реакцию к Вашему сообщению в профиле:</p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Оповещение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information_item ">
        <div className="information_item_left">
          <p> Оповещение на ваше упоминание в чате:</p>
        </div>
        <div className="information_item_right">
          <div className="confudency_top">
            <div className="confudency_top_item">
              <input type="checkbox" name="" id="" />
              <div>
                <p>Оповещение</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="information_item">
        <div className="information_item_left">
          {" "}
          <button className="save_btn">Сохранить</button>
        </div>
        <div className="information_item_right"></div>
      </div>
    </div>
  );
}

export default Settings;
