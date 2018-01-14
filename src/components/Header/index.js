import React from 'react';

import Login from '../Profile';
import './styles.css';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='hometodo__header header'>
            <NavLink exact className='header__logo' to="/">JobUp</NavLink>
            <ul className='header__nav nav'>
                <li className='nav__item'>
                    <NavLink
                        className='nav__link nav__link-board'
                        activeClassName='nav__link-active'
                        to="/dashboard">Dashboard</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink
                        className='nav__link nav__link-history'
                        activeClassName='nav__link-active'
                        to="/history">History</NavLink>
                </li>
            </ul>
            <div className='header__profile profile'>
                <span className='profile__title'>Profile</span>
                <Login/>
            </div>
        </header>
    );
};

export default Header;