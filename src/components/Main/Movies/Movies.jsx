import React from 'react';
import './Movies.css';
import {useCallback, useEffect, useState} from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from "./Preloader/Preloader";

function Movies({
                    onError,
                    isLoading,
                    moviesList,
                    savedMoviesList,
                    onMovieLike,
                    onMovieDelete,
                }) {

    const [filteredMoviesList, setFilteredMoviesList] = useState(moviesList);

    const [showMoviesLength, setShowMoviesLength] = useState(0);

    const [addMoviesCount, setAddMoviesCount] = useState(0);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const [searchValue, setSearchValue] = useState({
        text: localStorage.getItem('SEARCH_MOVIES') ?? '',
        short: localStorage.getItem('GET_SHORT_MOVIES') === 'true' ?? false,
    });

    useEffect(() => {
        document.title = 'Фильмы';
    }, []);

    const getBaseCount = useCallback(() => {
        if (screenWidth >= 1215) {
            return 3;
        }
        if (screenWidth >= 768) {
            return 2;
        }
        return 5;
    }, [screenWidth]);

    const getAddCount = useCallback(() => {
        if (screenWidth >= 1280) {
            return 3;
        }
        return 2;
    }, [screenWidth]);

    const moviesCardItems = useCallback(
        () => {
            return filteredMoviesList.slice(0, showMoviesLength);
        },
        [filteredMoviesList, showMoviesLength]
    );

    const handleMoreClick = useCallback(() => {
        setShowMoviesLength((prev) => {
            const next = prev + addMoviesCount;
            return next > filteredMoviesList.length ? filteredMoviesList.length : next;
        });
    }, [addMoviesCount, filteredMoviesList]);

    useEffect(() => {
        const searchText = searchValue.text.trim().toLowerCase();
        const onlyShort = searchValue.short;
        const filteredMoviesBySearch = moviesList
            .filter((movie) => !onlyShort || movie.duration <= 40)
            .filter((movie) =>
                !searchText || searchText === "" ||
                movie.nameRU.trim().toLowerCase().includes(searchText) ||
                movie.nameEN.trim().toLowerCase().includes(searchText)
            )

        setFilteredMoviesList(filteredMoviesBySearch);
        setAddMoviesCount(getAddCount());
        setShowMoviesLength(getBaseCount());
    }, [getAddCount, getBaseCount, moviesList, searchValue]);


    // Обработчик изменения размера окна
    useEffect(() => {
        let initialScreenWidth = window.innerWidth;

        const handleResize = () => {
            const newScreenWidth = window.innerWidth;

            if (initialScreenWidth === newScreenWidth) {
                return;
            }

            initialScreenWidth = newScreenWidth;
            setScreenWidth(newScreenWidth);
            setAddMoviesCount(getAddCount());
            setShowMoviesLength(getBaseCount());
        };

        setAddMoviesCount(getAddCount());
        setShowMoviesLength(getBaseCount());

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [getAddCount, getBaseCount]);


    return (
        <>
            <main className="main">
                <section className="movies">
                    <SearchForm
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        isLoading={isLoading}
                        onError={onError}
                    />
                    {isLoading ? <Preloader/> : (
                        moviesList.length === 0 ? (
                            <section className="movies-card-list" aria-label="Секция с фильмами">
                                <span className='movies-card-list__not-movie movies-card-list__not-movie_error'>
                                  Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
                                </span>
                            </section>
                        ) : (
                            <MoviesCardList
                                moviesList={moviesCardItems()}
                                savedMoviesList={savedMoviesList}
                                onMovieLike={onMovieLike}
                                onMovieDelete={onMovieDelete}
                            />
                        )
                    )}
                    {filteredMoviesList.length > showMoviesLength ? (
                        <div className="movies__button-wrapper">
                            <button className="movies__button-add" onClick={handleMoreClick} type="button">
                                Ещё
                            </button>
                        </div>
                    ) : null}
                </section>
            </main>
        </>
    );
};

export default Movies;
