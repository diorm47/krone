import React, { useRef, useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./login-auth.css";

function Reset() {
  const [modal, setModal] = useState(2);

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 6 - 1 && value !== "") {
      inputsRef.current[index + 1].focus();
    }

    // onChange(newOtp.join(""));
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="login_auth_page">
      {modal == 1 ? (
        <div className="login_auth_wrapper">
          <div className="login_logo">
            <Logo />
            <h2>Сброс пароля</h2>
          </div>
          <form>
            <div className="login_input">
              <input type="text" placeholder="Ваше имя пользователя" />
            </div>

            <div className="login_btn">
              <button onClick={() => setModal(2)}>Продолжить</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {modal == 2 ? (
        <div className="login_auth_wrapper">
          <div className="login_logo">
            <Logo />
            <h2>Введите код</h2>
          </div>
          <form>
            <div className="otp_wrapper">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="0"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(ref) => (inputsRef.current[index] = ref)}
                  style={{ width: "30px", marginRight: "10px" }}
                />
              ))}
            </div>

            <div className="login_btn">
              <button onClick={() => setModal(3)}>Продолжить</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {modal == 3 ? (
        <div className="login_auth_wrapper">
          <div className="login_logo">
            <Logo />
            <h2>Новый пароль</h2>
          </div>
          <form>
            <div className="recovery_pass_text">
              <p>Придумайте новый пароль <br /> для выхода в аккаунт</p>
            </div>
            <div className="login_input">
              <input type="password" placeholder="Новый пароль" />
            </div>
            <div className="login_input">
              <input type="password" placeholder="Повторите пароль" />
            </div>

            <div className="login_btn">
              <button onClick={() => setModal(2)}>Продолжить</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Reset;
