import React, {useState} from 'react';
import style from './finantialDistric.module.css';
import Nav from '../../../../../layout/Nav/Nav';
import Footer from '../../../../../layout/Footer/Footer';
import Modal from '../../../../Modal/Modal';
import fd from '../../../../../pictures/nyc/finan/fd.jpg';
import fd1 from '../../../../../pictures/nyc/finan/fd1.jpg';
import fd2 from '../../../../../pictures/nyc/finan/fd2.jpg';
import fd3 from '../../../../../pictures/nyc/finan/fd3.jpg';
import fd4 from '../../../../../pictures/nyc/finan/fd4.JPG';
import fd5 from '../../../../../pictures/nyc/finan/fd5.jpg';
import fd6 from '../../../../../pictures/nyc/finan/fd6.jpg';
import fd7 from '../../../../../pictures/nyc/finan/fd7.jpg';
import fd8 from '../../../../../pictures/nyc/finan/fd8.JPG';
import fd9 from '../../../../../pictures/nyc/finan/fd9.JPG';
import fd10 from '../../../../../pictures/nyc/finan/fd10.JPG';
import fd11 from '../../../../../pictures/nyc/finan/fd11.JPG';
import fd12 from '../../../../../pictures/nyc/finan/fd12.jpg';
import fd13 from '../../../../../pictures/nyc/finan/fd13.JPG';
import fd14 from '../../../../../pictures/nyc/finan/fd14.JPG';
import fd15 from '../../../../../pictures/nyc/finan/fd15.JPG';
import fd16 from '../../../../../pictures/nyc/finan/fd16.JPG';
import fd17 from '../../../../../pictures/nyc/finan/fd17.JPG';
import fd18 from '../../../../../pictures/nyc/finan/fd18.JPG';
import fd19 from '../../../../../pictures/nyc/finan/fd19.jpg';

