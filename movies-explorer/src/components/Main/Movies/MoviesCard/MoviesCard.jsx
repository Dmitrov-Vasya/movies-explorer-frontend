import "./MoviesCard.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ movie, handleClick }) => {

    return (
        <div className="moviescard">
            <div className="moviescard__header">
                <div className="moviescard__textblock">
                    <h4 className="moviescard__title">{nameRU}</h4>
                    <p className="moviescard__duration">{getTimeFromMins(duration)}</p>
                </div>
                <button
                    className={`${
                        pathname === "/saved-movies"
                            ? "moviescard__icon_delete"
                            : "moviescard__icon"
                    } ${isSaved ? "moviescard__icon_active " : ""}`}
                    onClick={handleClickOnIcon}
                    type="button"
                ></button>
            </div>
            <a
                className="moviescard__img-link"
                href={trailerLink}
                target="_blank"
                rel="noreferrer"
            >
                <img className="moviescard__image" src={image} alt={nameRU} />
            </a>
        </div>
    );
};

export default MoviesCard;
}
