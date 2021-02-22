import React, {useState} from 'react';
import style from './dubai.module.css';
import Nav from '../../../layout/Nav/Nav';
import Footer from '../../../layout/Footer/Footer';
import Modal from '../../Modal/Modal';
import db from '../../../pictures/dubai/db.jpg';
import db1 from '../../../pictures/dubai/db1.jpg';
import db2 from '../../../pictures/dubai/db2.jpg';
import db3 from '../../../pictures/dubai/db3.jpg';
import db4 from '../../../pictures/dubai/db4.JPG';
import db6 from '../../../pictures/dubai/db6.jpg';
import db7 from '../../../pictures/dubai/db7.JPG';
import db8 from '../../../pictures/dubai/db8.JPG';
import db9 from '../../../pictures/dubai/db9.jpg';
import db10 from '../../../pictures/dubai/db10.jpg';
import db11 from '../../../pictures/dubai/db11.jpg';
import db12 from '../../../pictures/dubai/db12.jpg';
import db13 from '../../../pictures/dubai/db13.JPG';
import db14 from '../../../pictures/dubai/db14.JPG';
import db15 from '../../../pictures/dubai/db15.jpeg';
import db16 from '../../../pictures/dubai/db16.JPG';
import db17 from '../../../pictures/dubai/db17.jpeg';
import db18 from '../../../pictures/dubai/db18.jpg';
import db19 from '../../../pictures/dubai/db19.png';
import db20 from '../../../pictures/dubai/db20.jpg';

