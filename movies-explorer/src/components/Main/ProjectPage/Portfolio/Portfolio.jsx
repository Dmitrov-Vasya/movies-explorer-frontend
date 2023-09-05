import React from 'react'
import Navigation from '../../../Navigation/Navigation';
import {Link} from 'react-router-dom';
import './Portfolio.css';


const Portfolio = () => {

    return (
        <section className='portfolio'>
            <div className='portfolio__container'>
                <h2 className='portfolio__title'>Портфолио</h2>
                <Navigation className='portfolio__nav'>
                    <ul className='portfolio__list'>
                        <li className='portfolio__item'>
                            <Link
                                className='portfolio__link'
                                target='_blank'
                                src='https://github.com/Dmitrov-Vasya/how-to-learn.git'
                            >
                                Статичный сайт
                            </Link>
                        </li>
                        <li className='portfolio__item'>
                            <Link
                                className='portfolio__link'
                                target='_blank'
                                src='https://github.com/Dmitrov-Vasya/russian-travel.git'
                            >
                                Адаптивный сайт
                            </Link>
                        </li>
                        <li className='portfolio__item'>
                            <Link
                                className='portfolio__link'
                                target='_blank'
                                src='https://github.com/Dmitrov-Vasya/react-mesto-api-full-gha'
                            >
                                Одностраничное приложение
                            </Link>
                        </li>
                    </ul>
                </Navigation>
            </div>
        </section>
    );
};

export default Portfolio;
