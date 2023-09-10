import React from 'react';
import './SearchForm.css';
import find from '../../../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
    return (
        <>
        <section className="search-form">
            <form className="search-form__container">
                <input
                    className="search-form__input"
                    name="search"
                    id="search"
                    autoComplete="off"
                    type="text"
                    placeholder="Фильм"
                    required
                />
                <button className="search-form__button" type="submit" />
                <img className="search-form__icon" src={find} alt="Поиск..." />
            </form>
            <FilterCheckbox />
        </section>
        </>
    );
}

export default SearchForm;