function Krabi () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Dubai</h1>
                <p className={style.introP}>
                    En los Emiratos Árabes, 200 kilómetros al norte de su capital Abu Dhabi, se encuentra Dubái, la ciudad del mundo que más ha crecido en la última década, un destino turístico de lujo cada día más solicitado por viajeros de todo el mundo
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Dubai" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={db}></img>
                            <img src={db1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={db2}></img>
                            <img src={db3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={db19}></img>
                            <img src={db7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={db6}></img>
                            <img src={db4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={db8}></img>
                            <img src={db9}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={db10}></img>
                            <img src={db11}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={db12}></img>
                            <img src={db13}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={db14}></img>
                            <img src={db15}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={db16}></img>
                            <img src={db17}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={db18}></img>
                            <img src={db20}></img>
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
                                <li className={style.vegasList}><a href='#curiosity'>Curiosidades</a></li>
                                <li className={style.vegasList}><a href='#stay'>Hospedaje</a></li>
                                <li className={style.vegasList}><a href='#climate'>Clima</a></li>
                                <li className={style.vegasList}><a href='#transport'>Transporte</a></li>
                            </ul>
                        </div>
                        <div className={style.pageDesing}>
                            <h2>Que visitar ?</h2>
                            <ul className={style.uList}>
                                <li><a href='#desert'>Desierto de Dubai</a></li>
                                <li><a href='#burjkhalifa'>Burj Khalifa</a></li>
                                <li><a href='#burjalarab'>Burj Al Arab</a></li>
                                <li><a href='#mall'>Dubai Mall</a></li>
                                <li><a href='#jumeirah'>Palmera Jumeirah</a></li>
                                <li><a href='#marina'>Dubai Marina</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='curiosity'>
                            <h3>Curiosidades</h3>
                            <p>
                                La moneda oficial de Dubái es el dírham, pero el dólar americano es ampliamente aceptado en todas las zonas turísticas, incluso en los mercados.
                                Dubái es un país musulmán pero con una fuerte influencia occidental, lo que lo convierte en un destino abierto a otras creencias y formas de vida.
                                Dubái no tiene que acabar con tus ahorros. Aunque no se caracteriza por ser un destino barato y ofrece experiencias bastante costosas, hay varias actividades que puedes realizar por muy poco dinero o incluso gratis, como visitar los típicos zocos, mercados donde puedes encontrar productos típicos del país como especias o souvenirs.
                                No todo es lujo. Dubái se ha hecho fama de ser una ciudad llena de derroche y lujo, y si bien es cierto que su downtown o la Marina son reflejo de esto, existen muchas zonas que conservan un aire tradicional y modesto. Un buen ejemplo es la zona del Deira, famosa por alojar zocos como el del oro y las especias, así como por encontrarse a las orillas del Creek, el lago principal de la ciudad.
                                Los idiomas oficiales son árabe e inglés, sin embargo, es posible visitar  Dubai solo hablando español.  
                            </p>
                        </section>
                        <section id='stay'>
                            <h3>Hospedaje</h3>
                            <p>
                                Un buen punto para comenzar tu visita y hospedarte, si tu presupuesto lo permite, es el downtown. En el downtown de Dubai  se encuentran atracciones como el Burj Khalifa, el edificio más alto del mundo, o el Dubai Mall, el centro comercial más grande de Dubai y del mundo.  Desde el downtown es fácil moverse a cualquier punto de la ciudad, aunque la desventaja es que los hoteles de la zona suelen ser de lujo y, por lo tanto, los precios son elevados, así que alejarse un poco puede ser aconsejable.
                                A sólo una estación de metro del Dubai Mall se encuentra Financial Station, una zona con una buena variedad de hoteles con muy buena relación precio y calidad. También cerca de la estación de metro Dubai Internet Station puedes encontrar una de las mejores relaciones calidad-precio. En esta área te recomiendo el hotel: Towers Rotana – Dubai. Más información y reserva aquí 
                            </p>
                        </section>
                        <section id='climate'>
                            <h3>Clima</h3>
                            <p>
                                Los veranos de Dubai son muy calurosos con temperaturas medias durante el día de 42 grados centígrados, y durante la noche de 28 grados centígrados. Sin embargo, las temperaturas en primavera y otoño son algo menos calurosas con temperaturas que oscilan entre los 25-40°C durante el día, y 20°C durante la noche.
                                En invierno el tiempo es más agradable. Pues las temperaturas son más moderadas y el ambiente más seco. Ya que durante el día la media es de 25°C y la temperatura media mínima nocturna es de 10°C.
                                Sin embargo, el clima de Dubai no produce una época de lluvias. Generalmente, llueve algo más entre los meses de diciembre y abril, pero la cantidad de agua es pequeña.
                                En las playas el agua también suele estar bastante caliente. Ya que en verano puede llegar a alcanzar los treinta y siete grados y en primavera y otoño suele estar en treinta grados. Luego, en invierno entre veinte y veinticinco grados centígrados. 
                            </p>
                        </section>
                        <section id='transport'>
                            <h3>Transporte en Dubai</h3>
                            <p>
                                Aunque actualmente Dubái es una ciudad muy dependiente del transporte privado, poco a poco está mejorando su red de transporte público para satisfacer a todos los colectivos.
                                El metro de Dubái es rápido, bonito, limpio y económico. Como novedad importante, el metro funciona de forma totalmente automática.
                                Los abras son barcas tradicionales que se encargan de facilitar el cruce de Dubai Creek a los peatones. Es la forma más barata y rápida de moverse entre Deira y Bur Dubai.
                                El autobús turístico de Dubái ofrece diferentes recorridos que permiten conocer la ciudad cómodamente desde un autobús de dos plantas con techo abierto. El recorrido va acompañado de comentarios en español que se pueden escuchar con auriculares.
                            </p>
                        </section>
                        <section id='desert'>
                            <h3>Desierto de Dubai</h3>
                            <p>
                                Visitar el desierto es un básico en Dubai, aunque en realidad no se encuentra en esta ciudad, sino en el emirato vecino de Sharjah. Es un trayecto de 45 minutos y lo más recomendable para visitarlo es tomar algún tour organizado. Considera que para conducir en el desierto se requiere una licencia y automóvil especial, por lo que no es recomendable hacerlo por tu cuenta. Costo:desde 900 USD
                            </p>
                        </section>
                        <section id='burjkhalifa'>
                            <h3>Burj Khalifa</h3>
                            <p>
                                El Burj Khalifa (Torre Califa) es el edificio más alto del mundo con una altura de 828 metros. En la construcción del edificio han participado más de 12.000 personas de 30 países. Anteriormente fue conocido como Burj Dubai (Torre de Dubái).
                                El Burj Khalifa cuenta con dos miradores que ofrecen vistas sorpredentes. En la planta 124, localizado a 442 metros de altura, encontraréis el que hasta ahora era el único mirador de la Torre Califa, sin duda alguna el mejor punto de Dubái para contemplar la ciudad.
                                El segundo de los miradores, de reciente inauguración, acapara todas las miradas tras haberse convertido en el más alto del mundo arrebatando este título al de la Torre Canton en Guangzhou. Localizado a 555 metros de altura, el mirador ocupa la planta 148 del edificio para ofrecer unas sorprendentes vistas de pájaro de la ciudad en miniatura, como no podría ser de otro modo desde semejante altura.
                            </p>
                        </section>
                        <section id='burjalarab'>
                            <h3>Burj Al Arab</h3>
                            <p>
                                Tal vez incluir la visita a un hotel dentro de las visitas imprescindibles de Dubái suene extraño... pero lo cierto es que el Burj Al Arab no es un hotel cualquiera.
                                Para poder visitar el hotel y admirar sus fuentes, sus tiendas y su impresionante lobby (el lobby más alto del mundo con más de 200 metros de altura) es necesario hacer una reserva en alguno de sus restaurantes o bares.
                                Los precios de las reservas comienzan en 350 dirhams por un desayuno en el restaurante Sahn Eddar, en la primera planta.
                                Para disfrutar de una experiencia completa y tener las mejores vistas de Dubái, la mejor opción es reservar algún paquete en el Sky Bar del piso 27 (a más de 200 metros de altura). Nuestra opción recomendada es asistir al "Indulgent Afternoon Tea" a las 16:00. El precio es de 620 dirhams e incluye infinitos tipos de té, una copa de champagne, diversos sándwiches y snacks, pastas de té y tartas. Podéis estar en el bar hasta las 19:00 horas (se pasa asombrosamente volando), cuando comienzan a dar cenas. También podéis reservar la comida, igual de excelente y a un precio similar.
                                Como podéis suponer, dormir en el Burj Al Arab no es especialmente barato. Las tarifas comienzan a partir de 1.300€ por noche, incluyendo desayuno, dátiles, bombones e incluso un juego completo de productos Hermes para hombre y mujer.
                            </p>
                        </section>
                        <section id='mall'>
                            <h3>Dubai Mall</h3>
                            <p>
                                El centro comercial Dubai Mall abrió sus puertas en noviembre de 2008 y de inmediato se convirtió en el centro comercial más grande y visitado del mundo. En sus 111 hectáreas de extensión cuenta con más de 1.200 tiendas y 14.000 plazas de parking.
                                Dubai Mall cuenta con tiendas para todos los gustos y presupuestos.
                                Además de tiendas de moda, también encontraréis tiendas de todo tipo: libros, relojes, complementos, electrónica, menaje del hogar, etcétera.
                                En su planta baja, Dubai Mall cuenta con su propio "Zoco del Oro", donde podréis encontrar un gran número de de joyerías muy bien ambientadas.
                                Para compaginar con las compras el centro comercial Dubai Mall cuenta con un gran acuario, una pista olímpica de patinaje sobre hielo, el cine más grande de Dubái, una sala recreativa y Kidzania. Esta última es una actividad interactiva donde los niños desarrollarán profesiones de adulto.
                            </p>
                        </section>
                        <section id='jumeirah'>
                            <h3>Palmera Jumeirah</h3>
                            <p>
                                Localizada en la costa de Dubái, la Palmera Jumeirah es uno de los atractivos más conocidos de Dubái. Está formada por un conjunto de islas artificiales con forma de palmera compuesta por un tronco, 17 ramas y un semicírculo que actúa como rompeolas.
                                The Palm Jumeirah forma parte de un ambicioso proyecto que pretendía la construcción de otras dos palmeras: Palm Jebel Ali y Palm Deira, las cuales no se encuentran finalizadas.
                                Además de un importante reclamo turístico, The Palm Jumeirah es una zona residencial repleta de hoteles entre los que destaca el llamativo Hotel Atlantis, un lujoso establecimiento que cuenta con el parque acuático más grande de Oriente Medio, Aquaventure Water Park.
                                The Palm Jumeirah es una de las obras maestras de Dubái siendo imprescindible disfrutarla desde las alturas.
                                La mejor forma de contemplarla es dando un paseo en helicóptero o en hidroavión, aunque los más valientes pueden optar por saltar en paracaídas para disfrutar de las impresionantes vistas.
                            </p>
                        </section>
                        <section id='marina'>
                            <h3>Dubai Marina</h3>
                            <p>
                                Localizado en el corazón del "nuevo Dubái", Dubai Marina es un agradable distrito ubicado en torno a un canal artificial de 3,5 kilómetros de longitud que ofrece acceso al mar desde sus dos extremos.
                                Dubai Marina está compuesto por numerosos rascacielos que forman torres residenciales, centros comerciales y lujosos hoteles. El canal de Dubai Marina está rodeado por un agradable paseo (Dubai Marina Walk), una zona repleta de restaurantes con acogedoras terrazas que ofrecen todo tipo de cocina.
                                Dubai Marina es una de las mejores zonas de la ciudad para pasear. Cuando llega la noche la zona se viste de luz y color para ofrecer un entorno agradable en el que, además de pasear, es posible cenar o tomar algo con un ambiente de lo más animado.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Krabi;