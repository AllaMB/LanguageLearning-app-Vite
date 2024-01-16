    import React from 'react';
    import { Link } from 'react-router-dom';
    import style from './Footer.module.scss';

    function Footer() {
    return (
        <div className={style.container__footer}>
        <a href="https://github.com/AllaMB">Author's GitHub</a>
        <div className={style.contacts}></div>
        <div className={style.nav}>
            <Link to="/">Home</Link>
            <Link to="/about">About project</Link>
        </div>
        </div>
    );
    }

    export default Footer;
