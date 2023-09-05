import React from 'react'
import './AboutProject.css';

const AboutProject = () => {
    return (
        <section className='about-project main__container' id='about'>
            <h2 className='about-project__section-title'>О проекте</h2>
            <ul className='about-project__list'>
                <li className='about-project__item'>
                    <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__description'>
                        Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.
                    </p>
                </li>
                <li className='about-project__item'>
                    <h3 className='about-project__subtitle'>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className='about-project__description'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <dl className='about-project__info'>
                <div className='about-project__info-wrapper'>
                    <dt className='about-project__info-duration'>1 неделя</dt>
                    <dd className='about-project__info-name'>Back-end</dd>
                </div>
                <div className='about-project__info-wrapper'>
                    <dt className='about-project__info-duration_type_black'>4 недели</dt>
                    <dd className='about-project__info-name_type_black'>Front-end</dd>
                </div>
            </dl>
        </section>
    );
};

export default AboutProject;
