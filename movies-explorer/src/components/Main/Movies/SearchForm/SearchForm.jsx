import React from 'react'
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


const SearchForm = () => {
    return (
        <form className="searchfilm"
        >
            <input
                className="searchfilm__input"
                type="search"
                placeholder="Фильм"
                required
            />
            <p
                className="searchfilm__span">
                Нужно ввести ключевое слово
            </p>
            <button className="searchfilm__btn" id="searchBtn">
                <div className="searchfilm__btn-icon"></div>
            </button>
            <FilterCheckbox />
        </form>
    );
};

export default SearchForm;
