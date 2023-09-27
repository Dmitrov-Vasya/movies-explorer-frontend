import React, {useState} from 'react';
import "./Login.css";
import {Link} from "react-router-dom";


const Login = ({handleLogin}) => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setData((oldData) => ({...oldData, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin(data);
    }

    return (
        <main className="main">
            <form className="login"
                  action="#"
                  method="get"
                  name="signin"
                  onSubmit={handleSubmit}>
                <h2 className="login__greetings">Рады видеть!</h2>
                <label className="login__label">
                    E-mail
                    <input
                        className="login__input"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                        onChange={handleChange}
                        value={data.email}
                        minLength={2}
                        maxLength={50}
                    />
                </label>
                <span className="login__error login__error_active"></span>
                <label className="login__label">
                    Пароль
                    <input className="login__input"
                           type="password"
                           placeholder="Password"
                           name="password"
                           required
                           onChange={handleChange}
                           value={data.password}
                    />
                </label>
                <span className="login__error login__error_active"></span>
                <span className="login__server-error login__server-error_active"></span>
                <button className="login__button" type="submit">Войти</button>
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
