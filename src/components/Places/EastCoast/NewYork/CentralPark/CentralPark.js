import React, {useState} from 'react';
import style from './centralPark.module.css';
import Nav from '../../../../../layout/Nav/Nav';
import Footer from '../../../../../layout/Footer/Footer';
import Modal from '../../../../Modal/Modal';
import central from '../../../../../pictures/nyc/central/central.jpg';
import central1 from '../../../../../pictures/nyc/central/central1.jpg';
import central2 from '../../../../../pictures/nyc/central/central2.JPG';
import central3 from '../../../../../pictures/nyc/central/central3.jpg';
import central4 from '../../../../../pictures/nyc/central/central4.jpg';
import central5 from '../../../../../pictures/nyc/central/central5.JPG';
import central6 from '../../../../../pictures/nyc/central/central6.jpg';
import central7 from '../../../../../pictures/nyc/central/central7.JPG';
import central8 from '../../../../../pictures/nyc/central/central8.jpg';
import central9 from '../../../../../pictures/nyc/central/central9.jpg';
import central10 from '../../../../../pictures/nyc/central/central10.jpg';
import central11 from '../../../../../pictures/nyc/central/central11.JPG';
import central12 from '../../../../../pictures/nyc/central/central12.jpg';
import central13 from '../../../../../pictures/nyc/central/central13.JPG';
import central14 from '../../../../../pictures/nyc/central/central14.jpg';
import central15 from '../../../../../pictures/nyc/central/central15.jpg';

