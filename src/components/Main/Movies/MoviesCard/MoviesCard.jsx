import {useState} from 'react';
import './MoviesCard.css';
import {timeToString} from '../../../../utils/timeToString';
import {Link} from "react-router-dom";


const MoviesCard = ({id, name, thumbnailUrl, trailerLink, duration, isSavedMovies, onButtonClick}) => {
    const [isSaved, setIsSaved] = useState(isSavedMovies);
    function handleButtonClick() {
        onButtonClick(id)
        setIsSaved(!isSaved)
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
                {
                    isSavedMovies ?
                    <button
                    type="button"
                    className="movies-card__n movies-card__icon-delete" /> :
                        <button
                            type="button"
                            className={`${isSaved ? "movies-card__icon" : "movies-card__icon-unactive"}`} onClick={handleButtonClick}></button>
                }
            </div>
            <span className="movies-card__duration">
                    {timeToString(duration)}
                </span>
        </li>
    );
}

export default MoviesCard;
