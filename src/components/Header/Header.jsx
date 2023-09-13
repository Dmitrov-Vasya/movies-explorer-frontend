import React from 'react'
import './Header.css';
import logo from '../../images/logo.svg';
import profile from '../../images/icon-main.svg'
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
    const [menuIsActive, setMenuIsActive] = useState(false);
    const { pathname } = useLocation();
    const isLoginPage = pathname === '/signup' || pathname === '/signin';

    loggedIn = pathname === '/profile' ? true : loggedIn;

    const classNameHeader = () => {
        let className = 'header';
        if (menuIsActive) {
            className += ` header_active`;
        }
        if (loggedIn) {
            className += ` header_login`;
        }
        if (pathname === '/') {
            className += ` header_cover`;
        }
        if (isLoginPage) {
            className += ` header_auth`;
        }
        return className;
    };

    function handleMenuClick() {
        setMenuIsActive(true);
    }

    function handleCloseClick() {
        setMenuIsActive(false);
    }

    return (
        <header className={classNameHeader()}>
            <Link className='header__link header__link_logo' to='/'>
                    <img className='header__logo' src={logo} alt='SaveMovie' />
                </Link>
             {!isLoginPage &&
                (!loggedIn ? (
                    <Navigation>
                        <Link className='header__link' to='/signup'>
                            Регистрация
                        </Link>
                        <Link className='header__button' to='/signin'>
                            Войти
                        </Link>
                    </Navigation>
                ) : (
                    <>
                        <div className='header__wrapper'>

                            <Navigation>
                                <ul className='header__list'>
                                    <li className='header__item'>
                                        <NavLink className='header__link' to='/'>
                                            Главная
                                        </NavLink>
                                    </li>
                                    <li className='header__item'>
                                        <NavLink className='header__link' to='/movies'>
                                            Фильмы
                                        </NavLink>
                                    </li>
                                    <li className='header__item'>
                                        <NavLink className='header__link' to='/saved-movies'>
                                            Сохранённые фильмы
                                        </NavLink>
                                    </li>
                                </ul>
                            </Navigation>
                            <div className='header__wrapper-profile'>
                                <NavLink
                                    className='header__link header__link_profile'
                                    to='/profile'
                                    > Аккаунт
                                </NavLink>
                                <img className='header__logo-profile' src={profile}  alt='profile' />
                            </div>
                            <button
                                className='header__button-close'
                                type='button'
                                aria-label='Закрыть меню'
                                onClick={handleCloseClick}
                            />
                        </div>
                        <button
                            className='header__button-menu'
                            type='button'
                            aria-label='Окрыть меню'
                            onClick={handleMenuClick}
                        />
                    </>
                ))
             }
        </header>
    );
};

export default Header;
