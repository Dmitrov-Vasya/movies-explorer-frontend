import React from 'react'
import { Link } from 'react-router-dom';
import './AboutMe.css';


const AboutMe = () => {
    return (
        <section className='about-me main__container' id='about-me'>
            <div className='about-me__container'>
                <h2 className='about-me__section'>Студент</h2>
                <div className='about-me__wrapper'>
                    <div className='about-me__info'>
                        <h3 className='about-me__title'>Валерия</h3>
                        <p className='about-me__subtitle'>Фронтенд-разработчик, 37 лет</p>
                        <p className='about-me__description'>
                            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                            Контур». После того, как прошёл курс по веб-разработке, начал
                            заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                        <Link
                            className='about-me__link'
                            target='_blank'
                        >
                            Github
                        </Link>
                    </div>

                    <img className='about-me__img'  alt='Фото студента' />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
