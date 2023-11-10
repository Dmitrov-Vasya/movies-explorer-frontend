import './SearchForm.css';
import find from '../../../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
const SearchForm = ({searchValue, setSearchValue, isLoading, onError}) => {

    const {pathname} = useLocation();
    const isMovies = pathname === '/movies';
    const [searchText, setSearchText] = useState("" + searchValue.text);
    const [error, setError] = useState('');

    const handleTextChange = (event) => {
        setSearchText(event.target.value);
        if (event.target.validity.patternMismatch) {
            setError('Введите название видео');
        } else {
            setError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!error && searchText) {
            if (isMovies) {
                localStorage.setItem('SEARCH_MOVIES', searchText);
            } else {
                localStorage.setItem('SEARCH__SAVED_MOVIES', searchText);
            }
            setSearchValue({text: searchText, short: searchValue.short})
        } else if (!searchText) {
            setError('Введите название видео');
        }
    };

    const handleCheckboxChange = (checked) => {
        if (isMovies) {
            localStorage.setItem('GET_SHORT_MOVIES', checked);
        } else {
            localStorage.setItem('GET_SHORT_SAVED_MOVIES', checked);
        }
        setSearchValue({text: searchValue.text, short: checked})
    };

    return (
        <>
            <section className="search-form">
                <form className="search-form__container " onSubmit={handleSubmit} noValidate>
                    {(error) && <div className="search__error">{"Введите название видео"}</div>}
                    <input
                        className="search-form__input"
                        name="search"
                        id="search"
                        autoComplete="off"
                        type="text"
                        minLength={1}
                        placeholder="Фильм"
                        required
                        value={searchText || ''}
                        onChange={handleTextChange}
                    />
                    <button className="search-form__button" type="submit" disabled={isLoading}/>
                    <img className="search-form__icon" src={find} alt="Поиск..."/>
                </form>
                <FilterCheckbox isChecked={searchValue.short} onChange={handleCheckboxChange}/>
            </section>
        </>
    );
}

export default SearchForm;

