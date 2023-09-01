import React from 'react'
import { Route, Routes} from 'react-router-dom';
import './App.css';
import "../../vendor/inter.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProjectPage from '../Main/ProjectPage/ProjectPage';
import Movies from '../Main/Movies/Movies';
import Profile from '../Main/Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../Main/Movies/SavedMovies/SavedMovies'

const App = () => {

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<ProjectPage />}/>
                <Route path='/movies' element={<Movies />}/>
                <Route path='/saved-movies' element={<SavedMovies />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/signup' element={<Register />}/>
                <Route path='/signin' element={<Login />}/>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
