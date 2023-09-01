import React from 'react'
import "./FilterCheckbox.css";

const FilterCheckbox = () => {

    return (
        <div className="filtercheckbox">
            <div className="filtercheckbox__handler">
                <div
                    className='filtercheckbox__handler-circle'></div>
            </div>
            <p className="filtercheckbox__title">Короткометражки</p>
        </div>
    );
};

export default FilterCheckbox;
