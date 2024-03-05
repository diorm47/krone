import React from "react";
import "./login-auth.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

function Auth() {
  return (
    <div className="login_auth_page">
      <div className="login_auth_wrapper">
        <div className="login_logo">
          <Logo />
          <h2>Регистрация</h2>
        </div>
        <form>
          <div className="login_input">
            <input type="text" placeholder="Логин" />
          </div>
          <div className="login_input">
            <input type="text" placeholder="Отображаемое имя" />
          </div>
          <div className="login_input">
            <input type="password" placeholder="Пароль" />
          </div>
          <div className="login_input">
            <input type="password" placeholder="Повторите пароль" />
          </div>
          <div className="login_input">
            <input type="text" placeholder="Введите капчу" />
          </div>
          <div className="login_btn">
             <button className="blue_btn">Регистрация</button>
          </div>
          <div className="switch_auth">
            <p>Уже зарегистрированы? <NavLink to='/login'>Вход</NavLink></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
