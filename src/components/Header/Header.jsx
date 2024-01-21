import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://fikiwiki.com/uploads/posts/2022-02/1644833100_17-fikiwiki-com-p-emblemi-krasivie-kartinki-24.jpg' />

        <div className={s.loginBlock}>
            {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}

export default Header;