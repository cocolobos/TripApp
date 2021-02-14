import React, {useState} from 'react';
import style from './miami.module.css';
import Nav from '../../../../layout/Nav/Nav';
import Footer from '../../../../layout/Footer/Footer';
import Modal from '../../../Modal/Modal';
import miami from '../../../../pictures/eastcoast/miami.jpg';
import miami1 from '../../../../pictures/eastcoast/miami1.jpg';
import miami2 from '../../../../pictures/eastcoast/miami2.JPG';
import miami3 from '../../../../pictures/eastcoast/miami3.JPG';
import miami4 from '../../../../pictures/eastcoast/miami4.jpg';
import miami5 from '../../../../pictures/eastcoast/miami5.jpg';
import miami6 from '../../../../pictures/eastcoast/miami6.jpg';
import miami7 from '../../../../pictures/eastcoast/miami7.JPG';
import miami8 from '../../../../pictures/eastcoast/miami8.JPG';
import miami9 from '../../../../pictures/eastcoast/miami9.jpg';
import miami10 from '../../../../pictures/eastcoast/miami10.jpg';
import miami11 from '../../../../pictures/eastcoast/miami11.jpg';
import miami12 from '../../../../pictures/eastcoast/miami12.JPG';
import miami13 from '../../../../pictures/eastcoast/miami13.JPG';
import miami14 from '../../../../pictures/eastcoast/miami14.JPG';
import miami15 from '../../../../pictures/eastcoast/miami15.JPG';
import miami16 from '../../../../pictures/eastcoast/miami16.JPG';
import miami17 from '../../../../pictures/eastcoast/miami17.JPG';
import miami18 from '../../../../pictures/eastcoast/miami18.JPG';
import miami19 from '../../../../pictures/eastcoast/miami19.JPG';
import miami20 from '../../../../pictures/eastcoast/miami20.JPG';
import miami21 from '../../../../pictures/eastcoast/miami21.JPG';
import miami22 from '../../../../pictures/eastcoast/miami22.JPG';
import miami23 from '../../../../pictures/eastcoast/miami23.jpg';

