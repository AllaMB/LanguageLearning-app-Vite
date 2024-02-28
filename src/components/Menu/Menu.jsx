    import React from 'react';
    import { NavLink } from 'react-router-dom';
    import style from './Menu.module.scss'; 
    import logoImage from '../../assets/images/logoImage.png';

    function Menu() {
    return (
        <div className={style.menu}>
        <NavLink to="/" className={style.logo}>
            <img src={logoImage} alt="Logo" />
        </NavLink>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/game" >Cards</NavLink>
            <NavLink to="/exploreWords">Explore Words</NavLink>
        </nav>
        </div>
    );
    }

    export default Menu;
