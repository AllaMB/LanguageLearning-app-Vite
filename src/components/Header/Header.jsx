        import React from 'react';
        import style from './Header.module.scss';

        function Header() {
        return (
            <div className={style.container}>
            <div className={style.logo}>
            </div>
            <div className={style.nav}>
                <a href="#">About project</a>
                <a href="#">Contacts</a>
            </div>
            <div className={style.contacts}>
                <a href="https://github.com/AllaMB">Author's GitHub</a>
            </div>
            </div>
        );
        }

        export default Header;