function Miami () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Miami</h1>
                <p className={style.introP}>
                    Viajar a Miami ofrece al turista una experiencia multicultural: es una ciudad llena de sabores distintos, gente de todo el mundo, playas hermosas, estilos de música de cualquier tipo… es un lugar lleno de vida y movimiento capaz de cautivar a cualquier visitante.
                    La ciudad de Miami, en el Condado de Dale (Florida), ofrece una gran cantidad de puntos de interés turístico.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Miami" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={miami}></img>
                            <img src={miami1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={miami2}></img>
                            <img src={miami3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={miami4}></img>
                            <img src={miami5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={miami6}></img>
                            <img src={miami7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={miami8}></img>
                            <img src={miami9}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={miami10}></img>
                            <img src={miami11}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={miami12}></img>
                            <img src={miami13}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={miami14}></img>
                            <img src={miami15}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={miami16}></img>
                            <img src={miami17}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={miami18}></img>
                            <img src={miami19}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={miami20}></img>
                            <img src={miami21}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={miami22}></img>
                            <img src={miami23}></img>
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
                                <li><a href='#transport'>Transporte</a></li>
                                <li><a href='#stay'>Hospedaje</a></li>
                                <li><a href='#climate'>Clima</a></li>
                            </ul>
                        </div>
                        <div className={style.pageDesing}>
                            <h2>Que visitar ?</h2>
                            <ul className={style.uList}>
                                <li><a href='#beachesmiami'>Playas de Miami</a></li>
                                <li><a href='#southbeach'>South Beach</a></li>
                                <li><a href='#downtownmiami'>Downtown</a></li>
                                <li><a href='#wyndwood'>Wyndwood Walls</a></li>
                                <li><a href='#lincolnroad'>Lincoln Road</a></li>
                                <li><a href='#keywest'>Key West</a></li>
                                <li><a href='#everglades'>Everglades</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='transport'>
                            <h3>Transporte y como moverse en Miami</h3>
                            <p>
                                El Metrobus es el sistema de autobuses de la ciudad de Miami. Se extiende desde Miami Beach hasta el centro de Miami (Downtown). Cuenta con un montón de autobuses que recorrer varias rutas. La red de bus de Miami conecta con todos los sistemas de transporte público, por lo que es ideal para combinar tus desplazamientos. Tambien es una buena opción para moverse por la noche, ya que el metrobus tiene varias rutas que operan 24h non-stop.
                                El Metrorail es el sistema de trenes elevados de Miami. Recorre un total de 22 millas cruzando la ciudad de norte a sur. Está compuesto por dos líneas (la verde y la naranja). El Metrorail tiene parada en importantes atractivos turísticos tales como Brickell, Coconut Grove, Vizcaya y Downtown.
                                Se trata de unos autobuses con apariencia de vagones de tren que operan varias rutas en Miami Beach de forma gratuita. Es una de las mejores maneras de moverse por esta zona de Miami, ya que a veces encontrar aparcamiento es difícil y caro. El servicio de trolley es totalmente gratis y funciona con una frecuenta de entre 15 y 35 minutos.
                                El Metromover es un sistema automatizado de autobuses que funcionan en bucle y circulan sobre railes. En realidad se parecen mucho a los tranvías. La red de Metromover tiene un recorrido de 5 millas aproximadamente y sólo circula por el centro de Miami. 
                            </p>
                        </section>
                        <section id='stay'>
                            <h3>Hospedaje</h3>
                            <p>
                                Ocupa la zona sur de Miami Beach y es el barrio más famoso y animado de Miami. Esta es, sin duda, la mejor zona donde alojarse en Miami si viajas por primera vez y además quieres vivir la auténtica experiencia de Miami: vida nocturna, grandes extensiones de playa, hoteles con piscina, calles brillantes con carteles de neón, tiendas y centros comerciales. Aquí se encuentran algunas de las playas más famosas de Miami. Como te puedes imaginar, South Beach es la zona más turística de la ciudad.
                                Mid Beach se encuentra justo por encima de South Beach y ocupa la parte central de Miami Beach (formalmente empieza al cruzar la calle comercial de Lincoln Road). Mid Beach es el tramo del lujo: alberga algunos de los hoteles más famosos de Miami y cuenta con una creciente lista restaurantes exclusivos así como de beach clubs. Si te alojas en la zona de Mid Beach también podrás disfrutar de la playa: se trata de una parte menos masificada que South Beach y definitivamente más tranquila.
                                Brickell ocupa la parte sur del Downtown de Miami, por lo que se encuentra a la izquierda de Miami Beach, es decir, en la parte de la ciudad que no tiene playa.
                                Se trata de un barrio financiero, por lo que alberga una gran variedad de instituciones y empresas repartidas en los rascacilos. Por este motivo muchas guías de viaje pasan por alto esta zona, sin embargo, debes saber que es una de las áreas más frescas de Miami.
                                Tanto Brickell como el Downtown son parte del distrito financiero, pero hay bastante diferencia entre las dos zonas que están separadas por el río. La zona del Downtown está muy concurrida duante el día (y sobretodo durante los días laborables) ya que está repleta de rascacielos, centros de negocios, bancos, tiendas y boutiques. Sin embargo, cuando cae la noche y se acaban las jornadas de trabajo, sus calles quedan bastante solitarias a excepción del área alrededor de la NE 11th Street. Allí se concentran discotecas de renomebre internacional: Club Space, BLUME nightclub y el E11EVEN. Si tienes previsto volver tarde a tu hotel, quizás deberías decantarte por buscar hospedaje en Brickell. 
                            </p>
                        </section>
                        <section id='climate'>
                            <h3>Clima</h3>
                            <p>
                                La ciudad de Miami tiene un clima bastante suave: con un clima caluroso y mucho sol. La ciudad se encuentra junto al Océano Atlántico, cosa que le proporciona altos niveles de humedad, incluso en verano la brisa del mar puede ser bastante refrescante. En verano, entre junio y septiembre las temperaturas oscilan entre los 25 y los 30 grados con pocas variaciones, es una temperatura muy constante. En invierno, ambiente y el clima en general, continua siendo bastante suave, con temperaturas medias entre 13 y 25 grados. De todas formas, es importante tener en cuenta que tiene una temporada de lluvias que va de octubre a mayo y una temporada seca de noviembre a abril. Esto hace que el mes más frío del año sea enero y el más caluroso agosto.
                            </p>
                        </section>
                        <section id='beachesmiami'>
                            <h3>Playas en Miami</h3>
                            <p>
                                La playa de South Beach es, seguramente, la playa más famosa de Miami Beach. Es el lugar dónde la gente va a ver o a mostrar sus cuerpos esculturales (recuerda que el bañador no es opcional, aunque el topless está permitido). La playa de South Beach es la playa que hemos visto en las películas y se encuentra en Ocean Drive, al otro lado de la calle que concentra los clubes y las discotecas más concurridas de Miami Beach. Es la zona más concurrida de South Beach y la que hemos visto incontables veces en televisión. El Lummus Park, un parque que se encuentra frente a la playa, es uno de los destinos más populares en Miami y una visita obligada para cualquier turista.
                                El tramo de arena ubicado entre la calle 23 y la 45 es un lugar bastante tranquilo, con menos casetas y menos chiringuitos. También sirve como telón de fondo para algunos de los hoteles más lujosos de la zona y exclusivos beach clubs. El paseo marítimo (Miami Beach Broadwalk) atraviesa el lugar, convirtiéndose en una superficie pavimentada mientras se dirige hacia al sur por la calle 23, por lo que siempre está llena de corredores y patinadores.
                                Una playa muy agradable, menos abarrotada de gente y con un público muy familiar. ¿La parte negativa? La playa no es muy ancha y los edificios de los grandes hoteles de la época de Oro de Miami Beach, parece que se te echen encima. Es más fácil encontrar aparcamiento aquí que en South Beach, pero quizás, la playa no es tan hermosa como en la parte sur.
                                Haulover Beach está ubicada en Miami Beach, entre Sunny Isles Beach y Bal Harbour.  
                                Esta playa es conocida en todo el mundo como la única playa nudista legal de Miami (hay que matizar que solo es nudista la parte norte de la playa). 
                            </p>
                        </section>
                        <section id='southbeach'>
                            <h3>South Beach</h3>
                            <p>
                                South Beach es en realidad un barrio situado al sur del famoso distrito de Miami Beach, ubicado entre Biscayne Bay y el Océano Atlántico. South Beach es un barrio que ha vivido grandes transformaciones y esto se puede observar en el eclecticismo de sus edificios.
                                Una buena idea para disfrutar de South Beach al máximo es caminar por sus calles y avenidas y finalizar el recorrido tomando algo en alguno de sus pubs y bares de moda, porqué se trata de uno de los barrios más glamurosos de Miami.
                                Lo más destacado de South Beach se encuentra en Ocean Drive, por lo que es un buen lugar dónde empezar una ruta turística. Los hoteles que se encuentran entre las calles 6 y 9 de Ocean Drive son los más representativos, dónde abundan la combinación de colores, los flamencos rosados, soles y las luces de neón. Los más destacados son el Cardozo, el Park Central, el Imperial, el Beacon o el Avalon.
                            </p>
                        </section>
                        <section id='downtownmiami'>
                            <h3>Downtown</h3>
                            <p>
                                El centro de la ciudad de Miami, conocida también como Downtown, es un homenaje al boom bancario de los años 80.
                                Una buena manera de disfrutar de las buenas vistas que ofrece la ciudad de Miami es a bordo del Metromover, un pequeño tren que circula alrededor del Downtown por unas vías elevadas y además es gratis.
                                Flagler Street es la arteria principal del centro y es el sitio ideal para conocer el ambiente hispano. En el lugar encontrarás un montón de tiendas, en general de precios bastante accesible.
                                Brickell Avenue se trata del centro financiero de Miami y su tramo principal recuerda a la neoyorquina Wall Street. En la avenida abundan los grandes edificios de cristal que son sede de grandes bancos internacionales. Al sur de la curva que traza Brickell comienza el grupo de edificios que salen en la careta de la serie Corrupción en Miami. Si quieres tomar una panorámica del skyline del Downtown, dirígete al Brickell Bridge, un puente situado en la parte más el este del centro de Miami.
                                Bayside Marketplace es el lugar del Downtown que más turistas atrae. Se trata de un gran complejo comercial y de ocio con un montón de tiendas y boutiques para ir de compras. También abundan las opciones de entretenimiento, una gran vida nocturna y muchos restaurantes dónde comer. Las plazas suelen estar ocupadas por artistas y músicos callejeros, especialmente por las noches y los fines de semana. El Bayside Marketplace bordea el Miamarina, un puerto lleno de barcos amarrados y lugar dónde tomar uno de los cruceros que recorren la bahía Biscayne.
                            </p>
                        </section>
                        <section id='wyndwood'>
                            <h3>Wyndwood Walls</h3>
                            <p>
                                Lo que comenzó como unos murales comisionados para embellecer el área durante el Art Basel, se ha transformado en el único parque de arte callejero al aire libre de Miami, y es que Wynwood Walls cuenta con más de 40 murales de artistas de talla mundial. Los grafitis y pinturas cambian cada año durante el Art Basel, dando la bienvenida a artistas de todo el mundo para crear piezas únicas. Wynwood Walls está abierto al público durante todo el año y la entrada es gratuita. Sin embargo, es posible realizar una visita guiada (que dura 1 hora aproximadamente) para comprender el significado detrás de cada pieza.
                            </p>
                        </section>
                        <section id='lincolnroad'>
                            <h3>Lincoln Road</h3>
                            <p>
                                Lincoln Road Mall es un centro comercial peatonal al aire libre de 1km y medio de largo, ocupando casi todo el ancho de South Beach. Es un lugar fantástico dónde pasar el día, sobre todo si te gustan las compras. En esta calle se reúnen más de 100 tiendas de moda, restaurantes, bares y cafeterías. También puedes ser interesante por la tarde y la noche, pues los restaurantes y bares mantienen a Lincoln Road con ambiente hasta altas horas de la madrugada. 
                            </p>
                        </section>
                        <section id='keywest'>
                            <h3>Key West</h3>
                            <p>
                                Key West es el punto más meridional de los Estados Unidos, y es famoso por los deportes acuáticos, una vida nocturna muy animada, playas mágicas y lugares históricos. En Key West (también conocido como los cayos de Miami) podrás visitar el Duval Street, una calle repleta de tiendas, bares y cafés con mucho ambiente. No puedes perderte la casa-museo de Ernest Hemingway y buscar los famosos gatos de seis dedos. Key West es un lugar increíble de visiar, además, para llegar a este lugar, tendrás que recorrer una larga carretera que flota en medio del océano.
                            </p>
                        </section>
                        <section id='everglades'>
                            <h3>Everglades</h3>
                            <p>
                                El Parque Nacional Everglades es uno de los parques naturales más conocidos por su variedad de fauna salvaje y por albergar especies en peligro de extinción como el cocodrilo americano, la pantera de florida o el manatí antillano.
                                La extensión del parque es de más de 6.000 km2 de ambiente subtropical, por lo que es importante saber que Los Everglades tiene estaciones diferenciadas: la estación húmeda y la seca. La estación húmeda, o de lluvias, no es muy adecuada para realizar una visita al parque ya que muchos de los programas de actividades no se realizan; esta estación es de abril a noviembre. La estación seca, y la más recomendable para visitar el parque, es de noviembre a marzo; en esta temporada es cuando se pueden ver mayor variedad de animales. Para una mejor experiencia de visita recomendamos que uses repelente de mosquitos ya que, al estar rodeados de zonas pantanosas, los mosquitos son insectos abundantes.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Miami;