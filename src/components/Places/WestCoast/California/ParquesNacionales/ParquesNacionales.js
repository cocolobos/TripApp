import React, {useState} from 'react';
import style from './parquesnacionales.module.css';
import Nav from '../../../../../layout/Nav/Nav';
import Footer from '../../../../../layout/Footer/Footer';
import Modal from '../../../../Modal/Modal';
import valley from '../../../../../pictures/California/valley.jpg';
import valley2 from '../../../../../pictures/California/valley2.jpg';
import valley3 from '../../../../../pictures/California/valley3.jpg';
import valley4 from '../../../../../pictures/California/valley4.jpg';
import yos from '../../../../../pictures/California/yos.jpg';
import yos2 from '../../../../../pictures/California/yos2.jpg';
import yos3 from '../../../../../pictures/California/yos3.jpg';
import yos4 from '../../../../../pictures/California/yos4.jpg';
import redwood from '../../../../../pictures/California/redwood.jpg';
import redwood2 from '../../../../../pictures/California/redwood2.jpg';
import redwood3 from '../../../../../pictures/California/redwood3.jpg';
import redwood4 from '../../../../../pictures/California/redwood4.jpg';
import channel from '../../../../../pictures/California/channel.jpg';
import channel2 from '../../../../../pictures/California/channel2.jpg';
import channel3 from '../../../../../pictures/California/channel3.jpg';
import channel4 from '../../../../../pictures/California/channel4.jpg';

