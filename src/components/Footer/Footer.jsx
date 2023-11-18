    import style from './Footer.module.scss'

    export default function Footer() {
    return (
        <div className="container__footer">
        <div className="contacts">
            <p>2234235235</p>
            <p>mail@gmal.com</p>
        </div>
        <div className="nav">
            <a href="#">About</a>
            <a href="#">Home</a>
            <a href="#">Work</a>
            <a href="#">Contacts</a>
        </div>
        <div className="address">
            <h3>st. XXX 55-32</h3>
        </div>
        </div>
    );
    }
