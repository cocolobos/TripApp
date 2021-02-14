import React, {useState} from 'react';
import style from './parquestematicos.module.css';
import Nav from '../../../../../layout/Nav/Nav';
import Footer from '../../../../../layout/Footer/Footer';
import Modal from '../../../../Modal/Modal';
import disney from '../../../../../pictures/California/disney.jpg';
import disney2 from '../../../../../pictures/California/disney2.jpg';
import disney3 from '../../../../../pictures/California/disney3.jpg';
import disney4 from '../../../../../pictures/California/disney4.jpg';
import universal1 from '../../../../../pictures/California/universal1.jpg';
import universal2 from '../../../../../pictures/California/universal2.jpg';
import universal3 from '../../../../../pictures/California/universal3.jpg';
import universal4 from '../../../../../pictures/California/universal4.jpg';
import sixflags from '../../../../../pictures/California/sixflags.jpg';
import sixflags2 from '../../../../../pictures/California/sixflags2.jpg';

function ParquesTematicos () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Parques Tematicos</h1>
                <p className={style.introP}>
                    Si vas de turismo a California y tienes pensado visitar alguno de sus parques temáticos, verás que tienes un montón de opciones para elegir. Como verás los tiquetes de entrada a los parques temáticos de California son bastante caros, aunque a veces hay algunos descuentos si los compras por internet. Eso sí, si decides comprar la entrada vía online, hazlo a través de la web oficial del parque. Otra opción que te puede servir para obtener descuentos es comprar tarjetas como el CityPass, de todas formas, esta elección solo te compensará si visitas más de un parque de atracciones.
                    Con la tarjeta CityPass podrás visitar: 3 días en los dos parques de Disneyland Park en Anaheim, Universal Studios Hollywood, SeaWorld San Diego y podrás elegir entre el Zoo de San Diego, el Safari Park o Legoland. El precio total es de 331$ para los adultos. El precio es elevado, pero vale la pena si tienes pensado visitar como mínimo tres de estos parques.
                    Los parques de atracciones de California acostumbran a estar repletos de turistas, por esta razón te aconsejamos hacer una reserva del alojamiento con antelación, ya que si no te será imposible pasar la noche cerca de los parques o dentro de ellos.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Los Angeles" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={disney}></img>
                            <img src={disney2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={disney3}></img>
                            <img src={disney4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={universal1}></img>
                            <img src={universal2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={universal3}></img>
                            <img src={universal4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={sixflags}></img>
                            <img src={sixflags2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <button className={style.BtnModCancel} onClick={() => setOpenModal(false)}>Close</button>
                        </div>
                    </Modal>
                <div className={style.pageStyle}>
                    <div className={style.sideBar}>
                        <div className={style.pageDesing}>
                            <h2>Parques Tematicos</h2>
                            <ul className={style.uList}>
                                <li><a href='#disneyanaheim'>Disneylad Anaheim</a></li>
                                <li><a href='#universal'>Universal Studios Hollywood</a></li>
                                <li><a href='#beverly'>Six Flags Magic Mountain</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='disneyanaheim'>
                            <h3>Disneylad Anaheim</h3>
                            <p>
                                Este gran complejo de Disneyland en California está situado en Anaheim a tan solo media hora del centro de Los Ángeles. El recinto está formado por dos parques temáticos (Disneyland Park y Disney California Adventure), centros comerciales y hoteles.
                                Disneyland Park fue construido en 1955 y con el paso del tiempo ha ido cambiando notablemente des de sus inicios hasta día de hoy. De todas formas, las atracciones más míticas se han querido conservar, como por ejemplo el ferrocarril de Disneyland. Este parque tiene 57 atracciones y un sinfín de espectáculos nocturnos muy elaborados.
                                Disney California Adventure conforma junto a Disneyland Park el gran resort de Disney. Este parque temático fue creado en 2001 y en poco tiempo se ha convertido en uno de los lugares más visitados de EUA. Se podría definir como la versión para adultos de Disneyland, ya que hay muchas de las atracciones fuertes, aunque el área infantil también está bien ambientada. Debido a la proximidad con Hollywood, este parque temático está centrado sobre todo en el mundo de las películas, y, por lo tanto, sus espectáculos en vivo son brillantes.
                            </p>
                        </section>
                        <section id='universal'>
                            <h3>Universal Studios Hollywood</h3>
                            <p>
                                Este parque de atracciones está situado en medio de Hollywood y es un lugar impresionante para poder revivir las grandes películas de la historia. Aquí disfrutaran tanto los adultos como los niños. Universal Studios es un parque de atracciones un poco distinto a los demás, ya que no se trata solo de subir y bajar atracciones, sino que también permite descubrir el mundo del cine.
                                Muchas de sus atracciones juegan con imágenes 3D recordando viejas películas conocidas internacionalmente. Seguramente la atracción más conocida del parque es el Studio tour, dónde mediante un recorrido en tren van apareciendo escenarios y escenas en 3D de míticas películas del cine.
                            </p>
                        </section>
                        <section id='beverly'>
                            <h3>Six Flags Magic Mountain</h3>
                            <p>
                                El parque Six Flags tiene un montón de atracciones para todas las edades, pero su temática está pensada sobre todo para adultos, ya que es el parque con las atracciones más fuertes de toda California. Se hizo famoso por sus impresionantes montañas rusas, como por ejemplo Lex Luthor, que tiene la caída vertical más alta del mundo o el Batman The Ride, en la que das un giro en el aire de 360º.
                                Si vas a Six Flags Magic Mountain con niños les encantará la parte del maravilloso mundo de Bugs Bunny, dónde hay un montón de atracciones y montañas rusas para los más pequeños.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ParquesTematicos;