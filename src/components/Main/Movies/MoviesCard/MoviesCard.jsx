import React from 'react';
import './MoviesCard.css';
import { timeToString } from '../../../../utils/timeToString';

const MoviesCard = ({ movie }) => {
    return (
        <li className="movies-card">
            <img
                className="movies-card__img"
                src={movie.thumbnail}
                alt={movie.nameRU}
            />
            <div className="movies-card__about">
                <h2 className="movies-card__header">{movie.nameRU}</h2>
                <button type="button" className="movies-card__icon" alt="Лайк" />
            </div>
            <span className="movies-card__duration">
        {timeToString(movie.duration)}
      </span>
        </li>
    );
}

export default MoviesCard;