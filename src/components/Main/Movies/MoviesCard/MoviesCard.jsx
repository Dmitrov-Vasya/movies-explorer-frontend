import React from 'react';
import './MoviesCard.css';
import { timeToString } from '../../../../utils/timeToString';
import {useLocation} from "react-router-dom";


const MoviesCard = ({ movie }) => {
    const { pathname } = useLocation();
    const movieActionButtonClass = pathname === '/saved-movies';
    const classNameImageButton = () => {
        if (movieActionButtonClass) {
            return 'movies-card__icon-delete';
        } else {
            return 'movies-card__icon';
        }
    }


    return (
        <li className="movies-card">
            <img
                className="movies-card__img"
                src={movie.thumbnail}
                alt={movie.nameRU}
            />
            <div className="movies-card__about">
                <h2 className="movies-card__header">{movie.nameRU}</h2>
                <button type="button" className={classNameImageButton()} alt="Кнопка" />
            </div>
            <span className="movies-card__duration">
        {timeToString(movie.duration)}
      </span>
        </li>
    );
}

export default MoviesCard;
