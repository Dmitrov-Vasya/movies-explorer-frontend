import React from 'react'
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


const SavedMovies = () => {
return (
    <div className='saved-movies'>
        <SearchForm />
        <p>Вы еще не сохранили не один фильм.</p>
        <MoviesCardList/>
    </div>
)
}

export default SavedMovies;
