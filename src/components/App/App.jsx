import React from 'react'
import {useState, useEffect} from 'react';
import {Navigate, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Movies from '../Main/Movies/Movies';
import Footer from '../Footer/Footer';
import Landing from '../Main/ProjectPage/ProjectPage';
import Error from '../Error/Error';
import Profile from '../Main/Profile/Profile';
import SavedMovies from '../Main/Movies/SavedMovies/SavedMovies';
import Login from "../Login/Login";
import Register from "../Register/Register";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import api from '../../utils/MainApi';
import auth from "../../utils/authApi";
import moviesApi from '../../utils/MoviesApi';
import {CurrentUserContext} from "../../contexts/CurrentUserContext"


const App = () => {
    const [isLoadingMovies, setIsLoadingMovies] = useState(true);
    const [isLoadingSavedMovies, setIsLoadingSavedMovies] = useState(true);
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("IS_LOGGED_IN"));
    const [isErrorPage, setIsErrorPage] = useState(false);
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    const [moviesList, setMoviesList] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);

    const handleRegister = ({email, password, name}) => {
        auth
            .register({email, password, name})
            .then((res) => {

                if (res.data.email || res.data.password || res.data.name) {
                    localStorage.setItem("IS_LOGGED_IN", true);
                    setLoggedIn(true);
                    navigate('/movies');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleLogin = (data) => {
        auth
            .authorize(data)
            .then((data) => {
                localStorage.setItem("IS_LOGGED_IN", true);
                setLoggedIn(true);
                navigate('/movies');
            })
            .catch((err) => {
                localStorage.setItem("IS_LOGGED_IN", false);
                console.log(err);
            });
    }

    const handleLogout = () => {
        auth
            .logout()
            .then(() => {
                localStorage.clear();
                setLoggedIn(false);
                navigate('/signin', {replace: 'true'});
            })
            .catch((err) => {
                localStorage.clear();
                setLoggedIn(false);
                navigate('/signin', {replace: 'true'});
                console.log(err);
            });
    }

    const checkToken = () => {
        auth
            .checkToken()
            .then((user) => {
                if (user) {
                    setCurrentUser(user);
                    localStorage.setItem("IS_LOGGED_IN", true);
                    setLoggedIn(true);
                } else {
                    localStorage.setItem("IS_LOGGED_IN", false);
                }
            })
            .catch((err) => {
                localStorage.setItem("IS_LOGGED_IN", false);
                setLoggedIn(false);
                console.log(err);
            });
    };

    const handleUpdateUser = (value) => {
        api
            .editProfile(value)
            .then(({name, email}) => {
                setCurrentUser({...currentUser, name, email});
            })
            .catch((err) => console.log(err));
    }

    const getMovies = () => {
        moviesApi
            .getMovies()
            .then((moviesList) => {
                console.log("movies", moviesList);
                setIsLoadingMovies(false);
                setMoviesList(moviesList);
            })
            .catch((err) => {
                setIsLoadingMovies(true);
                console.log(err);
            });
    };

    const getSavedMovies = () => {
        api
            .getSavedMovies()
            .then((movies) => {
                setSavedMovies(movies);
                setIsLoadingSavedMovies(false)
            })
            .catch((err) => {
                setIsLoadingSavedMovies(true)
                console.log(err);
            });
    };

    const handleMovieDelete = (movieId) => {
        const movie = savedMovies.find((item) => item.movieId === movieId);
        if (movie) {
            api
                .deleteSavedMovie(movie._id)
                .then(() => {
                    setSavedMovies((movies) =>
                        movies.filter((item) => item._id !== movie._id)
                    );
                })
                .catch((err) => console.log(err));
        }
    };

    const handleMovieLike = (movieId) => {
        const alreadyLikedMovie = savedMovies.find((item) => item.movieId === movieId);
        console.log("alreadyLikedMovie", alreadyLikedMovie)

        if (!alreadyLikedMovie) {
            const movie = moviesList.find((item) => item.id === movieId);
            console.log("alreadyLikedMovie movie", movie)
            if (movie) {
                api
                    .addSavedMovie({
                        movieId: movie.id,
                        nameRU: movie.nameRU,
                        nameEN: movie.nameEN,
                        country: movie.country,
                        year: movie.year,
                        director: movie.director,
                        duration: movie.duration,
                        description: movie.description,
                        image: moviesApi.host + movie.image.url,
                        trailerLink: movie.trailerLink,
                        thumbnail: moviesApi.host + movie.image.formats.thumbnail.url,
                    })
                    .then((newMovie) => {
                        setSavedMovies([...savedMovies, newMovie]);
                    })
                    .catch((err) => console.log(err));
            }
        } else {
            handleMovieDelete(alreadyLikedMovie)
        }
    };

    useEffect(() => {
        if (loggedIn) {
            checkToken();
            getSavedMovies();
        }
        getMovies();
    }, [loggedIn]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='App'>
                {!isErrorPage && <Header loggedIn={loggedIn}/>}
                <Routes>
                    <Route path='/' element={<Landing isLoading={isLoadingMovies && isLoadingSavedMovies}/>}/>
                    <Route
                        path='/movies'
                        element={
                            <ProtectedRoute
                                element={Movies}
                                loggedIn={loggedIn}
                                isLoading={isLoadingMovies && isLoadingSavedMovies}
                                moviesList={moviesList}
                                savedMoviesList={savedMovies}
                                onMovieLike={handleMovieLike}
                                onMovieDelete={handleMovieDelete}
                            />
                        }
                    />
                    <Route
                        path='/saved-movies'
                        element={
                            <ProtectedRoute
                                element={SavedMovies}
                                loggedIn={loggedIn}
                                isLoading={isLoadingMovies && isLoadingSavedMovies}
                                savedMoviesList={savedMovies}
                                onMovieLike={handleMovieLike}
                                onMovieDelete={handleMovieDelete}
                            />
                        }
                    />
                    <Route
                        path='/profile'
                        element={
                            <ProtectedRoute
                                element={Profile}
                                user={currentUser}
                                onSignout={handleLogout}
                                onUpdateUser={handleUpdateUser}
                                loggedIn={loggedIn}
                            />
                        }
                    />
                    <Route
                        path='/signup'
                        element={
                            loggedIn ? (
                                <Navigate to='/' replace/>
                            ) : (
                                <Register
                                    handleRegister={handleRegister}
                                    isLoading={isLoadingMovies && isLoadingSavedMovies}
                                />
                            )
                        }
                    />
                    <Route
                        path='/signin'
                        element={
                            loggedIn ? (
                                <Navigate to='/movies' replace/>
                            ) : (
                                <Login
                                    loggedIn={loggedIn}
                                    isLoading={isLoadingMovies && isLoadingSavedMovies}
                                    handleLogin={handleLogin}

                                />
                            )
                        }
                    />
                    <Route
                        path='*'
                        element={
                            <Error setIsErrorPage={setIsErrorPage}/>
                        }
                    />
                </Routes>
                {(pathname === '/movies' || pathname === '/saved-movies' || pathname === '/') ? <Footer/> : ''}
            </div>
        </CurrentUserContext.Provider>
    )
};

export default App;
