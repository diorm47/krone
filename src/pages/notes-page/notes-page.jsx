import React from "react";
import avatar from "../../assets/images/profile.png";
import Carousel from "../../components/carousel/carousel";
import "./notes-page.css";

import { ReactComponent as UploadBtn } from "../../assets/icons/upload_btn.svg";
import MiniUser from "../../components/mini-user/mini-user";

function NotesPage() {
  return (
    <div className="home_page">
      <div className="default_carousel_top">
        <Carousel />
      </div>

      <div className="hompe_page_content container">
        <div className="notes_page_left">
          <div className="main_block">
            <div className="notes_page_content">
              <div className="notes_page_content_top">
                <p>Фотография:</p>
                <div className="notes_page_upload">
                  <UploadBtn />
                </div>
                <span>.jpg .jpeg .png</span>
              </div>
              <div className="notes_page_content_textare">
                <p>Ввести текст:</p>
                <textarea value="Текст"></textarea>
              </div>
              <div className="notes_page_content_chex">
                <div className="notes_page_content_chex_top">
                  <div>
                    <input type="radio" name="" id="" />
                    <p>Сжечь письмо после прочтения</p>
                  </div>
                  <div>
                    <input type="radio" name="" id="" />
                    <p>Сжечь письмо через</p>
                  </div>
                </div>
                <div className="notes_page_content_chex_bottom">
                  <div>
                    <input type="checkbox" name="" id="" />
                    <p>15 мин</p>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <p>30 мин</p>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <p>60 мин</p>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <p>2 часа</p>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <p>3 часа</p>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <p>4 часа</p>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    <p>24 часа</p>
                  </div>
                </div>
              </div>

              <button className="save_btn upload_note_btn">Загрузить</button>
            </div>
          </div>
        </div>

        <div className="hompe_page_right">
          <div className="main_block">
            <div className="main_block_secondary_title">
              <p>Команда сайта онлайн</p>
            </div>
            <div className="online_command">
              <div className="online_command_item">
                <div className="user_link user_link_r">
                  <img src={avatar} alt="" />
                  <MiniUser />
                </div>
                <div className="online_command_item_desc">
                  <p>Vik</p>

                  <span>Администратор</span>
                </div>
              </div>{" "}
              <div className="online_command_item">
                <div className="user_link user_link_r">
                  <img src={avatar} alt="" />
                  <MiniUser />
                </div>
                <div className="online_command_item_desc">
                  <p>Vik</p>

                  <span>Администратор</span>
                </div>
              </div>{" "}
              <div className="online_command_item">
                <div className="user_link user_link_r">
                  <img src={avatar} alt="" />
                  <MiniUser />
                </div>
                <div className="online_command_item_desc">
                  <p>Vik</p>

                  <span>Администратор</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hompe_page_right_carousel">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesPage;