function FinantialDistric () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Finantial Distric</h1>
                <p className={style.introP}>
                    Aunque aparece en todas las guías, el Distrito Financiero de Nueva York es una de esas zonas por las que solemos pasar sin ser concientes de donde estamos.
                    Pero el Financial District, con sus callejuelas estrechas flanqueadas por edificios colosales, tiene rincones encantadores que rebosan historia.
                    El Distrito Financiero es un barrio situado entre el extremo sur de Manhattan y el puente de Brooklyn, más o menos.
                    Ocupa toda la punta sur de la isla a excepción del parque Battery Park y el barrio de Battery Park City, a orillas del río Hudson.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Finantial Distric" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={fd}></img>
                            <img src={fd1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={fd2}></img>
                            <img src={fd3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={fd4}></img>
                            <img src={fd5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={fd6}></img>
                            <img src={fd7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={fd8}></img>
                            <img src={fd19}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={fd9}></img>
                            <img src={fd10}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={fd11}></img>
                            <img src={fd12}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={fd13}></img>
                            <img src={fd14}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={fd15}></img>
                            <img src={fd16}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={fd17}></img>
                            <img src={fd18}></img>
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
                                <li><a href='#wallstreet'>Wall Street</a></li>
                                <li><a href='#bowling'>Bowling Green</a></li>
                                <li><a href='#statueliberty'>Statue of Liberty</a></li>
                                <li><a href='#worldtradecenter'>World Trade Center</a></li>
                                <li><a href='#southferry'>South Ferry</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='wallstreet'>
                            <h3>Wall Street</h3>
                            <p>
                                Wall Street marcaba la frontera de la ciudad. Hay varias teorías sobre el origen del nombre (‘wall’, en inglés, significa ‘muro’, pero, en holandés, ‘waal’ significa ‘valón’).
                                Lo que sí sabemos es que, en 1653, cuando Nueva Ámsterdam se convirtió en ciudad, los holandeses mandaron construir (a los esclavos africanos, probablemente) una muralla defensiva de madera en lo que hoy es Wall St.
                                El barrio se convirtió en el corazón financiero de la ciudad, hogar de todas las entidades, bancos y de la poderosa Bolsa de Nueva York.
                                El Distrito Financiero es un barrio mucho más comercial que residencial. De día, el bullicio de trabajadores lo convierte en una zona sin pausa; de noche y los fines de semana, cuando se marchan a sus hogares, las calles están casi desiertas y muchos negocios cierran.
                            </p>
                        </section>
                        <section id='bowling'>
                            <h3>Bowling Green</h3>
                            <p>
                                El pobre animal, que suele asociarse al poder de la zona, está siempre abarrotado de turistas sacándole fotos y tocándole las partes nobles (la tradicion indica que es un augurio para regresar a la ciudad). ¡Qué paciencia!
                                Si tú no tienes tanta, recuperarás la calma en el parque vecino, el Bowling Green, el parque público más antiguo de Nueva York. Y allí mismo, en un espectacular edificio histórico, encontrarás el National Museum of the American Indian, un museo gratuito dedicado a las culturas nativas de América.
                            </p>
                        </section>
                        <section id='statueliberty'>
                            <h3>Statue of Liberty</h3>
                            <p>
                                ¿Ves la Estatua de la Libertad desde sus plácidos jardines junto al río? Allí encontrarás también Castle Clinton, un fuerte histórico construido para defender el puerto de Nueva York que más tarde sirvió de puerta de entrada para millones de inmigrantes.
                                Puedes comprar el boleto en el Battery park y luego tomar el ferry que te dirije a Staten Island para visitar a posiblemente la mujer mas fotografiada de toda la historia "La Estatua de la Libertad", a su vez el ferry tambien te permitira desembarcar en Ellis Island y su museo.
                            </p>
                        </section>
                        <section id='worldtradecenter'>
                            <h3>World Trade Center</h3>
                            <p>
                                El nuevo World Trade Center surge como sustituto al anterior complejo destruido en los ataques terroristas del 11 de Septiembre de 2001.
                                El nuevo World Trade Center, está formado por cinco edificios, una terminal de transporte para pasajeros, y un Memorial y un museo en recuerdo a las víctimas de los atentados del 11/S. El complejo está presidido por el edificio más alto del hemisferio occidental con 1776 pies de altura (541.3 metros) bautizado como La Torre de la Libertad (The Freedom Tower) o más popularmente como One World Trade Center. La torre está ubicada en el extremo noroeste del complejo e incorpora la más alta tecnología en diseño, construcción y seguridad.
                                El nuevo Centro de Transportes del World Trade Center es un espectacular proyecto que supondrá una importante mejora en las conexiones de transporte masivo en toda la región, conectando 13 líneas de metro y tren, y dando servicio a 250.000 personas al día. Este complejo de transportes de más de 74.000 metros cuadrados repartidos en tres plantas, tendrá un vestíbulo principal de 111 metros de largo y una altura en el punto más alto de 35 metros. La estructura externa tiene forma de alas con una gran claraboya en su base en forma de gran ojo llamada Oculus.
                                El centro comercial del World Trade Center cuenta con más de 100 tiendas y negocios de restauración. El centro comercial se encuentra bajo el complejo World Trade Center y el Oculus.
                                El Memorial es un homenaje a las 2.982 personas que murieron en los ataques terroristas del 26 de febrero de 1993 y del 11 de septiembre de 2001 en el World Trade Center, además de Pensilvania y el Pentágono.
                                El monumento está compuesto por dos piscinas ubicadas exactamente en el mismo lugar en el que estaban las Torres Gemelas y una plaza adoquinada adornada con más de 400 árboles caducifolios alrededor. Las piscinas de 4.000 metros cuadrados de superficie y 9 metros de profundidad, están alimentadas por cascadas de agua en sus paredes y con los nombres de las víctimas grabadas alrededor en bronce. El Memorial fue inaugurado el 11 de septiembre de 2011, durante la ceremonia del 10º aniversario de los atentados del 11/S.
                            </p>
                        </section>
                        <section id='southferry'>
                            <h3>South Ferry</h3>
                            <p>
                                El ferry se coge en las inmediaciones del metro de Whitehall Street. Allí, justo enfrente del metro está la estación de ferries a Staten island.
                                El ferry da un paseo por el Hudson, pasando muy cerca del puente de Verrazano, donde comienza la maratón de Nueva York, y de la estatua de la Libertad, por lo que es la alternativa ideal para todos aquellos que quieran ver la Estatua de la Libertad y se quieran evitar la cola de 2-3 horas en Battery Park para coger el ferry a la isla de la Libertad, que desde mi punto de vista es mucho menos interesante que este ferry, y más desde el 11-S a partir del cual las visitas al interior de la estatua de la Libertad han sido muy restringidas o incluso no se permiten.
                                El viaje desde Nueva York comienza ofreciéndonos unas bonitas vistas del puente de Brooklyn y del distrito financiero de Manhattan. Al poco tiempo, pasamos por Ellis island dejando atrás New Jersey, para sin remisión pasar justo por delante de la Estatua de la Libertad. Al cabo de unos 15 minutos de viaje, llegaremos a Staten Island dejando a la izquierda el impresionante puente de Verrazano.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default FinantialDistric;