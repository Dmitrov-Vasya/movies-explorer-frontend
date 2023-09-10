import React from 'react'
import "./Login.css";
import {Link} from "react-router-dom";

const Login = ({setLoggedIn}) => {

    const handleSubmit = () => {
        setLoggedIn(true);
    }

    return (
        <main className="main">
        <form className="login" onSubmit={handleSubmit}>
            <h2 className="login__greetings">Рады видеть!</h2>
            <label className="login__label">
                E-mail
                <input
                    className="login__input"
                    type="email"
                />
            </label>
            <hr className="login__line"></hr>
            <span className="login__error login__error_active"></span>
            <label className="login__label">
                Пароль
                <input className="login__input" type="password"/>
            </label>
            <hr className="login__line"></hr>
            <span className="login__error login__error_active"> </span>

            <span className="login__server-error login__server-error_active"></span>
            <button className='login__button' type="submit">
                Войти
            </button>
            <p className="login__subtitle">
                Еще не зарегистрированы?&ensp;
                 <Link to="/signup" className="login__link">
                    Регистрация
                </Link>
            </p>
        </form>
        </main>
    );
};

export default Login;
