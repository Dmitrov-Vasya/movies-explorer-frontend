import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = () => {

    return (
        <>
        <section className="movies">
            <SearchForm />
            <MoviesCardList />
            <div className="movies__button-wrapper">
                <button className="movies__button_add" type="button">
                    Ещё
                </button>
            </div>
        </section>
        </>
    );
};

export default Movies;
