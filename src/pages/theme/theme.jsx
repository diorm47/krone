import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import React from "react";
import Carousel from "../../components/carousel/carousel";
import ava from "../../assets/images/mini-ava.png";
import "./theme.css";
import { ReactComponent as FileUpload } from "../../assets/icons/file-upload.svg";
import { ReactComponent as Replay } from "../../assets/icons/replay.svg";
import { ReactComponent as ShopAction1 } from "../../assets/icons/shop-action-1.svg";
import { ReactComponent as ShopAction2 } from "../../assets/icons/shop-action-2.svg";
import { ReactComponent as ShopAction3 } from "../../assets/icons/shop-action-3.svg";
import { ReactComponent as IconTop } from "../../assets/icons/theme-top.svg";
import { ReactComponent as Like } from "../../assets/icons/like.svg";
import { ReactComponent as LikeAc } from "../../assets/icons/like-action.svg";
import { ReactComponent as ReplyAc } from "../../assets/icons/reply-action.svg";
import MiniUser from "../../components/mini-user/mini-user";
import { NavLink } from "react-router-dom";
function Theme() {
  return (
    <div className="themes_list_page container theme_page">
      <div className="default_carousel_top">
        <Carousel />
      </div>
      <div className="themes_list_top">
        <div className="themes_list_top_titles">
          <NavLink to="/">
            <p>Форум</p>
          </NavLink>
          <ArrowRight />
          <p>Название раздела</p>
          <ArrowRight />
          <p>Название раздела</p>
        </div>
        <div className="theme_top">
          <div className="theme_top_left">
            <p className="blue_btn">Префикс</p>
            <h2>Название темы</h2>
          </div>
          <div className="theme_top_right">
            <button className="border_btn">Отслеживать</button>
            <button className="blue_btn">Повысить раздел</button>
          </div>
        </div>
        <div className="theme_top_desc">
          <p>Member 12 Дек 2023</p>
          <IconTop />
          <p>Рандомный тег, рандомный тег</p>
        </div>
      </div>
      <div className="main_block user_profile_mess">
        <div className="user_profile_mess_left theme_user_profile">
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>

          <div className="theme_user_profile_actions">
            <ShopAction1 />
            <ShopAction2 />
            <ShopAction3 />
          </div>
          <div className="user_link">
            <NavLink to="/user">
              <h2 className="theme_user_profile_username text_opacity_hover">
                Username
              </h2>
            </NavLink>
            <MiniUser />
          </div>

          <h3>Member</h3>
          <p className="blue_btn pref_btn">Префикс</p>
          <div className="theme_user_profile_desc">
            <div>
              <p>Сообщения:</p>
              <span>100</span>
            </div>
            <div>
              <p>Реакции:</p>
              <span>100</span>
            </div>
            <div>
              <p>Уровень</p>
              <span>100</span>
            </div>
            <div>
              <p>Депозит</p>
              <span>100</span>
            </div>
          </div>
        </div>
        <div className="user_profile_mess_right">
          <div className="user_profile_mess_right_top theme_block_top">
            <p>12 Дек 2023</p>
            <p>#1</p>
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
              nisl sagittis felis porta sed. Ipsum congue sagittis ornare nec
              nunc eget. Suscipit diam lectus tincidunt enim sed nisl ipsum id
              purus. Egestas ac porta ultrices tempor viverra dictum ut sed
              mollis. Morbi ultrices congue auctor et imperdiet cras erat leo.
              Pretium sapien sapien vitae phasellus elementum massa nibh enim.
              Vel purus lorem sed enim viverra. Pellentesque donec orci non in
              vestibulum suspendisse quam eget mauris. Cras purus facilisi
              blandit egestas. Iaculis amet nullam in magna aliquam. Sagittis
              luctus fusce eget tellus dui vel gravida ac. Nibh tempus diam mi
              tempus non. Quis accumsan risus tortor sit turpis a aliquam. Eget
              odio quis scelerisque at morbi imperdiet eget sed. Vestibulum sed
              porttitor pharetra nulla. Est nunc orci tortor turpis. Libero eget
              risus feugiat ullamcorper. Eleifend commodo purus mollis neque
              cursus nunc. Commodo tincidunt morbi eget tellus rhoncus sit
              mauris mauris nullam. Ut suspendisse in faucibus nec cursus quam
              nec tincidunt mus. Aenean tortor risus dignissim fermentum morbi
              eget sem. A pellentesque posuere ultrices urna placerat nec. Amet
              duis vitae diam ac ipsum pretium libero sed. Aenean tellus amet
              lorem augue scelerisque ac non sit sagittis. Massa risus eu risus
              et elit tellus sit tincidunt. Cursus eu diam pulvinar amet. Et
              elit bibendum vestibulum commodo suspendisse eget nulla morbi.
              Morbi lobortis sit aliquet molestie elementum volutpat massa. Cras
              feugiat odio nascetur quisque. Pellentesque sed enim a aliquet
              orci. Commodo donec aliquam hendrerit fusce nibh blandit posuere
              ac vitae. Nisl tellus consectetur mauris tellus integer commodo
              ultrices vitae maecenas. Mattis fusce vestibulum aliquet diam
              mauris vitae vehicula. A dignissim faucibus ultricies arcu nisi
              nullam cras. Varius ullamcorper viverra ultricies facilisi quis
              feugiat mi mi nunc. Lorem sed nec sed est. Eget id rhoncus
              tincidunt egestas venenatis. Id eu lobortis orci pellentesque
              volutpat cursus. Adipiscing senectus elit facilisi et condimentum
              volutpat. Duis egestas velit tincidunt tristique eget arcu. Lorem
              at faucibus ullamcorper urna et odio sed pellentesque. Commodo at
              est tristique eleifend ut tortor arcu facilisi. Quis nibh velit
              mus ac dictumst sit tellus blandit. Enim nisi mollis sit
              pellentesque porta velit nunc gravida amet. Sed suspendisse et
              dignissim quam massa arcu pharetra tempor egestas. Sed donec
              imperdiet tellus scelerisque suspendisse faucibus integer id. Nec
              adipiscing neque magna praesent nam posuere. Nisl egestas odio
              convallis a diam. Elit neque sed ac libero. Volutpat sed massa
              facilisis dignissim vulputate magna. Dictum eu sodales mauris
              elementum eget id eu. Eget integer tellus turpis egestas risus
              malesuada gravida. Magna mauris mattis morbi vestibulum quis
              convallis quis pellentesque in. Felis morbi dignissim faucibus
              eget sagittis facilisis ultricies aenean. Lectus tincidunt a
              habitasse urna massa blandit nulla non et. Ipsum nunc integer
              varius morbi convallis nisl vel vestibulum. Tristique risus neque
              pulvinar quam hendrerit fringilla. Nulla turpis habitant ultrices
              eget vulputate. Arcu aliquet et nisi tempor sit neque. Eu velit
              dui tortor id quis aliquet aliquam ut lorem. Enim elementum eu
              diam leo in facilisi eu. Nunc mauris porttitor est facilisis. Erat
              augue vitae hendrerit at enim tempus sit. Urna sed amet donec
              metus tempor id. Tellus sit vestibulum urna eget viverra mattis
              eget. Orci non in tortor eget pellentesque tempor. Lorem gravida
              magna potenti convallis lacus fames nulla cursus. Ac turpis
              volutpat id faucibus. Rhoncus est semper urna libero egestas
              rutrum rhoncus. Et feugiat adipiscing mauris adipiscing nisi sed
              blandit. Vel eu blandit interdum in quis sit. Sagittis a cras
              viverra sapien sed sed. Ultrices est in bibendum ullamcorper neque
              convallis et est morbi. Tortor at condimentum adipiscing ultrices
              nunc turpis tortor porta. Vestibulum id sit donec velit purus.
              Nisi condimentum nulla ipsum facilisis luctus enim et et risus.
              Massa cursus dictum bibendum massa convallis lectus magna. Mauris
              viverra in accumsan est semper adipiscing. Morbi id eu laoreet
              diam in. Platea scelerisque id tempus venenatis convallis odio
              morbi facilisis. Nunc ligula nec non sagittis tellus nisl eu.
              Congue dictum luctus elementum sagittis amet pretium a lobortis.
              Enim tristique feugiat quam tellus eget ut morbi. In eget aliquam
              viverra phasellus venenatis accumsan in. Urna risus suspendisse
              malesuada pellentesque aliquet fermentum facilisi at quam. Cras at
              nec tincidunt interdum habitant bibendum. Lectus nam scelerisque a
              egestas. At et ultricies sapien et dui fringilla nunc. Semper
              bibendum nulla consectetur pharetra aliquam risus elit odio eu.
              Libero bibendum amet arcu.
            </p>
          </div>
          <div className="theme_actions">
            <div className="user_profile_mess_actions">
              <p className="text_opacity_hover">Изменить </p>
              <p className="text_opacity_hover">Удалить</p>
            </div>
            <div className="theme_actions_right">
              <div className="text_opacity_hover">
                <LikeAc />
                <p>Нравится</p>
              </div>
              <div className="text_opacity_hover">
                <ReplyAc />
                <p>Ответить</p>
              </div>
            </div>
          </div>

          <div className="user_profile_mess_likes">
            <Like />{" "}
            <div className="user_link">
              <p>
                Понравилось <span>Member</span>, <span>Member</span>, и 322
                других
              </p>
              <MiniUser />
            </div>
          </div>
        </div>
      </div>
      <div className="main_block user_profile_mess">
        <div className="user_profile_mess_left theme_user_profile">
          <div className="user_link">
            <img src={ava} alt="" />
            <MiniUser />
          </div>

          <div className="theme_user_profile_actions">
            <ShopAction1 />
            <ShopAction2 />
            <ShopAction3 />
          </div>
          <div className="user_link">
            <NavLink to="/user">
              <h2 className="theme_user_profile_username text_opacity_hover">
                Username
              </h2>
            </NavLink>
            <MiniUser />
          </div>

          <h3>Member</h3>
          <p className="blue_btn pref_btn">Префикс</p>
          <div className="theme_user_profile_desc">
            <div>
              <p>Сообщения:</p>
              <span>100</span>
            </div>
            <div>
              <p>Реакции:</p>
              <span>100</span>
            </div>
            <div>
              <p>Уровень</p>
              <span>100</span>
            </div>
            <div>
              <p>Депозит</p>
              <span>100</span>
            </div>
          </div>
        </div>
        <div className="user_profile_mess_right">
          <div className="user_profile_mess_right_top theme_block_top">
            <p>12 Дек 2023</p>
            <p>#1</p>
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
              nisl sagittis felis porta sed. Ipsum congue sagittis ornare nec
              nunc eget. Suscipit diam lectus tincidunt enim sed nisl ipsum id
              purus. Egestas ac porta ultrices tempor viverra dictum ut sed
              mollis. Morbi ultrices congue auctor et imperdiet cras erat leo.
              Pretium sapien sapien vitae phasellus elementum massa nibh enim.
              Vel purus lorem sed enim viverra. Pellentesque donec orci non in
              vestibulum suspendisse quam eget mauris. Cras purus facilisi
              blandit egestas. Iaculis amet nullam in magna aliquam. Sagittis
              luctus fusce eget tellus dui vel gravida ac. Nibh tempus diam mi
              tempus non. Quis accumsan risus tortor sit turpis a aliquam. Eget
              odio quis scelerisque at morbi imperdiet eget sed. Vestibulum sed
              porttitor pharetra nulla. Est nunc orci tortor turpis. Libero eget
              risus feugiat ullamcorper. Eleifend commodo purus mollis neque
              cursus nunc. Commodo tincidunt morbi eget tellus rhoncus sit
              mauris mauris nullam.
            </p>
          </div>
          <div className="theme_actions">
            <div className="user_profile_mess_actions">
              <p className="text_opacity_hover">Изменить </p>
              <p className="text_opacity_hover">Удалить</p>
            </div>
            <div className="theme_actions_right">
              <div className="text_opacity_hover">
                <LikeAc />
                <p>Нравится</p>
              </div>
              <div className="text_opacity_hover">
                <ReplyAc />
                <p>Ответить</p>
              </div>
            </div>
          </div>

          <div className="user_profile_mess_likes">
            <Like />{" "}
            <div className="user_link">
              <p>
                Понравилось <span>Member</span>, <span>Member</span>, и 322
                других
              </p>
              <MiniUser />
            </div>
          </div>
        </div>
      </div>

      <div className="main_block user_mes_reply">
        <div className="user_link">
          <img src={ava} alt="" />
          <MiniUser />
        </div>
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
    </div>
  );
}

export default Theme;
