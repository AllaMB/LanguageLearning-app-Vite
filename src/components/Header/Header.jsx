        import React from 'react';
        import Menu from '../Menu/Menu';
        import style from './Header.module.scss';
        import { Link } from 'react-router-dom';

        function Header() {
            return (
              <div className={style.container}>
                <Menu />
                <div className={style.contacts}>
                  <a href="https://github.com/AllaMB">Author's GitHub</a>
                </div>
              </div>
            );
          }
          
          export default Header; 