function ParquesNacionales () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Parques Nacionales</h1>
                <p className={style.introP}>
                    Estos parques son visitados por una gran cantidad de turistas durante todo el año, por esta razón es sumamente importante reservar el alojamiento con bastante antelación, ya que si no te resultará totalmente imposible encontrar un sitio donde dormir.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Parques Nacionales" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={valley}></img>
                            <img src={valley2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={valley3}></img>
                            <img src={valley4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={yos}></img>
                            <img src={yos2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={yos3}></img>
                            <img src={yos4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={redwood}></img>
                            <img src={redwood2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={redwood3}></img>
                            <img src={redwood4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={channel}></img>
                            <img src={channel2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={channel3}></img>
                            <img src={channel4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <button className={style.BtnModCancel} onClick={() => setOpenModal(false)}>Close</button>
                        </div>
                    </Modal>
                <div className={style.pageStyle}>
                    <div className={style.sideBar}>
                        <div className={style.pageDesing}>
                            <h2>Parques Nacionales</h2>
                            <ul className={style.uList}>
                                <li><a href='#deathvalley'>Death Valley</a></li>
                                <li><a href='#yosemite'>Yosemite</a></li>
                                <li><a href='#redwood'>Redwood</a></li>
                                <li><a href='#channelisland'>Channel Island</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='deathvalley'>
                            <h3>Death Valley</h3>
                            <p>
                                Las distancias en USA son conocidas por ser muy largas, así que se podría decir que el Parque Nacional del Valle de la Muerte está situado relativamente cerca de Los Ángeles, a unos 200 Km. Este es uno de los Parques Nacionales más visitados de California, ya que queda de camino entre Yosemite y el Gran Cañón del Colorado.
                                Si visitas el Valle de la Muerte descubrirás un desierto con todas las de la ley, ya que es un lugar dónde nunca llueve y una de las zonas más áridas del planeta. Un curioso dato es que la temperatura más alta registrada sobre la superfície de la Tierra se registró en este lugar en 1913, llegando a 56’7 grados.
                                El valle ofrece paisajes extraordinarios, por ejemplo las hermosas dunas de Stovepipe Wells o las montañas de colores en Artists Drive y el Cañón Dorado. Uno de los lugares más impresionantes del Valle de la Muerte es el Dantes Point, que ofrece una vista panorámica de Death Valley. Es importante saber que el centro de visitantes se encuentra en Furnance Creek.
                                ¿Dónde alojarse en Death Valley?
                                En realidad, no existen alojamientos dentro del parque nacional del Valle de la Muerte, básicamente, porque las condiciones climáticas del parque son realmente extremas. El alojamiento se encuentra en sus alrededores, por lo que, dependiendo por dónde quieras acceder a Death Valley, te será más apropiado alojarte en una ciudad u en otra.
                            </p>
                        </section>
                        <section id='yosemite'>
                            <h3>Yosemite</h3>
                            <p>
                                Yosemite es otro de los Parques Nacionales de California más conocidos, ya que está ubicado en Sierra Nevada (a medio camino entre Los Ángeles y San Francisco). Si visitas Yosemite vas a tener la suerte de estar contemplando uno de los paisajes más bellos del planeta, con imponentes montañas como el Gran Capitán y cascadas únicas en el mundo.
                                Si visitas Yosemite se recomienda destinar como mínimo tres días a este maravilloso parque, ya que si no será imposible poder apreciar sus grandes atractivos. Los puntos más interesantes del Parque de Yosemite son el Valle de las Mariposas, dónde tendrás la oportunidad de ver las grandes Sequoias de California y cruzar con el coche el Pase de Tioga, el cual te permitirá cruzar el parque de punta a punta por encima de sus cimas. Este es un lugar totalmente equipado para que los turistas puedan realizar diversas actividades, como por ejemplo excursiones, visitas en coche particular o autobús, y alojamientos en hoteles y tiendas de campaña en medio del parque.
                                ¿Dónde alojarse en Yosemite?
                                El Parque Natural de Yosemite es uno de los más famosos y turísticos de Estados Unidos. Existen un montón de lugares dónde alojarse en Yosemite y en sus alrededores. Los 4 pueblos más importantes dónde alojarse para visitar el parque son: Mammoth Lakes, Oakhurst, Mariposa y El Portal.
                            </p>
                        </section>
                        <section id='redwood'>
                            <h3>Redwood</h3>
                            <p>
                                El Parque Nacional Redwood está situado en la costa Norte de California (cerca de San Francisco) y posee una de las zonas boscosas más interesantes de California y unas zonas costeras casi vírgenes. Si visitas Redwood en realidad visitarás tres parques, los cuales se unificaron para formar Redwood. Aquí se encuentra la sequoia costera, el árbol más alto del mundo y algunos animales en peligro de extinción únicos en el territorio.
                                Redwood es uno de los parques más grandes del estado, por lo que es mejor visitarlo en varios días, ya que en uno solo, te será difícil poder contemplar todas sus maravillas.
                                Para recoger toda la información necesaria, podrás elegir entre 4 centros de visitantes que se encuentran dentro del Parque Nacional de Redwood. Existen dos carreteras principales para hacer en coche: Coastal Drive y Howland Hill.
                            </p>
                        </section>
                        <section id='channelisland'>
                            <h3>Channel Island</h3>
                            <p>
                                Channel Island es una reserva marítima conformada por 8 islas ubicadas en el canal de la Costa Oeste. Actualmente está considerada una de las reservas de la biosfera marítima más importantes del mundo. El territorio se extiende desde Santa Bárbara hasta casi llegar a Los Ángeles. El mejor punto para acceder a las islas es desde Ventura. Si te apetece, en este parque podrás avistar ballenas, una actividad altamente recomendable, ya que no todos los días tenemos la oportunidad de ver ballenas grises en su hábito natural.
                                Si quieres visitar Channel Island podrás tomar botes en Ventura y en Santa Bárbara, ya que durante todo el año Island Packers y Truth Aquatics ofrecen barcos que realizan todo tipo de actividades en el Parque Natural. Si no te gusta viajar en barco, tanto en Ventura como en Santa Bárbara, es posible gozar de la vida marítima paseando por la costa o realizando buceo y snorkel en sus fantásticas playas.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ParquesNacionales;