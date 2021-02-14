import React, {useState} from 'react';
import style from './home.module.css';
import {Link} from 'react-router-dom';
import {GiCommercialAirplane} from 'react-icons/gi'
import Modal from '../Modal/Modal';

function Home () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <div>
                <button className={style.BtnMod} onClick={() => setOpenModal(true)}>Tu viaje comienza aqui <GiCommercialAirplane/></button>
                <Modal title="Estas pensando en viajar ?" openModal={openModal} setOpenModal={setOpenModal}>
                    <Link to='/main'>
                        <button className={style.BtnModCheck} onClick={() => setOpenModal(false)}> Comencemos!</button>
                    </Link>
                    <Link to='/tripDream'>
                        <button className={style.BtnModCancel} onClick={() => setOpenModal(false)}>Tal vez en otro momento</button>
                    </Link>
                </Modal>
            </div>
        </div>
    )
}

export default Home;
