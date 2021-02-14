import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import style from './newyork.module.css';
import Nav from '../../../../layout/Nav/Nav';
import Footer from '../../../../layout/Footer/Footer';
import Modal from '../../../Modal/Modal';
import ny1 from '../../../../pictures/nyc/ny1.JPG';
import ny2 from '../../../../pictures/nyc/ny2.jpg';
import ny3 from '../../../../pictures/nyc/ny3.jpg';
import ny4 from '../../../../pictures/nyc/ny4.JPG';
import ny5 from '../../../../pictures/nyc/ny5.jpg';
import ny6 from '../../../../pictures/nyc/ny6.jpg';
import ny7 from '../../../../pictures/nyc/ny7.jpg';
import ny8 from '../../../../pictures/nyc/ny8.JPG';
import ny9 from '../../../../pictures/nyc/ny9.jpg';
import ny10 from '../../../../pictures/nyc/ny10.JPG';

function NewYork () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>New York City</h1>
                <p className={style.introP}>
                    ¿Te gustaria viajar a la Gran Manzana? Nueva York es una de los ciudadaes más reconocidas en todo el mundo, ya sea porque es el hogar de muchas estrellas, por los eventos deportivos que puedes disfrutar, por la enorme cantidad de lugaares para visitar, por la cantidad de turistas de todos los lugares del mundo o porque es la zona de miles de historias y sede de tantas obras de arte que han ocurrido aqui a lo largo de la historia, entre muchas otras cosas.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="New York City" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={ny1}></img>
                            <img src={ny2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={ny3}></img>
                            <img src={ny4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={ny5}></img>
                            <img src={ny6}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={ny7}></img>
                            <img src={ny8}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={ny9}></img>
                            <img src={ny10}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <button className={style.BtnModCancel} onClick={() => setOpenModal(false)}>Close</button>
                        </div>
                    </Modal>
                <div className={style.pageStyle}>
                    <div className={style.sideBar}>
                        <div className={style.pageDesing}>
                            <h2>Datos importantes</h2>
                            <ul className={style.uList}>
                                <li><a href='#climate'>Clima</a></li>
                                <li><a href='#curiosity'>Curiosidades</a></li>
                                <li><a href='#transport'>Transporte</a></li>
                                <li><a href='#stay'>Hospedaje</a></li>
                            </ul>
                        </div>
                        <div className={style.pageDesing}>
                            <h2>Que Visitar ?</h2>
                            <ul className={style.uList}>
                                <Link to='/manhattan'>
                                    <li className={style.liElement}>Manhattan</li>
                                </Link>
                                <Link to='/finantial'>
                                    <li className={style.liElement}>Finaltial Distric</li>
                                </Link>
                                <Link to='/centralpark'>
                                    <li className={style.liElement}>Central Park</li>
                                </Link>
                                <Link to='/neighbor'>
                                    <li className={style.liElement}>Barrios Pintorescos</li>
                                </Link>
                                <Link to='/brooklyn'>
                                    <li className={style.liElement}>Brooklyn</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='climate'>
                            <h3>Clima</h3>
                            <p>
                                Se dice de Nueva York es una de las ciudades que mejor marcada tiene sus 4 estaciones del año. Empezando por las temperaturas, el clima de Nueva York es bastante templado, sin duda la cercanía del mar ayuda a que los inviernos no sean demasiado fríos y los veranos no sean muy calurosos, eso si la humedad hace que el frío se te meta en los huesos y los días de calor sean muy bochornosos.
                                Los meses más fríos del año son de Diciembre a Marzo, en donde de vez en cuando te puede caer una nevada, e incluso puede que cuaje la nieve y puedas realizar muñecos de nieve en los parques como en la High Line, y los meses más calurosos son Julio y Agosto, con temperaturas de 35ºC o más con un 90% de humedad en los días de más calor.
                            </p>
                        </section>
                        <section id='curiosity'>
                            <h3>Curiosidades</h3>
                            <p>
                                Nueva York es una ciudad enorme que todo lo tiene, edificios y rascacielos enormes, barrios con casas pequeñas mas alejados, sistema de subte y a la vez transporte de autobus, gran cantidad de parques si tus preferencias son las actividades mas al aire libre, tiene una bahia impresionante para recorrer y tomar fotos de la ciudad que te resultaran impactantes, tiene puentes que cruzan el rio y puedes recorrer algunos a pie, la ciudada tambien cuenta con gran cantidad de museos si prefieres algo un poco historico y relajado.
                                A su vez cuenta con la famosa 5th Avenue reconocida mundialmente por su enorme cantidad de tiendas de primera marca a lo largo de la misma, las mejores marcas y sus ultimos diseños estan disponibles a la venta ahi mismo, como olvidar del famoso Times Square esa plaza que has visto tantas veces en peliculas donde es todo luces, tiendas, restaurantes, fotos, artisticas callejeros y muchisimo mas!
                                Nueva York es la ciudad que todo lo tiene y que se adapta a todos los gustos que uno pueda tener tanto en lugares para visitar como en actividades para hacer.
                            </p>
                        </section>
                        <section id='transport'>
                            <h3>Transporte y como moverse en Nueva York</h3>
                            <p>
                                La isla de Manhattan suele ser caotica para trasladarse con transporte publico debido a la cantidad de gente que habita o que viaja por diferentes motivos a la isla. Sin embargo la mejor manera de recorrerla es a traves del sistema de subtes que posee la ciudad, es efectivo, seguro y no es para nada dificil de ubicarse para realizar combinaciones de lineas.
                                Por la parte terrestre tienes el sistema de autobus y taxis lo cual suele ser bastante problematico por el trafico (repito es un lugar que tiene DEMASIADA gente).
                                Indudablemente mi consejo es que la mejor manera de recorrerla es caminando, organizar dia a dia un sector diferente de la isla, tomar el subte que mas comodo te quede de acuerdo a tu planificacion, y a partir de ahi aprovechar para caminar y recorrer una ciudad que jamas te cansaras de visitar.
                            </p>
                        </section>
                        <section id='stay'>
                            <h3>Hospedaje</h3>
                            <p>
                                El hospedaje no suele ser economico si quieres ubicarte en el centro tienes muchas opciones pero son de las mas costosas por otra parte si deseas alojarte en algun sector mas alejado del centro la recomendacion siempre es buscar algo que tenga bocas de subte cerca ya que es la mejor manera de moverse y de llegar rapidamente a cualquier lugar de la isla.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NewYork;