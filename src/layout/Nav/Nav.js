import React from 'react';
import style from './nav.module.css';
import {Link} from 'react-router-dom';
import {BiWorld} from 'react-icons/bi';

function Nav () {
    return (
        <nav >
            <ul className={style.navLink}>
            <Link className={style.link} to='/TripApp'>
                <li>Inicio</li>
            </Link>
            <Link className={style.linkIcon} to='/main'>
                <BiWorld/>
            </Link>
            <Link className={style.link} to='/about'>
                <li>Sobre Mi</li>
            </Link>
            </ul>
        </nav>
    )
}

export default Nav;