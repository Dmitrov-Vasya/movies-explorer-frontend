import React from 'react'
import './Profile.css';


const Profile = () => {
return (
    <main className='main'>
        <section className='profile'>
            <h1 className='profile__title'>Привет</h1>
                <ul className="form__list">
                        <li className="form__item"></li>
                </ul>
              <ul className='profile__list'>
                    <li className='profale__item'>
                        <button
                            className='profile__button profile__button_edit'>
                            Редактировать
                        </button>
                    </li>
                    <li className='profale__item'>
                        <button
                            className='profile__button profile__button_exit'>
                            Выйти из аккаунта
                        </button>
                    </li>
                </ul>
        </section>
    </main>
);
};

export default Profile;
