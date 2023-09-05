import React from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import "./Footer.css";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <p className='footer__description'>
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </p>
                <div className='footer__wrapper'>
                    <p className='footer__copyright'>&copy; 2023</p>
                    <Navigation className={'footer__nav'}>
                        <ul className='footer__list'>
                            <li className='footer__item'>
                                <Link
                                    className='footer__link'
                                    to='https://practicum.yandex.ru/'
                                    target='_blank'
                                >
                                    Яндекс.Практикум
                                </Link>
                            </li>
                            <li className='footer__item'>
                                <Link
                                    className='footer__link'
                                    to='https://github.com/Dmitrov-Vasya'
                                    target='_blank'
                                >
                                    Github
                                </Link>
                            </li>
                        </ul>
                    </Navigation>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

