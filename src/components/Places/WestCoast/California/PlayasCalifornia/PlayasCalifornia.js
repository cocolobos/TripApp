import React, {useState} from 'react';
import style from './playasCalifornia.module.css';
import Nav from '../../../../../layout/Nav/Nav';
import Footer from '../../../../../layout/Footer/Footer';
import Modal from '../../../../Modal/Modal';
import lbeach2 from '../../../../../pictures/California/lbeach2.jpg';
import lbeach3 from '../../../../../pictures/California/lbeach3.jpg';
import lbeach4 from '../../../../../pictures/California/lbeach4.jpg';
import malibu from '../../../../../pictures/California/malibu.jpg';
import malibu2 from '../../../../../pictures/California/malibu2.jpg';
import malibu3 from '../../../../../pictures/California/malibu3.jpg';
import malibu4 from '../../../../../pictures/California/malibu4.jpg';
import laguna from '../../../../../pictures/California/laguna.jpg';
import laguna2 from '../../../../../pictures/California/laguna2.jpg';
import laguna3 from '../../../../../pictures/California/laguna3.jpg';
import barbara2 from '../../../../../pictures/California/barbara2.jpg';
import barbara3 from '../../../../../pictures/California/barbara3.jpg';
import diego from '../../../../../pictures/California/diego.jpg';
import diego2 from '../../../../../pictures/California/diego2.jpg';
import diego3 from '../../../../../pictures/California/diego3.jpg';
import diego4 from '../../../../../pictures/California/diego4.jpg';

