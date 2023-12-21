    // Menu.jsx
    import React from 'react';
    import { Link } from 'react-router-dom';
    import style from './Menu.module.scss'; 

    function Menu() {
    return (
        <div className={style.menu}>
        <Link to="/" className={style.logo}>
            {/* Your logo image or text */}
            Logo
        </Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/game">Cards</Link>
        </nav>
        </div>
    );
    }

    export default Menu;
