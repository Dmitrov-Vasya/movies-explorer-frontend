import React, {useState} from 'react';
import "./Login.css";
import {Link} from "react-router-dom";


const Login = ({handleLogin}) => {
    const [password, setValuePassword] = useState('')
    const [email, setValueEmail] = useState('');
    const [emailDirty, setValueEmailDirty] = useState(false);
    const [passwordDirty, setValuePasswordDirty] = useState(false);
    const [emailError, setValueEmailError] = useState('Нужно указать email')
    const [passwordError, setValuePasswordError] = useState('Нужно указать password');

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    function handleChangePassword(e) {
        setValuePassword(e.target.value);
        let error = '';
        if (!e.target.value)
            error = 'Нужно указать пароль';
        else if (e.target.value.length < 7) {
            error = 'Пароль должеть быть 7 и более символов';
        } else {
            error = '';
        }
        setValuePasswordError(error);

        if (error === '') {
            const {name, value} = e.target;
            setData((oldData) => ({...oldData, [name]: value}));
        }
    }

    function handleChangeEmail(e) {
        setValueEmail(e.target.value);
        let error = '';
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!e.target.value)
            error = 'Нужно указать пароль';
        else if (!re.test(String(e.target.value).toLowerCase())) {
            error = 'Некорректный email';
        } else {
            error = '';
        }
        console.log("email", error)
        setValueEmailError(error);

        if (error === '') {
            const {name, value} = e.target;
            setData((oldData) => ({...oldData, [name]: value}));
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setValueEmailDirty(true)
                break
            case 'password':
                setValuePasswordDirty(true)
                break
            default:
                break
        }
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
                        onChange={handleChangeEmail}
                        value={email}
                        minLength={2}
                        maxLength={50}
                        onBlur={e => blurHandler(e)}
                    />
                </label>
                {(emailDirty && emailError) && <span className="login__error">{emailError}</span>}
                <label className="login__label">
                    Пароль
                    <input className={`login__input ${passwordError ? 'login__error-input' : ''}`}
                           type="password"
                           placeholder="Password"
                           name="password"
                           required
                           onChange={handleChangePassword}
                           value={password}
                           onBlur={e => blurHandler(e)}
                    />
                </label>
                {(passwordDirty && passwordError) && <span className="login__error">{passwordError}</span>}
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
