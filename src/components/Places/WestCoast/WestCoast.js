import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import style from './coast.module.css';
import Nav from '../../../layout/Nav/Nav';
import Modal from '../../Modal/Modal';
import NewModal from '../../NewModal/NewModal';
import California from './California/California'

function WestCoast () {
    const [openModal, setOpenModal] = useState(false);
    const [openNewModal, setOpenNewModal] = useState(false);
    return (
        <div className={style.mainPic}>
            <Nav/>
            <h1>En que costa te gustaria comenzar ?</h1>
            <button onClick={() => setOpenModal(true)} className={style.buttonSize}>West Coast</button>
            <Modal title="Donde quieres ir ?" openModal={openModal} setOpenModal={setOpenModal}>
                <div className={style.columnfile}>
                    <div className={style.columnA}>
                        <Link to='/colorado'>
                            <button className={style.destiny} onClick={() => setOpenModal(false)}>Cañon de Colorado</button>
                        </Link>
                    </div>
                    <div className={style.columnA}>
                        <Link to='/vegas'>
                            <button className={style.destiny} onClick={() => setOpenModal(false)}>Las Vegas</button>
                        </Link>
                    </div>
                    <div className={style.columnA}>
                        <Link to='/california'>
                            <button className={style.destiny} onClick={() => setOpenModal(true)}>California</button>
                        </Link>
                    </div>
                </div>
                <button className={style.BtnModCancel} onClick={() => setOpenModal(false)}>Close</button>
            </Modal>
            <button onClick={() => setOpenNewModal(true)} className={style.buttonSize}>East Coast</button>
            <NewModal  title="Donde quieres ir ?" openNewModal={openNewModal} setOpenNewModal={setOpenNewModal}>
                <div className={style.columnfile}>
                    <div className={style.columnA}>
                        <Link to='/chicago'>
                            <button className={style.destiny} onClick={() => setOpenNewModal(true) }>Chicago</button>
                        </Link>
                    </div>
                    <div className={style.columnA}>
                        <Link to='/nyc'>
                            <button className={style.destiny} onClick={() => setOpenNewModal(true) }>New York</button>
                        </Link>
                    </div>
                    <div className={style.columnA}>
                        <Link to='/miami'>
                            <button className={style.destiny} onClick={() => setOpenNewModal(true)}>Miami</button>
                        </Link>
                    </div>
                    <div className={style.columnA}>
                        <Link to='/dc'>
                            <button className={style.destiny} onClick={() => setOpenNewModal(true)}>Washington DC</button>
                        </Link>
                    </div>    
                </div>
                <button className={style.BtnModCancel} onClick={() => setOpenNewModal(false)}>Close</button>
            </NewModal>
        </div>
    )
}

export default WestCoast;