import React from "react";
import "./home-page.css";
import Carousel from "../../components/carousel/carousel";
import avatar from "../../assets/images/profile.png";

import { ReactComponent as Send } from "../../assets/icons/send.svg";
import { ReactComponent as Bitcoin } from "../../assets/icons/bitcoin.svg";
import { ReactComponent as Euro } from "../../assets/icons/euro.svg";
import { ReactComponent as USD } from "../../assets/icons/usd.svg";
import { ReactComponent as Rub } from "../../assets/icons/rub.svg";
import { ReactComponent as BlockChat } from "../../assets/icons/block-chat.svg";
import Switch from "../../components/switch/switch";
import Footer from "../../components/footer/footer";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="home_page">
      <div className="home_top_block">
        <Carousel />
      </div>
      <div className="hompe_page_content container">
        <div className="hompe_page_left">
          <div className="forum_chat_wrapper">
            <div className="forum_chat_title">
              <p>FORUM CHAT</p> <div className="forum_chat_line"></div>{" "}
              <i>
                <span>Правила чата</span>
              </i>
            </div>

            <div className="forum_chat">
              <div className="forum_chat_messages">
                <div className="forum_chat_user">
                  <div className="user_link">
                    <img src={avatar} alt="" />
                    <div className="user_modal">
                      <div className="user_modal_left">
                        <img src={avatar} alt="" />
                        <p>
                          Сообщения: <br />
                          <b> 12</b>
                        </p>
                      </div>
                      <div className="user_modal_right">
                        <h2>Username</h2>
                        <p>Регистрация: 2 авг 2023</p>
                        <p>Активностть: 9 сен 2023</p>
                        <div className="user_modal_ignore">
                          <svg
                            width="67"
                            height="35"
                            viewBox="0 0 67 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="6"
                              width="60"
                              height="29"
                              rx="5"
                              fill="#2F74FA"
                            />
                            <path
                              d="M7.47949 14.292H8.64404V20.481C8.64404 20.7153 8.6416 20.9717 8.63672 21.25C8.63184 21.5234 8.62451 21.792 8.61475 22.0557C8.60498 22.3193 8.59277 22.5586 8.57812 22.7734C8.56836 22.9883 8.55859 23.1543 8.54883 23.2715H8.60742L14.5693 14.292H15.939V25H14.7744V18.8843C14.7744 18.6255 14.7793 18.3521 14.7891 18.064C14.7988 17.771 14.8086 17.4878 14.8184 17.2144C14.833 16.9409 14.8477 16.6968 14.8623 16.4819C14.877 16.2622 14.8867 16.0938 14.8916 15.9766H14.8257L8.85645 25H7.47949V14.292ZM23.5488 16.9727V18.0054H19.9014V25H18.6782V16.9727H23.5488ZM26.376 16.9727V20.3418H30.8511V16.9727H32.0669V25H30.8511V21.3745H26.376V25H25.1528V16.9727H26.376ZM41.5664 20.9717C41.5664 21.6309 41.481 22.2192 41.3101 22.7368C41.1392 23.2544 40.8926 23.6914 40.5703 24.0479C40.248 24.4043 39.8574 24.6777 39.3984 24.8682C38.9443 25.0537 38.4292 25.1465 37.853 25.1465C37.3159 25.1465 36.8228 25.0537 36.3735 24.8682C35.9292 24.6777 35.5435 24.4043 35.2163 24.0479C34.894 23.6914 34.6426 23.2544 34.4619 22.7368C34.2861 22.2192 34.1982 21.6309 34.1982 20.9717C34.1982 20.0928 34.3472 19.3457 34.645 18.7305C34.9429 18.1104 35.3677 17.6392 35.9194 17.3169C36.4761 16.9897 37.1377 16.8262 37.9043 16.8262C38.6367 16.8262 39.2764 16.9897 39.8232 17.3169C40.375 17.644 40.8022 18.1177 41.105 18.7378C41.4126 19.353 41.5664 20.0977 41.5664 20.9717ZM35.458 20.9717C35.458 21.6162 35.5435 22.1753 35.7144 22.6489C35.8853 23.1226 36.1489 23.4888 36.5054 23.7476C36.8618 24.0063 37.3208 24.1357 37.8823 24.1357C38.439 24.1357 38.8955 24.0063 39.252 23.7476C39.6133 23.4888 39.8794 23.1226 40.0503 22.6489C40.2212 22.1753 40.3066 21.6162 40.3066 20.9717C40.3066 20.332 40.2212 19.7803 40.0503 19.3164C39.8794 18.8477 39.6157 18.4863 39.2593 18.2324C38.9028 17.9785 38.4414 17.8516 37.875 17.8516C37.04 17.8516 36.4272 18.1274 36.0366 18.6792C35.6509 19.231 35.458 19.9951 35.458 20.9717ZM47.4404 16.8262C48.4414 16.8262 49.2397 17.1704 49.8354 17.8589C50.4312 18.5474 50.729 19.5825 50.729 20.9644C50.729 21.8774 50.5923 22.644 50.3188 23.2642C50.0454 23.8843 49.6597 24.353 49.1616 24.6704C48.6685 24.9878 48.085 25.1465 47.4111 25.1465C46.9863 25.1465 46.6128 25.0903 46.2905 24.978C45.9683 24.8657 45.6924 24.7144 45.4629 24.5239C45.2334 24.3335 45.043 24.126 44.8916 23.9014H44.8037C44.8184 24.0918 44.8354 24.3213 44.855 24.5898C44.8794 24.8584 44.8916 25.0928 44.8916 25.293V28.5889H43.6685V16.9727H44.6719L44.833 18.1592H44.8916C45.0479 17.915 45.2383 17.6929 45.4629 17.4927C45.6875 17.2876 45.9609 17.1265 46.2832 17.0093C46.6104 16.8872 46.9961 16.8262 47.4404 16.8262ZM47.228 17.8516C46.6714 17.8516 46.2222 17.959 45.8804 18.1738C45.5435 18.3887 45.2969 18.7109 45.1406 19.1406C44.9844 19.5654 44.9014 20.1001 44.8916 20.7446V20.979C44.8916 21.6577 44.9648 22.2314 45.1113 22.7002C45.2627 23.1689 45.5093 23.5254 45.8511 23.7695C46.1978 24.0137 46.6616 24.1357 47.2427 24.1357C47.7407 24.1357 48.1558 24.0015 48.4878 23.7329C48.8198 23.4644 49.0664 23.0908 49.2275 22.6123C49.3936 22.1289 49.4766 21.5747 49.4766 20.9497C49.4766 20.0024 49.291 19.2505 48.9199 18.6938C48.5537 18.1323 47.9897 17.8516 47.228 17.8516Z"
                              fill="white"
                            />
                            <circle
                              cx="58"
                              cy="9"
                              r="8.68966"
                              fill="white"
                              stroke="#2F74FA"
                              stroke-width="0.62069"
                            />
                            <path
                              d="M58.4293 8.89152H60.3023V9.50978H58.4293V11.4373H57.8065V9.50978H55.9335V8.89152H57.8065V6.95489H58.4293V8.89152Z"
                              fill="#2F74FA"
                            />
                          </svg>
                        </div>
                        <div className="user_modal_btns">
                          <button>Подписаться</button>
                          <button>Начать переписку</button>
                        </div>
                      </div>
                      <div className="user_modal_line"></div>
                    </div>
                  </div>
                  <div className="forum_chat_user_message">
                    <p>
                      <b>Mark:</b> Всем привет, я новенький!
                    </p>
                  </div>
                </div>
                <div className="forum_chat_user">
                  <div className="user_link">
                    <img src={avatar} alt="" />
                    <div className="user_modal">
                      <div className="user_modal_left">
                        <img src={avatar} alt="" />
                        <p>
                          Сообщения: <br />
                          <b> 12</b>
                        </p>
                      </div>
                      <div className="user_modal_right">
                        <h2>Username</h2>
                        <p>Регистрация: 2 авг 2023</p>
                        <p>Активностть: 9 сен 2023</p>
                        <div className="user_modal_ignore">
                          <svg
                            width="67"
                            height="35"
                            viewBox="0 0 67 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="6"
                              width="60"
                              height="29"
                              rx="5"
                              fill="#2F74FA"
                            />
                            <path
                              d="M7.47949 14.292H8.64404V20.481C8.64404 20.7153 8.6416 20.9717 8.63672 21.25C8.63184 21.5234 8.62451 21.792 8.61475 22.0557C8.60498 22.3193 8.59277 22.5586 8.57812 22.7734C8.56836 22.9883 8.55859 23.1543 8.54883 23.2715H8.60742L14.5693 14.292H15.939V25H14.7744V18.8843C14.7744 18.6255 14.7793 18.3521 14.7891 18.064C14.7988 17.771 14.8086 17.4878 14.8184 17.2144C14.833 16.9409 14.8477 16.6968 14.8623 16.4819C14.877 16.2622 14.8867 16.0938 14.8916 15.9766H14.8257L8.85645 25H7.47949V14.292ZM23.5488 16.9727V18.0054H19.9014V25H18.6782V16.9727H23.5488ZM26.376 16.9727V20.3418H30.8511V16.9727H32.0669V25H30.8511V21.3745H26.376V25H25.1528V16.9727H26.376ZM41.5664 20.9717C41.5664 21.6309 41.481 22.2192 41.3101 22.7368C41.1392 23.2544 40.8926 23.6914 40.5703 24.0479C40.248 24.4043 39.8574 24.6777 39.3984 24.8682C38.9443 25.0537 38.4292 25.1465 37.853 25.1465C37.3159 25.1465 36.8228 25.0537 36.3735 24.8682C35.9292 24.6777 35.5435 24.4043 35.2163 24.0479C34.894 23.6914 34.6426 23.2544 34.4619 22.7368C34.2861 22.2192 34.1982 21.6309 34.1982 20.9717C34.1982 20.0928 34.3472 19.3457 34.645 18.7305C34.9429 18.1104 35.3677 17.6392 35.9194 17.3169C36.4761 16.9897 37.1377 16.8262 37.9043 16.8262C38.6367 16.8262 39.2764 16.9897 39.8232 17.3169C40.375 17.644 40.8022 18.1177 41.105 18.7378C41.4126 19.353 41.5664 20.0977 41.5664 20.9717ZM35.458 20.9717C35.458 21.6162 35.5435 22.1753 35.7144 22.6489C35.8853 23.1226 36.1489 23.4888 36.5054 23.7476C36.8618 24.0063 37.3208 24.1357 37.8823 24.1357C38.439 24.1357 38.8955 24.0063 39.252 23.7476C39.6133 23.4888 39.8794 23.1226 40.0503 22.6489C40.2212 22.1753 40.3066 21.6162 40.3066 20.9717C40.3066 20.332 40.2212 19.7803 40.0503 19.3164C39.8794 18.8477 39.6157 18.4863 39.2593 18.2324C38.9028 17.9785 38.4414 17.8516 37.875 17.8516C37.04 17.8516 36.4272 18.1274 36.0366 18.6792C35.6509 19.231 35.458 19.9951 35.458 20.9717ZM47.4404 16.8262C48.4414 16.8262 49.2397 17.1704 49.8354 17.8589C50.4312 18.5474 50.729 19.5825 50.729 20.9644C50.729 21.8774 50.5923 22.644 50.3188 23.2642C50.0454 23.8843 49.6597 24.353 49.1616 24.6704C48.6685 24.9878 48.085 25.1465 47.4111 25.1465C46.9863 25.1465 46.6128 25.0903 46.2905 24.978C45.9683 24.8657 45.6924 24.7144 45.4629 24.5239C45.2334 24.3335 45.043 24.126 44.8916 23.9014H44.8037C44.8184 24.0918 44.8354 24.3213 44.855 24.5898C44.8794 24.8584 44.8916 25.0928 44.8916 25.293V28.5889H43.6685V16.9727H44.6719L44.833 18.1592H44.8916C45.0479 17.915 45.2383 17.6929 45.4629 17.4927C45.6875 17.2876 45.9609 17.1265 46.2832 17.0093C46.6104 16.8872 46.9961 16.8262 47.4404 16.8262ZM47.228 17.8516C46.6714 17.8516 46.2222 17.959 45.8804 18.1738C45.5435 18.3887 45.2969 18.7109 45.1406 19.1406C44.9844 19.5654 44.9014 20.1001 44.8916 20.7446V20.979C44.8916 21.6577 44.9648 22.2314 45.1113 22.7002C45.2627 23.1689 45.5093 23.5254 45.8511 23.7695C46.1978 24.0137 46.6616 24.1357 47.2427 24.1357C47.7407 24.1357 48.1558 24.0015 48.4878 23.7329C48.8198 23.4644 49.0664 23.0908 49.2275 22.6123C49.3936 22.1289 49.4766 21.5747 49.4766 20.9497C49.4766 20.0024 49.291 19.2505 48.9199 18.6938C48.5537 18.1323 47.9897 17.8516 47.228 17.8516Z"
                              fill="white"
                            />
                            <circle
                              cx="58"
                              cy="9"
                              r="8.68966"
                              fill="white"
                              stroke="#2F74FA"
                              stroke-width="0.62069"
                            />
                            <path
                              d="M58.4293 8.89152H60.3023V9.50978H58.4293V11.4373H57.8065V9.50978H55.9335V8.89152H57.8065V6.95489H58.4293V8.89152Z"
                              fill="#2F74FA"
                            />
                          </svg>
                        </div>
                        <div className="user_modal_btns">
                          <button>Подписаться</button>
                          <button>Начать переписку</button>
                        </div>
                      </div>
                      <div className="user_modal_line"></div>
                    </div>
                  </div>
                  <div className="forum_chat_user_message">
                    <p>
                      <b>Vik:</b> Привет и Вам. Какой сегодня день? :)
                    </p>
                  </div>
                </div>
                <div className="forum_chat_me">
                  <div className="forum_chat_my_message">
                    <p>Привет и Вам. Какой сегодня день? :)</p>
                  </div>
                </div>
                <div className="forum_chat_user">
                  <div className="user_link">
                    <img src={avatar} alt="" />
                    <div className="user_modal">
                      <div className="user_modal_left">
                        <img src={avatar} alt="" />
                        <p>
                          Сообщения: <br />
                          <b> 12</b>
                        </p>
                      </div>
                      <div className="user_modal_right">
                        <h2>Username</h2>
                        <p>Регистрация: 2 авг 2023</p>
                        <p>Активностть: 9 сен 2023</p>
                        <div className="user_modal_ignore">
                          <svg
                            width="67"
                            height="35"
                            viewBox="0 0 67 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="6"
                              width="60"
                              height="29"
                              rx="5"
                              fill="#2F74FA"
                            />
                            <path
                              d="M7.47949 14.292H8.64404V20.481C8.64404 20.7153 8.6416 20.9717 8.63672 21.25C8.63184 21.5234 8.62451 21.792 8.61475 22.0557C8.60498 22.3193 8.59277 22.5586 8.57812 22.7734C8.56836 22.9883 8.55859 23.1543 8.54883 23.2715H8.60742L14.5693 14.292H15.939V25H14.7744V18.8843C14.7744 18.6255 14.7793 18.3521 14.7891 18.064C14.7988 17.771 14.8086 17.4878 14.8184 17.2144C14.833 16.9409 14.8477 16.6968 14.8623 16.4819C14.877 16.2622 14.8867 16.0938 14.8916 15.9766H14.8257L8.85645 25H7.47949V14.292ZM23.5488 16.9727V18.0054H19.9014V25H18.6782V16.9727H23.5488ZM26.376 16.9727V20.3418H30.8511V16.9727H32.0669V25H30.8511V21.3745H26.376V25H25.1528V16.9727H26.376ZM41.5664 20.9717C41.5664 21.6309 41.481 22.2192 41.3101 22.7368C41.1392 23.2544 40.8926 23.6914 40.5703 24.0479C40.248 24.4043 39.8574 24.6777 39.3984 24.8682C38.9443 25.0537 38.4292 25.1465 37.853 25.1465C37.3159 25.1465 36.8228 25.0537 36.3735 24.8682C35.9292 24.6777 35.5435 24.4043 35.2163 24.0479C34.894 23.6914 34.6426 23.2544 34.4619 22.7368C34.2861 22.2192 34.1982 21.6309 34.1982 20.9717C34.1982 20.0928 34.3472 19.3457 34.645 18.7305C34.9429 18.1104 35.3677 17.6392 35.9194 17.3169C36.4761 16.9897 37.1377 16.8262 37.9043 16.8262C38.6367 16.8262 39.2764 16.9897 39.8232 17.3169C40.375 17.644 40.8022 18.1177 41.105 18.7378C41.4126 19.353 41.5664 20.0977 41.5664 20.9717ZM35.458 20.9717C35.458 21.6162 35.5435 22.1753 35.7144 22.6489C35.8853 23.1226 36.1489 23.4888 36.5054 23.7476C36.8618 24.0063 37.3208 24.1357 37.8823 24.1357C38.439 24.1357 38.8955 24.0063 39.252 23.7476C39.6133 23.4888 39.8794 23.1226 40.0503 22.6489C40.2212 22.1753 40.3066 21.6162 40.3066 20.9717C40.3066 20.332 40.2212 19.7803 40.0503 19.3164C39.8794 18.8477 39.6157 18.4863 39.2593 18.2324C38.9028 17.9785 38.4414 17.8516 37.875 17.8516C37.04 17.8516 36.4272 18.1274 36.0366 18.6792C35.6509 19.231 35.458 19.9951 35.458 20.9717ZM47.4404 16.8262C48.4414 16.8262 49.2397 17.1704 49.8354 17.8589C50.4312 18.5474 50.729 19.5825 50.729 20.9644C50.729 21.8774 50.5923 22.644 50.3188 23.2642C50.0454 23.8843 49.6597 24.353 49.1616 24.6704C48.6685 24.9878 48.085 25.1465 47.4111 25.1465C46.9863 25.1465 46.6128 25.0903 46.2905 24.978C45.9683 24.8657 45.6924 24.7144 45.4629 24.5239C45.2334 24.3335 45.043 24.126 44.8916 23.9014H44.8037C44.8184 24.0918 44.8354 24.3213 44.855 24.5898C44.8794 24.8584 44.8916 25.0928 44.8916 25.293V28.5889H43.6685V16.9727H44.6719L44.833 18.1592H44.8916C45.0479 17.915 45.2383 17.6929 45.4629 17.4927C45.6875 17.2876 45.9609 17.1265 46.2832 17.0093C46.6104 16.8872 46.9961 16.8262 47.4404 16.8262ZM47.228 17.8516C46.6714 17.8516 46.2222 17.959 45.8804 18.1738C45.5435 18.3887 45.2969 18.7109 45.1406 19.1406C44.9844 19.5654 44.9014 20.1001 44.8916 20.7446V20.979C44.8916 21.6577 44.9648 22.2314 45.1113 22.7002C45.2627 23.1689 45.5093 23.5254 45.8511 23.7695C46.1978 24.0137 46.6616 24.1357 47.2427 24.1357C47.7407 24.1357 48.1558 24.0015 48.4878 23.7329C48.8198 23.4644 49.0664 23.0908 49.2275 22.6123C49.3936 22.1289 49.4766 21.5747 49.4766 20.9497C49.4766 20.0024 49.291 19.2505 48.9199 18.6938C48.5537 18.1323 47.9897 17.8516 47.228 17.8516Z"
                              fill="white"
                            />
                            <circle
                              cx="58"
                              cy="9"
                              r="8.68966"
                              fill="white"
                              stroke="#2F74FA"
                              stroke-width="0.62069"
                            />
                            <path
                              d="M58.4293 8.89152H60.3023V9.50978H58.4293V11.4373H57.8065V9.50978H55.9335V8.89152H57.8065V6.95489H58.4293V8.89152Z"
                              fill="#2F74FA"
                            />
                          </svg>
                        </div>
                        <div className="user_modal_btns">
                          <button>Подписаться</button>
                          <button>Начать переписку</button>
                        </div>
                      </div>
                      <div className="user_modal_line"></div>
                    </div>
                  </div>
                  <div className="forum_chat_user_message">
                    <p>
                      <b>Ольга:</b> Всем привет, у вас тут очень весело,
                      атмосферно!
                    </p>
                  </div>
                </div>
              </div>
              <div className="forum_chat_type">
                <input type="text" placeholder="Напишите ваше сообщение..." />
                <button>
                  <Send />
                </button>
              </div>
            </div>
          </div>
          <div className="main_block">
            <div className="main_block_title">
              <p>Название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch open={true} />
              </div>
            </div>
            <div className="themes_block">
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <p>Название темы, для примера оно будет длинное ...</p>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <p>Название темы, для примера оно будет длинное ...</p>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <p>Название темы, для примера оно будет длинное ...</p>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_block empty_main_block">
            <div className="main_block_title">
              <p>Эксперементальное название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch />
              </div>
            </div>
          </div>
          <div className="main_block">
            <div className="main_block_title">
              <p>Название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch open={true} />
              </div>
            </div>
            <div className="themes_block">
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <p>Название темы, для примера оно будет длинное ...</p>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <p>Название темы, для примера оно будет длинное ...</p>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="themes_block_item">
                <div className="themes_block_item_left">
                  <BlockChat />
                  <p>Название темы, для примера оно будет длинное ...</p>
                </div>
                <div className="themes_block_item_center">
                  <div>
                    <span>Темы</span>
                    <p>12</p>
                  </div>
                  <div>
                    <span>Сообщения</span>
                    <p>1.2К</p>
                  </div>
                </div>
                <div className="themes_block_item_right">
                  <div className="themes_block_item_right_title">
                    <p>Последняя размещенная тема</p>
                  </div>
                  <div className="themes_block_item_right_time">
                    <p>
                      28 мин. назад - <span>Nickname</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_block empty_main_block">
            <div className="main_block_title">
              <p>Эксперементальное название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch />
              </div>
            </div>
          </div>
          <div className="main_block empty_main_block">
            <div className="main_block_title">
              <p>Эксперементальное название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch />
              </div>
            </div>
          </div>
          <div className="main_block empty_main_block">
            <div className="main_block_title">
              <p>Эксперементальное название раздела</p>
              <div className="show_hide_block">
                <p>Свернуть раздел</p>
                <Switch />
              </div>
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
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Администратор</span>
                </div>
              </div>
              <div className="online_command_item">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Администратор</span>
                </div>
              </div>
              <div className="online_command_item">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>Администратор</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hompe_page_right_carousel">
            <Carousel />
          </div>
          <div className="main_block">
            <div className="main_block_secondary_title">
              <p>Конвертер валют</p>
            </div>
            <div className="currency_conv">
              <div className="currency_conv_item">
                <div className="currency_conv_item_name">
                  <Bitcoin />
                  <span>Bitcoin</span>
                </div>

                <div className="currency_conv_item_valu">
                  <p>1</p>
                </div>
              </div>
              <div className="currency_conv_item">
                <div className="currency_conv_item_name">
                  <Euro />
                  <span>EURO</span>
                </div>

                <div className="currency_conv_item_valu">
                  <p>9123.9123</p>
                </div>
              </div>
              <div className="currency_conv_item">
                <div className="currency_conv_item_name">
                  <USD />
                  <span>USD</span>
                </div>

                <div className="currency_conv_item_valu">
                  <p>2193.1293</p>
                </div>
              </div>
              <div className="currency_conv_item">
                <div className="currency_conv_item_name">
                  <Rub />
                  <span>RUB</span>
                </div>
                <div className="currency_conv_item_valu">
                  <p>2193.1293</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_block">
            <div className="main_block_secondary_title">
              <p>Сообщения профилей</p>
            </div>
            <div className="online_command profile_messages">
              <div className="online_command_item">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>
                    Сообщения из профиля участника сайта, которое будет здесь
                    отображаться
                  </span>
                </div>
              </div>
              <div className="online_command_item">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>
                    Сообщения из профиля участника сайта, которое будет здесь
                    отображаться
                  </span>
                </div>
              </div>
              <div className="online_command_item">
                <img src={avatar} alt="" />
                <div>
                  <p>Vik</p>
                  <span>
                    Сообщения из профиля участника сайта, которое будет здесь
                    отображаться
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
