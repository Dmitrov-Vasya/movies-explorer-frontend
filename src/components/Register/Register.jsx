import React from 'react'
import "./Register.css";
import {Link} from "react-router-dom";


const Register = () => {

    return (
        <form className="register">
            <h2 className="register__title">Добро пожаловать!</h2>
            <label className="register__label">Имя
                <input className="register__input" type="text"/>
            </label>
            <hr className="register__line"></hr>
            <span className="register__error"></span>
            <label className="register__label">
                E-mail
                <input className="register__input" type="email"/>
            </label>
            <hr className="register__line"></hr>
            <span className="register__error"></span>
            <label className="register__label">
                Пароль
                <input className="register__input" type="password"/>
            </label>
            <hr className="register__line"></hr>
            <span className="register__error"></span>
            <span className="register__server-error"></span>
            <button className="register__button">Зарегистрироваться</button>
            <p className="register__subtitle">
                Уже зарегистрированы?&ensp;
                <Link to="/signin" className="register__link">
                    Войти
                </Link>
            </p>
        </form>
    );
};

export default Register;
