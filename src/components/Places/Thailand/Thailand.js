import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import style from './thailand.module.css';
import Nav from '../../../layout/Nav/Nav';
import Modal from '../../Modal/Modal';

function Thailand () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainPic}>
            <Nav/>
            <h1>Que ciudad te gustaria conocer ?</h1>
            <button onClick={() => setOpenModal(true)} className={style.buttonChoice}>Tailandia</button>
            <Modal title="Donde quieres ir ?" openModal={openModal} setOpenModal={setOpenModal}>
                <div className={style.columnfile}>
                    <div className={style.columnA}>
                        <Link to='/bangkok'>
                            <button className={style.destiny} onClick={() => setOpenModal(false)}>Bangkok</button>
                        </Link>
                    </div>
                    <div className={style.columnA}>
                        <Link to='/phuket'>
                            <button className={style.destiny} onClick={() => setOpenModal(false)}>Phuket</button>
                        </Link>
                    </div>
                    <div className={style.columnA}>
                        <Link to='/krabi'>
                            <button className={style.destiny} onClick={() => setOpenModal(true)}>Krabi</button>
                        </Link>
                    </div>
                </div>
                <button className={style.BtnModCancel} onClick={() => setOpenModal(false)}>Close</button>
            </Modal>
        </div>
    )
}

export default Thailand;