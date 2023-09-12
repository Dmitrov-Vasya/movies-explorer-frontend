import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = () => {

    return (
        <>
            <main className="main">
                <section className="movies">
                    <SearchForm />
                     <MoviesCardList />
                     <div className="movies__button-wrapper">
                         <button className="movies__button-add" type="button">
                             Ещё
                         </button>
                     </div>
                </section>
            </main>
        </>
    );
};

export default Movies;
