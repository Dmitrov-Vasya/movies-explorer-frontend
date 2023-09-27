import React, {useState} from 'react';
import "./Register.css";
import {Link} from "react-router-dom";


const Register = ({handleRegister}) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });


    function handleChange(e) {
        const {name, value} = e.target;
        setData((oldData) => ({...oldData, [name]: value}));
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
                           onChange={handleChange}
                           value={data.name}
                           minLength={2}
                           maxLength={50}
                    />
                </label>
                <span className="register__error"></span>
                <label className="register__label">
                    E-mail
                    <input className="register__input"
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
                <span className="register__error"></span>
                <label className="register__label">
                    Пароль
                    <input className="register__input"
                           placeholder="Password"
                           type="password"
                           required
                           onChange={handleChange}
                           name="password"
                           value={data.password}
                           minLength={8}
                           maxLength={20}/>
                </label>
                <span className="register__error"></span>
                <span className="register__server-error"></span>
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
