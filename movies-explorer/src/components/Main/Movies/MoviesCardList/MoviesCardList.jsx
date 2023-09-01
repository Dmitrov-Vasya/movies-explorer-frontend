import React from 'react'
import './MoviesCardList.css';

const MoviesCardList = () => {


    return (
        <section className='movies'>
            <ul className='movies__card-list'></ul>
            <div className='movies__wrapper'>
                    <button className='movies__button-more' >Ещё</button>
            </div>
        </section>
    );
};

export default MoviesCardList;
