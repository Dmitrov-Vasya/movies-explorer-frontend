import React from 'react';
import './MoviesCard.css';
import {timeToString} from '../../../../utils/timeToString';
import {Link} from "react-router-dom";


const MoviesCard = ({id, name, thumbnailUrl, trailerLink, duration, isSavedMovies, onButtonClick}) => {

    function handleButtonClick() {
        onButtonClick(id)
    }

    return (
        <li className="movies-card">
            <Link className='movies__link' to={`${trailerLink}`} target='_blank'>
                <img
                    className="movies-card__img"
                    src={thumbnailUrl}
                    alt={name}
                />
            </Link>
            <div className="movies-card__about">
                <h2 className="movies-card__header">{name}</h2>
                <button
                    type="button"
                    className={isSavedMovies ? 'movies-card__icon-delete' : 'movies-card__icon'}
                    alt={isSavedMovies ? 'Удалить из списка' : 'Сохранить фильм'}
                    onClick={handleButtonClick}
                />
            </div>
            <span className="movies-card__duration">
                    {timeToString(duration)}
                </span>
        </li>
    );
}

export default MoviesCard;
