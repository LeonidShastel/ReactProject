import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div className="login-container">
      <nav className="login">
        <h2>Авторизация</h2>
        <p>Введите логин и пароль вашего аккаунт GitHub</p>
        <button onClick={() => props.authenticate()} className="github">
          Ввойти
        </button>
      </nav>
    </div>
  );
};

Login.propTypes = {
    authenticate: PropTypes.func.isRequired,
}

export default Login;
