import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {CurrentUserContext} from "../../../contexts/CurrentUserContext"
import './Profile.css';

const Profile = ({user, onSignout, onUpdateUser}) => {
    const currentUser = useContext(CurrentUserContext);
    const [name, setValueName] = useState('');
    const [email, setValueEmail] = useState('');

    useEffect(() => {
        setValueName(currentUser.name);
        setValueEmail(currentUser.email);
    }, [currentUser]);

    function handleChangeName(e) {
        setValueName(e.target.value);
    }

    function handleChangeEmail(e) {
        setValueEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: name,
            email: email,
        });
    }

    const handleLogout = () => {
        onSignout();
    }

    return (
        <>
            <main className="profile">
                <h2 className="profile__title">Привет, {user.name}!</h2>
                <form className="profile__form" onSubmit={handleSubmit} noValidate>
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
                            defaultValue={name}
                            required
                            onChange={handleChangeName}
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
                            defaultValue={email}
                            required
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <span className="profile__input-error">Какая-то ошибка...</span>
                    <div className="profile__button-wrapper">
                        <button className="profile__edit-button" type="submit" onSubmit={handleSubmit}>Редактировать
                        </button>
                        <Link to="/signin" className="profile__exit-button" onClick={handleLogout}>
                            Выйти из аккаунта
                        </Link>
                    </div>
                </form>

            </main>
        </>
    );
};

export default Profile;