function PlayasCalifornia () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Playas Californianas</h1>
                <p className={style.introP}>
                    Si lo que te gusta realmente es la playa y estar tranquilo al sol disfrutando de paisajes naturales y hermosos negocios por la zona costera, aqui enumero alguna de las mejores propuestas para que tengas en cuenta a la hora de elegir tu destino playero.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Playas Californianas" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={laguna3}></img>
                            <img src={lbeach2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={lbeach3}></img>
                            <img src={lbeach4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={malibu}></img>
                            <img src={malibu2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={malibu3}></img>
                            <img src={malibu4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={laguna}></img>
                            <img src={laguna2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={barbara2}></img>
                            <img src={barbara3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={diego}></img>
                            <img src={diego2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={diego3}></img>
                            <img src={diego4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <button className={style.BtnModCancel} onClick={() => setOpenModal(false)}>Close</button>
                        </div>
                    </Modal>
                <div className={style.pageStyle}>
                    <div className={style.sideBar}>
                        <div className={style.pageDesing}>
                            <h2>Mejores Ciudades con Playa</h2>
                            <ul className={style.uList}>
                                <li><a href='#longbeach'>Long Beach</a></li>
                                <li><a href='#malibu'>Malibu</a></li>
                                <li><a href='#lagunabeach'>Laguna Beach</a></li>
                                <li><a href='#santabarbara'>Santa Barbara</a></li>
                                <li><a href='#sandiego'>San Diego</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='longbeach'>
                            <h3>Long Beach</h3>
                            <p>
                                Un lugar interesante que visitar en Long Beach es Queen Mary, un crucero grandioso de medianos del siglo XX que dejó de funcionar en 1967.
                                A día de hoy este famoso barco alberga un museo, un hotel y varios restaurantes en su interior. Instalado en el puerto Long Beach, se ha convertido en el atractivo turístico por excelencia. Es recomendable para aquellos viajeros que les guste imaginarse como era un barco de cruceros de medianos del siglo XX con todos los lujos.
                                La ciudad de Long Beach goza de una inmensa playa que lleva el mismo nombre de la ciudad.
                                Es una playa agradable con todos los servicios y a diferencia de las playas de Los Ángeles, estas acostumbran a estar menos cargadas de gente. El surf también es muy famoso en Long Beach, ya que se dice que es el lugar dónde nació la pasión por la tabla en el Estado de California. De todos modos, actualmente está prohibido practicar surf en Long Beach, ya que se ha instalado un rompe olas para dar más seguridad a los barcos de la Marina estadounidense. Por esta razón es una playa ideal para las familias, ya que no hay peligro de olas. 
                            </p>
                        </section>
                        <section id='malibu'>
                            <h3>Malibu</h3>
                            <p>
                                Si visitas la ciudad de Malibú, merece la pena llegar hasta ella recorriendo la carretera costera que va de Los Ángeles a Malibú, ya que su paisaje ofrece unas vistas increíbles.
                                Una vez hayas llegado a Malibú, recomendamos que no te limites solamente a visitar las playas, sino que aproveches para pasear por los montes que rodean la región ya que se trata de un entorno natural impresionante. La mezcla de montaña y playas crean un paisaje exótico y diferente.
                            </p>
                        </section>
                        <section id='lagunabeach'>
                            <h3>Laguna Beach</h3>
                            <p>
                                Laguna Beach es una de las playas más concurridas de California, ya que ofrece una gran cantidad de ocio dedicado al turismo. Aunque no esté posicionada entre las playas más bonitas de California, en Laguna Beach siempre hay sol y un montón de servicios y actividades esperando para complacerte. Además, aquí se practica cualquier tipo de deporte acuático que exista. Esta es una playa ideal para ir a disfrutar un fin de semana en familia o con amigos.
                            </p>
                        </section>
                        <section id='santabarbara'>
                            <h3>Santa Barbara</h3>
                            <p>
                                Situada a 150 kilómetros al norte de Los Angeles, al pie de las montañas de Santa Ynez, Santa Bárbara ofrece una bella playa de características similares a la de Santa Mónica, con largo embarcadero incluido, pero con bastante menos gente.
                                Y además de visitar atracciones naturales como el Jardín Botánico o su famoso Jardín Zoológico,  desde Santa Bárbara puedes hacer excursiones a las zonas vinícolas de la zona, como en el Valle Santa Ynez, para degustar el famoso vino de California.
                                También puedes hacer un crucero en barco para ver ballenas en los parajes naturales de las Islas Canales, o acercarte al curioso pueblo danés de Solvang.
                            </p>
                        </section>
                        <section id='sandiego'>
                            <h3>San Diego</h3>
                            <p>
                                San Diego es la octava ciudad más grande de los Estados Unidos y podría tratarse de un buen destino para tu próximo viaje: sol, playas, naturaleza, cultura… y posibilidad de hacer actividades al aire libre en cualquier momento del año.
                                Disfruta de los más de 110 km de costa. Avista ballenas. Descubre cuevas desde un kayak. Explora las pozas de marea. Surfea la ola perfecta. Prueba comida mexicana o cerveza artesanal. Piérdete por parajes naturales asombrosos. 
                                Con sus más de 110 km de costa, San Diego es sin duda uno de los destinos playeros y surferos de Estados Unidos. No te pierdas playas como Coronado Beach, las de La Jolla, Pacific Beach, Mission Beach… Te hablamos de las mejores en nuestro artículo de playas en San Diego y en el de surfear en San Diego. 
                                Balboa Park, situado cerca del Downtown, es un lugar imprescindible de visitar en San Diego. Con 486 hectáreas, se trata del parque cultural urbano más grande de América del Norte, por delante del Central Park de Nueva York. Además, es el centro cultural de la ciudad: contiene teatros, arquitectura hispano-renacentista, un gran órgano al aire libre, un centro de artesanos y ¡17 museos! Allí también podrás ver el Zoológico de San Diego y los jardines botánicos, ambos de renombre mundial. Es interesante visitar el parque en segway.
                                Espectaculares acantilados, vegetación virgen, cuevas, arcos naturales, pozas… El parque natural de Sunset Cliffs es el mejor lugar en San Diego para ver la puesta de sol y para tomar vistas del océano. Con un tamaño de 27 hectáreas, está situado en la parte oeste de la península de Point Loma, a unos 14 km del centro de la ciudad. Es un sitio interesante para excursionistas, surfistas y observadores de aves. Entre diciembre y abril, incluso es posible que puedas avistar ballenas grises.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PlayasCalifornia;