function CentralPark () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Central Park</h1>
                <p className={style.introP}>
                    ¿Por dónde empezar a visitar Central Park? Habrás visto tantas veces el parque en la gran pantalla, que parece que forme parte de un decorado, ¿verdad?
                    Pero el pulmón verde de Nueva York es tal y como lo imaginas: tranquilo, lleno de rinconcitos, romántico… ¡y gigantesco! Las distancias son largas, y las opciones para olvidar la ciudad por unas horas, infinitas. Es sensacional poder visitar el Central Park en diferentes estaciones del año, impactante los kilometros y kilometros de nieve en invierno luego de una nevada, asi como tambien verde y lleno de vida durante el verano y la primavera, ideal para un buen picnic al aire libre.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Central Park" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={central}></img>
                            <img src={central1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={central2}></img>
                            <img src={central3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={central4}></img>
                            <img src={central5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={central6}></img>
                            <img src={central7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={central8}></img>
                            <img src={central9}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={central10}></img>
                            <img src={central11}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={central12}></img>
                            <img src={central13}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={central14}></img>
                            <img src={central15}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <button className={style.BtnModCancel} onClick={() => setOpenModal(false)}>Close</button>
                        </div>
                    </Modal>
                <div className={style.pageStyle}>
                    <div className={style.contentDesing}>
                        <section id='climate'>
                            <h3>Curiosidades</h3>
                            <p>
                                Central Park se extiende entre las calles 59 y 110, de sur a norte, y entre la 5ª Avenida y Central Park West (lo que sería la 8ª Avenida), de este a oeste. Mide 0,8 km de ancho y 4 km de largo.
                                Forma parte de la zona de Manhattan conocida como Uptown, es decir, lo que queda al norte de la calle 59.
                                Al este de Central Park encontrarás el barrio del Upper East Side; al oeste, el Upper West Side, y al norte, el Harlem.
                                El terreno donde se encuentra Central Park era pantanoso y estaba lleno de montículos rocosos.
                                Tuvieron que desalojar a los más de 1.600 vecinos que vivían en la zona, drenar el terreno, quitar toneladas y toneladas de piedra para allanarlo, cambiar la tierra por una más fértil, plantar millones de árboles y plantas, construir lagos artificiales.
                                Hoy, Central Park es el parque urbano más visitado del mundo. La parte favorita de los viajeros es el sur del parque, donde se encuentran los puentes, lagos y rincones más emblemáticos.

                            </p>
                        </section>
                        <section id='curiosity'>
                            <p>
                                Entra a Central Park por la esquina sureste y pasea junto al estanque The Pond hasta llegar al pintoresco Gapstow Bridge.
                                Como telón de fondo, tendrás unas bonitas vistas de los rascacielos y el hotel Plaza que contrastan con el puentecito rodeado de vegetación.
                                La siguiente parada es la pista de patinaje sobre hielo más famosa de Central Park, la Wollman Rink, conocida también como Trump Rink. ¡En Navidades está siempre llena!
                                Si visitas el parque en primavera o verano, allí encontrarás una feria con atracciones para los más peques, los Victorian Gardens.
                                Pronto llegarás al famoso paseo arbolado The Mall, lleno de esculturas literarias, puestos de recuerdos y artistas. ¡Seguro que te suena de un montón de pelis!
                                Estatua de las sufragistas. Una de las esculturas más importantes del Mall es la Women’s Rights Pioneer Monument, que muestra a tres mujeres, Susan B. Anthony, Sojourner Truth y Elizabeth Cady Stanton, que lucharon por los derechos de las mujeres.
                                La fuente más famosa de Central Park está coronada por un ángel y situada en un entorno idílico frente a The Lake, el lago del parque. El túnel, donde suele haber músicos tocando, es un lugar mágico.
                            </p>
                        </section>
                        <section id='transport'>
                            <p>
                                En el extremo este del lago de Central Park se levanta el Loeb Boathouse, un restaurante a orillas del agua. ¿Te animas a alquilar un barco de remos para navegar por The Lake? El embarcadero está junto al restaurante.
                                Sigue caminando hacia el este y llegarás a uno de nuestros rincones favoritos de Central Park, el estanque circular Conservatory Water. En los meses de buen tiempo, puedes alquilar un barquito teledirigido y hacerlo navegar por las aguas. En esta zona hay baños y, en los meses de buen tiempo, una cafetería con terraza.
                                ordea el lago hasta el sur y sigue las indicaciones para llegar a Strawberry Fields, el homenaje a John Lennon en Central Park.
                                Se encuentra cerca del edificio Dakota, donde el músico murió asesinado, y lleva el nombre de una de sus canciones (Strawberry Fields Forever).
                                Los Strawberry Fields son un prado, pero en el suelo hay un famoso mosaico con la palabra Imagine donde suele haber músicos tocando canciones de los Beatles. La sensacion generada al pasar por alli es verdaderamente impresionante.
                            </p>
                        </section>
                        <section id='stay'>
                            <p>
                                El Belvedere Castle, un  pequeño castillo construido en 1869 que hoy es una estación meteorológica. Entrar es gratis y puedes subir a las terrazas para disfrutar de las vistas de Central Park, con el Turtle Pond, un estanque lleno de tortugas, en primer plano.
                                Aunque, para ver de cerca a las tortugas, lo mejor es que te acerques al mirador que encontrarás en la parte norte del estanque, que también tiene muy buenas vistas del Belvedere Castle.
                                Por el camino, pasarás junto al teatro al aire libre Delacorte, donde en verano se representa el famoso festival Shakespeare in the Park.
                                En este momento, te encuentras a la altura de dos de los museos más importantes de Nueva York: el Museo de Historia Natural (en el extremo oeste del parque) y el Museo Met (en el este). Si te apetece, es un buen momento para visitar uno de ellos.
                            </p>
                        </section>
                        <section id='requirements'>
                            <p>
                                El extremo noroeste comienza paseando a orillas de este sosegado lago y fíjate bien en el agua, ¡suele estar repleta de tortugas! Al norte tienes el centro de visitantes Charles A. Dana Discovery Center, con información y baños. Al suroeste está el Lasker Rink, una zona con pista de patinaje sobre hielo en invierno y piscina pública en verano.
                                Pasea hacia el sur y encontrarás uno de nuestros lugares favoritos de Central Park (sobre todo en primavera y verano), un trío de jardines llamados Conservatory Garden.
                                En el jardín norte te espera la fuente Untermyer Fountain, con la famosa estatua de tres jóvenes bailando alrededor del agua.
                                En el centro, un mirador con una pérgola ofrece sombras y rincones donde leer o descansar. En el sur, entre flores y árboles, la fuente Burnett Fountain preside un estanque de nenúfares.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CentralPark;