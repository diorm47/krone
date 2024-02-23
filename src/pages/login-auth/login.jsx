import React from "react";
import "./login-auth.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login_auth_page">
      <div className="login_auth_wrapper">
        <div className="login_logo">
          <Logo />
          <h2>Авторизация</h2>
        </div>
        <form>
          <div className="login_input">
            <input type="text" placeholder="Логин" />
          </div>

          <div className="login_input">
            <input type="password" placeholder="Пароль" />
            <div className="recovery_link">
              <p>Восстановить</p>
            </div>
          </div>

          <div className="login_input">
            <input type="text" placeholder="Введите капчу" />
          </div>
          <div className="login_btn">
            <button>Войти</button>
          </div>
          <div className="switch_auth">
            <p>
              Еще не зарегистрированы? <NavLink to="/auth">Регистрация</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
