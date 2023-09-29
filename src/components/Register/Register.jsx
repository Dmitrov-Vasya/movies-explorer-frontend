import React, {useState} from 'react';
import "./Register.css";
import {Link} from "react-router-dom";


const Register = ({handleRegister}) => {
    const [name, setValueName] = useState('');
    const [email, setValueEmail] = useState('');
    const [password, setValuePassword] = useState('')
    const [nameDirty, setValueNameDirty] = useState(false);
    const [emailDirty, setValueEmailDirty] = useState(false);
    const [passwordDirty, setValuePasswordDirty] = useState(false);
    const [nameError, setValueNameError] = useState('Нужно указать имя')
    const [emailError, setValueEmailError] = useState('Нужно указать email')
    const [passwordError, setValuePasswordError] = useState('Нужно указать password');


    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    function handleChangeName(e) {
        setValueName(e.target.value);
        let error = '';
        if (!e.target.value)
            error = 'Нужно указать имя';
        else if (e.target.value.length < 1) {
            error = 'Имя должно быть более 1 символа';
        } else {
            error = '';
        }
        setValueNameError(error);

        if (error === '') {
            const {name, value} = e.target;
            setData((oldData) => ({...oldData, [name]: value}));
        }
    }
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
            error ='Некорректный email';
        } else {
            error = '';
        }
        setValueEmailError(error);

        if (error === '') {
            const {name, value} = e.target;
            setData((oldData) => ({...oldData, [name]: value}));
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setValueNameDirty(true)
                break
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
        handleRegister(data);

    }

    return (
        <main className='main'>
            <form className="register"
                  name="signup"
                  action="#"
                  method="get"
                  onSubmit={handleSubmit}>
                <h2 className="register__title">Добро пожаловать!</h2>
                <label className="register__label">
                    Имя
                    <input className="register__input"
                           name="name"
                           placeholder="Name"
                           type="text"
                           required
                           onChange={handleChangeName}
                           value={name}
                           minLength={2}
                           maxLength={50}
                           onBlur={e => blurHandler(e)}
                    />
                </label>
                {(nameDirty && nameError) && <span className="register__error">{nameError}</span>}
                <label className="register__label">
                    E-mail
                    <input className="register__input"
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
                {(emailDirty && emailError) && <span className="register__error">{emailError}</span>}

                <label className="register__label">
                    Пароль
                    <input className="register__input"
                           placeholder="Password"
                           type="password"
                           required
                           onChange={handleChangePassword}
                           name="password"
                           value={password}
                           minLength={8}
                           maxLength={20}
                           onBlur={e => blurHandler(e)}
                    />
                </label>
                {(passwordDirty && passwordError) && <span className="register__error">{passwordError}</span>}

                <button className="register__button" type="submit" onSubmit={handleSubmit}>Зарегистрироваться</button>
                <p className="register__subtitle">
                    Уже зарегистрированы?&ensp;
                    <Link to="/signin" className="register__link">
                        Войти
                    </Link>
                </p>
            </form>
        </main>
    );
};

export default Register;
