import React from 'react';
import style from './NotFoundPage.module.scss'; 

function NotFoundPage() {
    return (
    <main className={style.container}>
    <div className={style.content}>
        <h1>404 Not Found</h1>
        <p>Oops! Looks like you've wandered into the unknown.</p>
        <p>Don't worry, even words get lost sometimes!</p>
        <p>Let's get you back on track:</p>
        <ul>
            <li><a href="/">Go to Home</a></li>
            <li><a href="/exploreWords">Explore Words</a></li>
        </ul>
    </div>
</main>
);
}

export default NotFoundPage;