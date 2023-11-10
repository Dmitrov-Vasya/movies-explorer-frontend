import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {CurrentUserContext} from "../../../contexts/CurrentUserContext"
import './Profile.css';

const Profile = ({user, onSignout, onUpdateUser}) => {
    const currentUser = useContext(CurrentUserContext);
    const [name, setValueName] = useState('');
    const [email, setValueEmail] = useState('');
    const [nameDirty, setValueNameDirty] = useState(false);
    const [emailDirty, setValueEmailDirty] = useState(false);
    const [nameError, setValueNameError] = useState('')
    const [emailError, setValueEmailError] = useState('')


    function handleChangeName(e) {
        setValueName(e.target.value);
        if (e.target.value.length < 2) {
            setValueNameError('Имя должно быть длинее 1 знака')
            if (!e.target.value) {
                setValueNameError('Нужно указать имя')
            }
        } else setValueNameError('')
    }

    function handleChangeEmail(e) {
        setValueEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setValueEmailError('Некорректный email')
        } else {
            setValueEmailError('')
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
            default:
                break
        }
    }
    const hintEdit = () => {
        alert('Вы успешно изменили данные')
    }
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: name,
            email: email,
        });
        hintEdit();
    }

    const handleLogout = () => {
        onSignout();
    }

    useEffect(() => {
        setValueName(currentUser.name);
        setValueEmail(currentUser.email);
    }, [currentUser]);

    useEffect(() => {
        console.log("errors", emailError, nameError)
    }, [emailError, nameError]);

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
                            onBlur={e => blurHandler(e)}
                            onChange={handleChangeName}
                        />
                    </div>
                    {(nameDirty && nameError) && <span className="profile__input-error">{nameError}</span>}

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
                            onBlur={e => blurHandler(e)}
                            onChange={handleChangeEmail}
                        />
                    </div>
                    {(emailDirty && emailError) && <span className="profile__input-error">{emailError}</span>}
                    <div className="profile__button-wrapper">
                        {(!emailError && !nameError && (currentUser.name !== name || currentUser.email !== email)) &&
                            <button className="profile__edit-button" type="submit"
                                    onSubmit={handleSubmit}>Редактировать</button>}
                        {(emailError || nameError || (currentUser.name === name && currentUser.email === email)) &&
                            <button disabled className="profile__edit-button" type="submit"
                                    onSubmit={handleSubmit}>Редактировать</button>}
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

