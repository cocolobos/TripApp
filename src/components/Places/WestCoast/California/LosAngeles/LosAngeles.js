import React, {useState} from 'react';
import style from './losangeles.module.css';
import Nav from '../../../../../layout/Nav/Nav';
import Footer from '../../../../../layout/Footer/Footer';
import Modal from '../../../../Modal/Modal';
import beverly from '../../../../../pictures/California/beverly.jpg';
import beverly2 from '../../../../../pictures/California/beverly2.jpg';
import beverly3 from '../../../../../pictures/California/beverly3.jpg';
import hollywood3 from '../../../../../pictures/California/hollywood3.jpg';
import hollywood4 from '../../../../../pictures/California/hollywood4.jpg';
import hollywood5 from '../../../../../pictures/California/hollywood5.jpg';
import losangeles4 from '../../../../../pictures/California/losangeles4.jpg';
import losangeles5 from '../../../../../pictures/California/losangeles5.jpg';
import losangeles6 from '../../../../../pictures/California/losangeles6.jpg';
import losangeles7 from '../../../../../pictures/California/losangeles7.jpg';

function California () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Los Angeles</h1>
                <p className={style.introP}>
                    ¿PORQUÉ VIAJAR A L.A?
                    Si aún te preguntas por qué viajar a Los Ángeles en esta sección vamos a intentar respondértelo para que te decidas de una vez…
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Los Angeles" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={losangeles4}></img>
                            <img src={losangeles5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={losangeles6}></img>
                            <img src={losangeles7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={hollywood4}></img>
                            <img src={hollywood5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={hollywood3}></img>
                            <img src={beverly2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={beverly3}></img>
                            <img src={beverly}></img>
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
                                <li><a href='#downtown'>Downtown L.A.</a></li>
                                <li><a href='#hollywood'>Hollywood</a></li>
                                <li><a href='#beverly'>Beverly Hills</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='downtown'>
                            <h3>Downtown L.A.</h3>
                            <p>
                                Imprescindible visitar el Downtown de Los Ángeles y pasear en medio de sus rascacielos. Si visitas el centro cívico podrás conocer el punto neurálgico de la ciudad de las estrellas. En esta zona se encuentran edificios tan emblemáticos como el Ayuntamiento y la catedral de Nuestra Señora de Los Ángeles. Si te gusta la arquitectura contemporánea te recomendamos visitar el Walt Disney Concert Hall. Pero su lo tuyo es el shopping, te recomendamos visitar el Fashion District de Los Ángeles.
                                A su vez puedes acercarte al legendario Staple Center hogar de los dos equipos de basquetbol de la ciudad donde podras recorrer la tienda, visitar su museo de estatuas y fotografiarte con las replicas de leyendas del deporte que han jugado para ambas franquisias.
                                Visitar la Grand Avenue de Los Ángeles es casi obligatorio si acudes al Downtown. Además, recientemente se ha reformado la avenida completa para conseguir crear un punto neurálgico en la ciudad. Grand Avenue se ha convertido en una gran zona peatonal dónde podrás pasear y disfrutar del encanto de Los Ángeles.
                                ¿Y qué mejor ciudad que la del glamour y las estrellas para ubicar un distrito de moda? Ninguna, o casi ninguna. Fashion District es un conjunto de calles de tiendas de Los Ángeles dónde solo se puede hacer una cosa: comprar. La mayor parte de establecimientos que encontrarás son para mayoristas, pero también hay tiendas al por menor. Su curiosa distribución hace de este distrito un sitio singular, ya que sus tiendas están repartidas en varias secciones: flores, textiles, los callejones, mayoristas y minoristas.
                            </p>
                        </section>
                        <section id='hollywood'>
                            <h3>Hollywood</h3>
                            <p>
                                Viajar a Los Ángeles es sinónimo de visitar Hollywood. Su conocida industria cinematográfica hace que este distrito sea el gran atractivo turístico de Los Ángeles. Actualmente es la meca del cine mundial. Si quieres vivir en primera persona lo que siempre viste detrás de una pantalla, ésta es tu oportunidad.
                                ¿Has oído hablar del paseo de la fama? En "Walk of Fame" podrás caminar sobre las huellas de los personajes más famosos de Hollywood. Además, el vecindario ofrece todo tipo de tours y actividades para que te empapes del barrio más famoso de L.A.
                                Si vas a ver Hollywood seguramente visites el Teatro Chino Grauman. Este magnífico edificio construido en 1927 es el padre de las primeras leyendas del cine. Reformado recientemente, el Teatro Chino realiza siempre las estrenas de las películas de Hollywood. Es posible hacer una visita en su interior, de todos modos, si tienes poco tiempo recomendamos ir a visitar otros sitos de Hollywood más interesantes. Algo bastante divertido es ver son los imitadores de las estrellas de Hollywood. Estos se sitúan justo delante del Teatro Grauman esperando a que los turistas les den alguna moneda.
                                Este complejo de tiendas y entretenimiento se encuentra en el cruze más transitado de Hollywood, en la esquina del Boulevard y la Avenida Highland. Más de 65 tiendas, 26 restaurantes, boleras, cines, locales nocturnos y eventos de alfombra roja, es un lugar que no te puedes perder si te gusta el mundo de la moda y las estrellas. Imprescindible visitar su patio interior. En el cuatro pisto del centro comercial hay un mirador dónde podrás sacar una buena foto del famoso letrero de Hollywood.
                            </p>
                        </section>
                        <section id='beverly'>
                            <h3>Beverly Hills</h3>
                            <p>
                                Todos sabemos que existe un lugar llamado Beverly Hills. Su fama se debe a que en él se esconden gran parte de las estrellas de Hollywood y además, hemos visto el barrio en numerosas series y películas.
                                Pero... ¿Por qué visitar Beverly Hills? Porque tendrás la oportunidad de ver grandes mansiones montando en un trolley americano (minibuses con apariencia de tranvías antiguos), también podrás disfrutar de un paseo por la famosísima calle comercial Rodeo Drive. Incluso podrás visitar Warner Brothers, uno de los estudios de cine más importantes del mundo.
                                Rodeo Drive es la calle comercial más conocida de Beverly Hills. Rodeo Drive alberga una gran cantidad de tiendas, bares y restaurantes de última tendencia. Cuando pasees por Rodeo Drive podrás palpar el lujo que se respira en el ambiente. Una de sus calles vecinas es Cañón Drive, famosa por sus exquisitos restaurantes. Sunset Strip es otra de las zonas comerciales más conocidas y de mayor fama de Los Ángeles.
                                Warner Brothers es uno de los estudios de cine más importantes del mundo. Cinéfilos, poned atención porque con reserva previa se pueden realizar tours guiados por cada uno de sus estudios.
                                Hay que decir que los tours de Warner Brothers no son precisamente económicos, ya que valen entre 60 y 100 dólares dependiendo del tipo de actividad que elijas. Si quieres asistir a un tour guiado en español, deberás acudir de lunes a viernes.
                                La ruta te llevará por los míticos escenarios de televisión y películas que la productora ha generado. Podrás pasear por las calles de Nueva York estando en medio de los Ángeles, o entrar en alguna de las casas de la famosa serie de televisión Friends.
                                Aunque el precio puede parecer elevado, si puedes visitar Warner Brothers hazlo, ya que es un tour muy completo de 3 horas de duración que acostumbra a gustar a grandes y pequeños.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default California;