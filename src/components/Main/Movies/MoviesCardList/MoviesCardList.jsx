import React from 'react';
import './MoviesCardList.css';
import { moviesArray } from '../../../../utils/movies';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = () => {
    return (
        <>
        <section className="movies-card-list">
            <ul className="movies-card-list__items">
                {moviesArray.map((item) => {
                    return <MoviesCard movie={item} key={item.movieId} />;
                })}
            </ul>
        </section>
        </>
    );
}

export default MoviesCardList;
