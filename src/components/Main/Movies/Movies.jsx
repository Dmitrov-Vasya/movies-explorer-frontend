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


    var moviesLength = moviesList.length;

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
        if (screenWidth >= 1280) {
            return 3;
        }
        if (screenWidth >= 768) {
            return 2;
        }
        return 5;
    }, [screenWidth]);

    const getAddCount = useCallback(
        (width = screenWidth) => {
            if (screenWidth >= 1280) {
                return 3;
            }
            return 2;
        },
        [screenWidth],
    );

    const moviesCardItems = useCallback(
        () => {
            const searchText = searchValue.text.trim().toLowerCase();
            const onlyShort = searchValue.short;
            const filteredMoviesBySearch = moviesList
                .filter((movie) => !onlyShort || movie.duration <= 40)
                .filter((movie) =>
                    !searchText || searchText === "" ||
                    movie.nameRU.trim().toLowerCase().includes(searchText) ||
                    movie.nameEN.trim().toLowerCase().includes(searchText)
                )

            moviesLength = filteredMoviesBySearch.length

            return filteredMoviesBySearch.filter((movie, index) => index < showMoviesLength)
        },
        [moviesList, showMoviesLength, searchValue]
    );

    const handleMoreClick = useCallback(() => {
        setShowMoviesLength((prev) => {
            const next = prev + addMoviesCount;
            return next > moviesLength ? moviesLength : next;
        });
    }, [addMoviesCount, moviesLength]);

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
            setAddMoviesCount(getAddCount(newScreenWidth));
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
                            <span className='movies-card-list movies-card-list__not-movie movies-card-list__not-movie_error'>
                              Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
                            </span>
                        ) : (
                            < MoviesCardList
                                moviesList={moviesCardItems()}
                                savedMoviesList={savedMoviesList}
                                onMovieLike={onMovieLike}
                                onMovieDelete={onMovieDelete}
                            />
                        )
                    )}
                    {moviesLength > showMoviesLength ? (
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
