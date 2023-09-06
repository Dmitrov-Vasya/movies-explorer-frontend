import React from 'react'
import { Link } from 'react-scroll';
import Navigation from '../../../Navigation/Navigation';
import './NavTab.css';



const NavTab = () => {

    return (
        <Navigation>
            <ul className='navigation__list'>
                <li className='navigation__item'>
                    <Link to='about' smooth={true} duration={500} className='navigation__link'>
                        О проекте
                    </Link>
                </li>
                <li className='navigation__item'>
                    <Link to='techs' smooth={true} duration={500} className='navigation__link'>
                        Технологии
                    </Link>
                </li>
                <li className='navigation__item'>
                    <Link to='about-me' smooth={true} duration={500} className='navigation__link'>
                        Студент
                    </Link>
                </li>
            </ul>
        </Navigation>
    );
};

export default NavTab;
