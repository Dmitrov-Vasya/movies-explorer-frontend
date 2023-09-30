import React from 'react';
import './MoviesCardList.css';
import moviesApi from '../../../../utils/MoviesApi';
import MoviesCard from '../MoviesCard/MoviesCard';
import {useLocation} from 'react-router-dom';


const MoviesCardList = ({
                            moviesList,
                            savedMoviesList,
                            onMovieLike,
                            onMovieDelete
                        }) => {

    const {pathname} = useLocation();
    const isSavedMovies = pathname === '/saved-movies';

    const handleDeleteMovie = (movieId) => {
        onMovieDelete(movieId);
    };

    const handleAddMovie = (movieId) => {
        onMovieLike(movieId);
    };

    const getIsSavedMovie = (movieId) => {
        return savedMoviesList?.some((movie) => movie.movieId === movieId);
    };

    return (
        <section className="movies-card-list" aria-label="Секция с фильмами">
            {moviesList.length ? (
                <ul className="movies-card-list__items">
                    {moviesList.map((movie) => {
                        const isSavedMovie = isSavedMovies || (movie.id && getIsSavedMovie(movie.id));
                        return (
                            <MoviesCard
                                id={movie.movieId || movie.id}
                                key={movie.movieId || movie.id}
                                name={isSavedMovies ? movie.nameRU : movie.nameRU}
                                thumbnailUrl={
                                    isSavedMovies ? movie.image : moviesApi.host + movie.image.url
                                }
                                trailerLink={isSavedMovies ? movie.trailerLink : movie.trailerLink}
                                duration={movie.duration}

                                isSavedMovies={isSavedMovies}
                                onButtonClick={
                                    isSavedMovie ? handleDeleteMovie : handleAddMovie
                                }
                            />
                        );
                    })}
                </ul>
            ) : (
                <span className='movies-card-list__not-movie'>
                  Ничего не найдено
                </span>
            )}
        </section>
    );
};

export default MoviesCardList;
