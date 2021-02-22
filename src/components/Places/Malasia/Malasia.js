import React from 'react';
import {Link} from 'react-router-dom';
import style from './malasia.module.css';
import Nav from '../../../layout/Nav/Nav';

function Malasia () {
    return (
        <div className={style.mainPic}>
            <Nav/>
            <h1>Que ciudad te gustaria conocer ?</h1>
            <Link to='/kualalumpur'>
                <button className={style.buttonChoice}>Kuala Lumpur</button>
            </Link>
        </div>
    )
}

export default Malasia;