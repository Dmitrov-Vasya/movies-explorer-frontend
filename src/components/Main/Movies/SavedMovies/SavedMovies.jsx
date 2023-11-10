import React from 'react';
import {useCallback, useEffect, useState} from 'react';
import './SavedMovies.css';
import Preloader from "../Preloader/Preloader";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({
                         onError,
                         isLoading,
                         savedMoviesList,
                         onMovieLike,
                         onMovieDelete,
                     }) => {

    const [searchValue, setSearchValue] = useState({
        text: localStorage.getItem('SEARCH_SAVED_MOVIES') ?? '',
        short: localStorage.getItem('GET_SHORT_SAVED_MOVIES') === 'true' ?? false,
    });

    // Фильтрация списка фильмов для отображения на основе showMoviesLength
    const moviesCardItems = useCallback(
        () => {
            const searchText = searchValue.text.trim().toLowerCase();
            const onlyShort = searchValue.short;
            return savedMoviesList
                .filter((movie) => !onlyShort || movie.duration <= 40)
                .filter((movie) =>
                    !searchText || searchText === "" ||
                    movie.nameRU.trim().toLowerCase().includes(searchText) ||
                    movie.nameEN.trim().toLowerCase().includes(searchText)
                )
        },
        [searchValue, savedMoviesList]
    );

    useEffect(() => {
        document.title = 'Сохраненные фильмы';
    }, []);

    return (
        <main className="main">
            <section className="saved-movies">
                <SearchForm
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    isLoading={isLoading}
                    onError={onError}
                />
                {isLoading && <Preloader/>}
                {!isLoading && (
                    <MoviesCardList
                        moviesList={moviesCardItems()}
                        savedMoviesList={savedMoviesList}
                        onMovieLike={onMovieLike}
                        onMovieDelete={onMovieDelete}
                    />
                )}
            </section>
        </main>
    )
}

export default SavedMovies;
