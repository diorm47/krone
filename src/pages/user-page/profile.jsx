import React from "react";
import "./user-page.css";
import ava from "../../assets/images/user-ava.png";
import ava2 from "../../assets/images/profile-ava.png";
import { ReactComponent as FileUpload } from "../../assets/icons/file-upload.svg";
import { ReactComponent as Replay } from "../../assets/icons/replay.svg";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import MiniUser from "../../components/mini-user/mini-user";

function Profile() {
  return (
    <>
      <div className="main_block user_mes_reply">
        <img src={ava} alt="" />
        <div className="user_mes_reply_right">
          <textarea placeholder="Напишите свой ответ..."></textarea>
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
      <div className="main_block user_profile_mess">
        <div className="user_profile_mess_left">
          <img src={ava2} alt="" />
          <div className="user_link">
            <i>
              <p>Member</p>
            </i>
            <MiniUser />
          </div>
        </div>
        <div className="user_profile_mess_right">
          <div className="user_profile_mess_right_top">
            <p>12 Дек 2023</p>
          </div>
          <div className="user_profile_mess_right_text">
            <p>
              Lorem ipsum dolor sit amet consectetur. Feugiat odio mi orci
              cursus vestibulum orci in arcu. Vitae scelerisque facilisis
              vestibulum tempor rhoncus sed. Vehicula maecenas volutpat
              elementum ipsum vitae mi. Ut malesuada habitant tempor lacinia
              facilisi. Amet quis massa morbi in tellus aliquam. Urna eu eu
              suspendisse interdum viverra. Phasellus faucibus adipiscing felis
              eget tincidunt tellus faucibus elit. Turpis volutpat praesent at
              viverra et. Nunc molestie ac dolor pharetra elementum lacus sit.
              Pretium nunc gravida mollis libero. At eu scelerisque et tortor
              enim phasellus. Luctus venenatis tortor sit eu. Vitae et in tortor
              consectetur auctor. Habitant tellus sed morbi vehicula. Viverra
              nisl sagittis felis
            </p>
          </div>
          <div className="user_profile_mess_likes">
            <Like />      <div className="user_link">
              <p>Понравилось <span>Member</span>, <span>Member</span>, и 322 других</p>
              <MiniUser />
            </div>
          </div>
          <div className="user_profile_mess_actions">
            <p className="text_opacity_hover">Изменить </p>
            <p className="text_opacity_hover">Удалить</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
