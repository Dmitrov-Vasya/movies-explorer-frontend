import React from 'react'
import './Header.css';
import { Link, NavLink } from "react-router-dom";
import logo from '../../images/logo.svg';
import  Navigation from '../Navigation/Navigation'

const Header = () => {

    return (
//        <header className={pathname === mainPath ? 'header header_cover' : 'header'}>
        <header className='header'>
            <div className='header__container'>
                <Link className='header__link header__link_logo' >
                    <img className='header__logo' src={logo} alt='SaveMovie' />
                </Link>
                <Navigation>
                            <Link className='header__link'>
                                Регистрация
                            </Link>
                            <Link className='header__button'>
                                Войти
                            </Link>
                        </Navigation>
                        <>
                            <div className='header__wrapper'>
                                <Navigation>
                                    <ul className='header__list'>
                                        <li className='header__item'>
                                            <NavLink className='header__link'>
                                                Главная
                                            </NavLink>
                                        </li>
                                        <li className='header__item'>
                                            <NavLink className='header__link'>
                                                Фильмы
                                            </NavLink>
                                        </li>
                                        <li className='header__item'>
                                            <NavLink className='header__link'>
                                                Сохранённые фильмы
                                            </NavLink>
                                        </li>
                                    </ul>
                                </Navigation>
                                <Navigation>
                                    <NavLink
                                        className='header__link header__link_profile'>
                                    >
                                        Аккаунт
                                    </NavLink>
                                </Navigation>
                                <button
                                    className='header__button-close'
                                    type='button'
                                />
                            </div>
                            <button
                                className='header__button-menu'
                                type='button'
                            />
                        </>
            </div>
        </header>
    );
};
export default Header;
