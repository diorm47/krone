import React, { useState } from "react";
import "./mails-page.css";
import Carousel from "../../components/carousel/carousel";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Dialog } from "../../assets/icons/dialog.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as FileUpload } from "../../assets/icons/file-upload.svg";
import { ReactComponent as Replay } from "../../assets/icons/replay.svg";
import ava from "../../assets/images/profile.png";
import MiniUser from "../../components/mini-user/mini-user";

function MailsPage() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal ? (
        <div className="overlay" onClick={() => setModal(false)}></div>
      ) : (
        ""
      )}
      {modal ? (
        <div className="invite_chat_modal">
          <h3>Пригласить в переписку</h3>
          <p>ID пользователя</p>
          <div className="invite_chat_modal_inputs">
            <input type="text" placeholder="Введите ID пользователя" />

            <button className="save_btn">Пригласить</button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="mails_page container">
        <div className="default_carousel_top">
          <Carousel />
          <div className="mails_page_content">
            <div className="mails_page_content_left">
              <div className="mails_page_content_search">
                <Search />
                <input type="text" placeholder="Поиск" />
              </div>
              <div className="mails_page_content_users">
                <div className="mails_page_content_user">
                  <img src={ava} alt="" />
                  <div>
                    <p>Member</p>
                    <span>Сообщение от него в кото...</span>
                  </div>
                </div>
                <div className="mails_page_content_user">
                  <img src={ava} alt="" />
                  <div>
                    <p>Member</p>
                    <span>Сообщение от него в кото...</span>
                  </div>
                </div>
                <div className="mails_page_content_user">
                  <img src={ava} alt="" />
                  <div>
                    <p>Member</p>
                    <span>Сообщение от него в кото...</span>
                  </div>
                </div>
                <div className="mails_page_content_user">
                  <img src={ava} alt="" />
                  <div>
                    <p>Member</p>
                    <span>Сообщение от него в кото...</span>
                  </div>
                </div>
                <div className="mails_page_content_user">
                  <img src={ava} alt="" />
                  <div>
                    <p>Member</p>
                    <span>Сообщение от него в кото...</span>
                  </div>
                </div>
                <div className="mails_page_content_user">
                  <img src={ava} alt="" />
                  <div>
                    <p>Member</p>
                    <span>Сообщение от него в кото...</span>
                  </div>
                </div>
                <div className="mails_page_content_user">
                  <img src={ava} alt="" />
                  <div>
                    <p>Member</p>
                    <span>Сообщение от него в кото...</span>
                  </div>
                </div>
                <div className="mails_page_content_user">
                  <img src={ava} alt="" />
                  <div>
                    <p>Member</p>
                    <span>Сообщение от него в кото...</span>
                  </div>
                </div>
                <div className="mails_page_content_user">
                  <img src={ava} alt="" />
                  <div>
                    <p>Member</p>
                    <span>Сообщение от него в кото...</span>
                  </div>
                </div>
                <div className="mails_page_content_user">
                  <img src={ava} alt="" />
                  <div>
                    <p>Member</p>
                    <span>Сообщение от него в кото...</span>
                  </div>
                </div>
              </div>
              <button
                className="create_dialog border_btn"
                onClick={() => setModal(true)}
              >
                <Dialog />
                <p>Создать диалог</p>
              </button>
            </div>
            <div className="mails_page_content_right">
              <div className="mails_page_content_right_top">
                <div className="mails_page_content_right_members">
                  <div className="user_link">
                    <p>Vlad, Niki, Ember</p>
                    <MiniUser />
                  </div>

                  <Plus onClick={() => setModal(true)} />
                </div>
                <div className="mails_page_content_right_leave">
                  <p>Покинуть чат</p>
                </div>
              </div>
              <div className="mails_page_content_chat">
                <div className="mails_page_content_chat_date">
                  <p>19 фев 2023</p>
                </div>
                <div className="user_chat_message">
                  <img src={ava} alt="" />
                  <div className="mails_chat_mess">
                    <div className="mails_chat_mess_top">
                      <div className="user_link">
                        <i>
                          <p>Member</p>
                        </i>
                        <MiniUser />
                      </div>

                      <p>Нестандартное звание пользователя</p>
                    </div>
                    <div className="mails_chat_mess_text">
                      <p>
                        Привет! Это переписка внутри форума, здесь вы можете
                        писать, все что угодно, и оно отобразится прямо здесь!
                      </p>
                      <div className="mails_chat_mess_text_time">
                        <p>22:27</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user_chat_message my_mail_chat_message">
                  <div className="mails_chat_mess">
                    <div className="mails_chat_mess_top">
                    <div className="user_link">
                        <i>
                          <p> Member</p>
                        </i>
                        <MiniUser />
                      </div>
                      <p>Нестандартное звание пользователя</p>
                    </div>
                    <div className="mails_chat_mess_text">
                      <p>
                        Привет! Это переписка внутри форума, здесь вы можете
                        писать, все что угодно, и оно отобразится прямо здесь!
                      </p>
                      <div className="mails_chat_mess_text_time">
                        <p>22:27</p>
                      </div>
                    </div>
                  </div>
                  <img src={ava} alt="" />
                </div>
              </div>
              <div className="mails_page_content_chat_input">
                <input type="text" placeholder="Напишите свой ответ..." />
                <div className="mails_page_content_chat_input_uploads">
                  <div className="mails_page_content_chat_input_uploads_left">
                    <button className="mails_page_content_chat_input_upload_btn">
                      <FileUpload /> <p>Прикрепить файлы</p>
                    </button>
                    <span>Максимальный вес загрузки: 8МБ, Видео: 8МБ</span>
                  </div>
                  <button className="mails_page_content_chat_input_upload_btn">
                    <Replay /> <p>Ответить</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MailsPage;
