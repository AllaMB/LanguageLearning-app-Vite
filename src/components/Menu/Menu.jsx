    import React from 'react';
    import { Link } from 'react-router-dom';
    import style from './Menu.module.scss'; 
    import logoImage from '../../assets/images/logoImage.png';

    function Menu() {
    return (
        <div className={style.menu}>
        <Link to="/" className={style.logo}>
        <img src={logoImage} alt="Logo" />
        </Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/game">Cards</Link>
            <Link to="/exploreWords">Explore Words</Link>
        </nav>
        </div>
    );
    }

    export default Menu;
