import React from 'react'
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


const SavedMovies = () => {
return (
    <div className='savedmovies'>
        <SearchForm />
        <p className="savedmovies__empty-text">Вы еще не сохранили не один фильм.</p>
        <MoviesCardList/>
    </div>
)
}

export default SavedMovies;
