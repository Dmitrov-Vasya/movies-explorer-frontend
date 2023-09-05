import React from 'react'
import { Link } from 'react-router-dom';
import './AboutMe.css';
import me from '../../../../images/me.jpg'


const AboutMe = () => {
    return (
        <section className='about-me main__container' id='about-me'>
            <div className='about-me__container'>
                <h2 className='about-me__section'>Студент</h2>
                <div className='about-me__wrapper'>
                    <div className='about-me__info'>
                        <h3 className='about-me__title'>Василий</h3>
                        <p className='about-me__subtitle'>Фронтенд-разработчик, 29 лет</p>
                        <p className='about-me__description'>
                            Родился на крайнем севере, а именно на Чукотке.
                            В 2015 году окончил обучение и получил стпень бакалавра по экономике,а в 2017 году степень магистра.
                            С 2017 года работаю персональным в тренером.  В начале 2022 года начал интересоваться сферой IT и к
                            сентябрю 2022 года принял решение, что готов к изменениям в жизни и поступил на обучение по направлению
                            Веб-разработчик. На данный момент заканчиваю обучение и практикуюсь в компании на реальных задачах.
                            Хочу развиваться и двигаться в этом новом, а самое главное интересном направлении для меня.
                        </p>
                        <Link className='about-me__link' target='_blank'>
                            Github
                        </Link>
                    </div>

                    <img className='about-me__photo' src={me}  alt='Мое фото' />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
