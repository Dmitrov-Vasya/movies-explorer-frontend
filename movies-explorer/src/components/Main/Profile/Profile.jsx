import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';

const Profile = ({setLoggedIn}) => {

    const handleLogout = () => {
        setLoggedIn(false);
    }

    return (
        <>
            <section className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <form className="profile__form" noValidate>
                    <div className="profile__input-wrapper">
                        <label htmlFor="name" className="profile__input-label">
                            Имя
                        </label>
                        <input
                            className="profile__input"
                            name="name"
                            id="name"
                            autoComplete="off"
                            type="name"
                            minLength="2"
                            maxLength="70"
                            defaultValue={'Виталий' || ''}
                            required
                        />
                    </div>
                    <span className="profile__input-error">Какая-то ошибка...</span>

                    <div className="profile__input-wrapper">
                        <label htmlFor="email" className="profile__input-label">
                            E-mail
                        </label>
                        <input
                            className="profile__input"
                            name="email"
                            id="email"
                            autoComplete="off"
                            type="email"
                            minLength="2"
                            maxLength="40"
                            defaultValue={'test@mail.ru' || ''}
                            required
                        />
                    </div>
                    <span className="profile__input-error">Какая-то ошибка...</span>
                </form>

                <p className="profile__edit-button">Редактировать</p>
                <Link to="/signin" className="profile__exit-button" onClick={handleLogout}>
                    Выйти из аккаунта
                </Link>
            </section>
        </>
    );
};

export default Profile;

