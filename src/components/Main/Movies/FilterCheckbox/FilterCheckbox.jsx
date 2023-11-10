import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({isChecked, onChange}) => {
    const handleChange = () => {
        onChange(!isChecked);
    }
    return (
        <>
            <div className="filter-checkbox">
                <input className="filter-checkbox__input"
                       type="checkbox"
                       id="checkbox"
                       name="short"
                       checked={isChecked}
                       onChange={handleChange}/>
                <label className="filter-checkbox__label" htmlFor="checkbox"></label>
                <span className="filter-checkbox__span">Короткометражки</span>
            </div>
        </>
    );
}

export default FilterCheckbox;
