import './Header.css';
import {Link} from "react-router-dom";
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation'

const Header = () => {
    return (
        <header className="header">
            <Link className='header__link header__link_logo' to='/'>
                <img className="header__logo" src={logo} alt="Логотип проекта" />
            </Link>
            <Navigation>
                <Link className='header__link header__link_registration' to='/signup'>Регистрация</Link>
                <Link className='header__button' to='/signin'>Войти</Link>
                </Navigation>
        </header>
    );
};
export default Header;
