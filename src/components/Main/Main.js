import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import style from './main.module.css';
import Nav from '../../layout/Nav/Nav';
import Modal from '../Modal/Modal';
import WestCoast from '../Places/WestCoast/WestCoast'

function Main () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <h1>A donde quieres ir ?</h1>
            <button onClick={() => setOpenModal(true)} className={style.worldMap}></button>
            <Modal title="Hacia donde vas ?" openModal={openModal} setOpenModal={setOpenModal}>
                <div className={style.columnfile}>
                    <div className={style.columnA}>
                        <Link to='/europe'>
                            <button className={style.destiny} onClick={() => setOpenModal(false)}>Europe</button>
                        </Link>
                        <Link to='/thailand'>
                            <button className={style.thaiDestiny} onClick={() => setOpenModal(false)}></button>
                        </Link>
                        <Link to='/thailand'>
                            <button className={style.malasiaDestiny} onClick={() => setOpenModal(false)}></button>
                        </Link>
                    </div>
                    <div className={style.columnB}>
                        <Link to='/coast'>
                            <button className={style.usDestiny} onClick={() => setOpenModal(true)}></button>
                        </Link>
                        <Link to='/latinamerica'>
                            <button className={style.dubaiDestiny} onClick={() => setOpenModal(false)}></button>
                        </Link>
                        <Link to='/thailand'>
                            <button className={style.singapurDestiny} onClick={() => setOpenModal(false)}></button>
                        </Link>
                    </div>
                </div>
                <button className={style.BtnModCancel} onClick={() => setOpenModal(false)}>Close</button>
            </Modal>
        </div>
    )
}

export default Main;
