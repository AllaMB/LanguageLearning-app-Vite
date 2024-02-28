    import React from 'react';
    import { Link } from 'react-router-dom';
    import style from './Footer.module.scss';

    function Footer() {
    return (
        <div className={style.container__footer}>
        <div className={style.contacts}></div>
        <div className={style.nav}>
            <Link to="/">Home</Link>
            <a href="https://github.com/AllaMB">Author's GitHub</a>
        </div>
        </div>
    );
    }

    export default Footer;
