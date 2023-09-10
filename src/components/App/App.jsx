import React from 'react'
import { useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [valueRegister, setValueRegister] = useState({});
    const [valueLogin, setValueLogin] = useState({});
    const [isErrorPage, setIsErrorPage] = useState(false);
    const { pathname } = useLocation();

    return (
        <div className='App'>
            {!isErrorPage && <Header loggedIn={loggedIn} />}
            <Routes>
                <Route path='/' element={<Landing />} loggedIn={loggedIn} />
                <Route
                    path='/movies'
                    element={<Movies />}
                    loggedIn={loggedIn}
                    isLoading={isLoading}
                />
                <Route
                    path='/saved-movies'
                    element={<SavedMovies />}
                    loggedIn={loggedIn}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
                <Route
                    path='/profile'
                    element={<Profile />}
                    onSubmit={() => console.log('click')}
                    setLoggedIn={setLoggedIn}
                    isLoading={isLoading}
                    loggedIn={loggedIn}
                />
                <Route
                    path='/signup'
                    element={
                        loggedIn ? (
                            <Navigate to='/' replace />
                        ) : (
                            <Register
                                name='registration'
                                value={valueRegister}
                                setValue={setValueRegister}
                                isLoading={isLoading}
                            />
                        )
                    }
                />
                <Route
                    path='/signin'
                    element={
                        loggedIn ? (
                            <Navigate to='/movies' replace />
                        ) : (
                            <Login
                                value={valueLogin}
                                setValue={setValueLogin}
                                isLoading={isLoading}
                                setLoggedIn={setLoggedIn}

                            />
                        )
                    }
                />
                <Route
                    path='*'
                    element={
                        <Error setIsErrorPage={setIsErrorPage} />
                    }
                />
            </Routes>

            {(pathname !== '/signin' && pathname !== '/signup' && pathname !=='/profile' && pathname !=='/*') ?  <Footer /> : (pathname === '/signin' && pathname === '/signup' && pathname ==='/profile' && pathname ==='/*') }

        </div>
    );
};

export default App;
