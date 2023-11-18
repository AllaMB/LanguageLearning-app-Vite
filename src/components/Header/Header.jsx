    import style from './Header.module.scss';

    export default function Header() {
    return (
        <div className={style.container}>
        <div className={style.logo}>
        </div>
        <div className={style.nav}>
            <a href="#">About</a>
            <a href="#">Home</a>
            <a href="#">Work</a>
            <a href="#">Contacts</a>
        </div>
        <div className={style.contacts}>
            <p>12345</p>
            <p>email@yahoo.com</p>
        </div>
        </div>
    );
    };
