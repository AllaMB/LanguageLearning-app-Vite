    import React from 'react';
    import style from './Footer.module.scss'

    function Footer() {
    return (
        <div className={style.container__footer}>
        <a href="https://github.com/AllaMB">Author's GitHub</a>
        <div className={style.contacts}>
        

        </div>
        <div className={style.nav}>
            <a href="#">About project</a>
            <a href="#">Contacts</a>
        </div>
        </div>
    );
    }

    export default Footer;