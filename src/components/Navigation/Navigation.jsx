import React from 'react'
import './Navigation.css';

const Navigation = ({ children }) => {
    return <nav className={`navigation`}>{children}</nav>;
};

export default Navigation;
