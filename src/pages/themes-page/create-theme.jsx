import React from "react";
import Carousel from "../../components/carousel/carousel";
import "./themes-page.css";

function CreateTheme() {
  return (
    <div className="create_theme_page container">
      <div className="default_carousel_top">
        <Carousel />
      </div>
      <div className="create_theme_page_content">
        <div className="main_block create_theme">
          <div className="create_theme_input">
            <h4>Заголовок:</h4>
            <p>Сформулируйте в нескольких словах о чем ваша тема</p>
            <input type="text" placeholder="Напишите заголовок вашей темы" />
          </div>
          <div className="create_theme_area">
            <textarea placeholder="О чем ваша тема..."></textarea>
          </div>
          <div className="create_theme_input">
            <h4>Теги:</h4>
            <p>Несколько тегов могут быть разделены запятыми</p>
            <input type="text" />
          </div>
          <div className="create_theme_prefixes">
            <div className="create_theme_prefix_item">
              <h4>Настройки:</h4>
              <div>
                <input type="checkbox" name="" id="" />
                <span>Закрытая тема для ответов</span>
              </div>
            </div>
            <div className="create_theme_prefix_item">
              <h4>Выбор префикса</h4>
              <div>
                <select name="" id="">
                  <option value="">Префикс</option>
                  <option value="">Префикс</option>
                  <option value="">Префикс</option>
                </select>
              </div>
            </div>
          </div>

          <button className="save_btn">Создать тему</button>
        </div>
      </div>
    </div>
  );
}

export default CreateTheme;
