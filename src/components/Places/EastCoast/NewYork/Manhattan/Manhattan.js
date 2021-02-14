import React, {useState} from 'react';
import style from './manhattan.module.css';
import Nav from '../../../../../layout/Nav/Nav';
import Footer from '../../../../../layout/Footer/Footer';
import Modal from '../../../../Modal/Modal';
import man from '../../../../../pictures/nyc/manh/man.jpg';
import man3 from '../../../../../pictures/nyc/manh/man3.JPG';
import man5 from '../../../../../pictures/nyc/manh/man5.JPG';
import man6 from '../../../../../pictures/nyc/manh/man6.JPG';
import man7 from '../../../../../pictures/nyc/manh/man7.jpg';
import man8 from '../../../../../pictures/nyc/manh/man8.jpg';
import man9 from '../../../../../pictures/nyc/manh/man9.JPG';
import man10 from '../../../../../pictures/nyc/manh/man10.JPG';
import man11 from '../../../../../pictures/nyc/manh/man11.JPG';
import man12 from '../../../../../pictures/nyc/manh/man12.JPG';
import man13 from '../../../../../pictures/nyc/manh/man13.JPG';
import man14 from '../../../../../pictures/nyc/manh/man14.jpg';
import man15 from '../../../../../pictures/nyc/manh/man15.jpg';
import man16 from '../../../../../pictures/nyc/manh/man16.jpg';
import man17 from '../../../../../pictures/nyc/manh/man17.jpg';
import man18 from '../../../../../pictures/nyc/manh/man18.jpg';
import man19 from '../../../../../pictures/nyc/manh/man19.JPG';
import man20 from '../../../../../pictures/nyc/manh/man20.JPG';
import man21 from '../../../../../pictures/nyc/manh/man21.JPG';
import man22 from '../../../../../pictures/nyc/manh/man22.jpg';

function Manhattan () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Manhattan</h1>
                <p className={style.intronyc}>
                    En Manhattan se concentra el 90% de las atracciones de Nueva York. La zona de Manhattan conocida como Midtown, al norte de la calle 31, concentra toda la vida del borough. En esta zona encontraréis el inigualable Empire State Bulding, el complejo Rockefeller Center, el sorprendente Madison Square Garden, el fascinante Times Square y muchas otras visitas imprescindibles.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Manhattan MidTown" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={man}></img>
                            <img src={man3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={man5}></img>
                            <img src={man6}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={man7}></img>
                            <img src={man8}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={man9}></img>
                            <img src={man10}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={man11}></img>
                            <img src={man12}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={man13}></img>
                            <img src={man14}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={man15}></img>
                            <img src={man16}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={man17}></img>
                            <img src={man18}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={man19}></img>
                            <img src={man20}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={man21}></img>
                            <img src={man22}></img>
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
                                <li><a href='#empire'>Empire State</a></li>
                                <li><a href='#5avenue'>5th Avenue</a></li>
                                <li><a href='#timesquare'>Times Square</a></li>
                                <li><a href='#rockefeller'>Rockefeller Center</a></li>
                                <li><a href='#grandcentral'>Grand Central</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='empire'>
                            <h3>Empire State</h3>
                            <p className={style.nyc}>
                                Estamos sin lugar a dudas ante el mirador más emblemático y conocido de Nueva York, el observatorio del Empire State Building.
                                Tras el atentado del 11-S, el Empire State se quedó como el observatorio más alto de la ciudad de Nueva York, título que recientemente acaba de perder en manos del One World Observatory, que se ha abierto en el One World Trade Center, el edificio que se ha construido justo al lado de donde se encontraban las Torres Gemelas.
                                Situado en el piso 86, al que se accede tras coger un ascensor que apenas tarda un minuto en llevarte, el observatorio del Empire State Building es sin duda el más conocido de Nueva York, por lo que se crean grandes aglomeraciones sobre todo en días despejados. Está especialmente recomendado ir cargado de una buena cámara de fotos, con un par de baterías por si acaso, y subir a última hora de la tarde para disfrutar tanto de la vista de día como de noche que nos ofrece de la ciudad.
                            </p>
                            <h3>Bryant Park</h3>
                            <p className={style.nyc}>
                                A tan solo unas pocas cuadras se encuentra el encantador Bryant Park, una particularidad es que encuentras dispersas alrededor del parque multitud de mesas y sillas, que son usadas por los auténticos neoyorquinos para comer o descansar y charlar con los amigos.
                                Además, podrás aprovechar la WiFi gratuita del parque para leer las noticias, leer tu correo o ponerte al día un rato con tu familia y amigos mientras descansas un poco de estar andando todo el día por ciudad. Durante el verano a la noche suelen proyectarse peliculas por lo que es comun ver mucha gente aglomerada en el parque dispuesta a disfrutar de una funcion al aire libre; mientras que en el invierno el parque se convierte en una pista de patinaje sobre hielo!
                            </p>
                            <h3>Madison Square Garden</h3>
                            <p className={style.nyc}>
                                Tambien se encuentra en los alrededores el legendario estadio Madison Square Garden, el arena mas famosa del mundo; reconocida tanto por sus eventos deportivos como por sus shows artisticos a lo largo de la historia. El estadio tiene un tour que te llevara por dentro del estadio y mostrara las instalaciones del mismo mientras que a su vez relatara un poco de la historia recordando grandes fechas que hayan ocurrido en ese complejo. Vale aclarar que el estadio tiene eventos los 365 del año ya sea por partidos de basquet (hogar de los New York Knicks) tambien eventos de hockey sobre hielo (hogar de los Rangers) asi como tambien de conciertos y funciones artisticas.
                            </p>
                        </section>
                        <section id='5avenue'>
                            <h3>5th Avenue</h3>
                            <p className={style.nyc}>
                                La Quinta Avenida es la calle mas famosa y glamorosa de la ciudad. Aunque no hayas estado seguramente la asocias con tiendas de lujo y lugares costosos. La parte de tiendas  que mas vale la pena recorrer es la que va desde la 58th Street hasta la 42th Street que es donde se encuentran las tienas mas improtantes.
                                Entre los lugares de primer nivel que se encuentran tenemos el Hotel Plaza lugar de hospedaje de celebridades usualmente y a su vez de muchas apareciones en peliculas; el Apple Store abierto las 24 hs del dia es una tienda bajo tierra con lo ultimo en artefactos Apple; Trump Tower se encuentra justo al lado de Tiffany's una muy famosa tienda de joyas y diamantes. Tambien podemos encontrar tiendas como Armani, Cartier, Nike, Victoria Secret, NBA Store, Gucci, Prada, GAP y muchas mas!
                                Ideal para recorrer y formar parte del ambiente mas lujoso de toda la ciudad. Tambien se puede encontrar la libreria de Nueva York mundialmente reconocida con mas de 3 millones de libros, salas de estudio llenas de arte e incluso lugares en los que se han filmado peliculas dentro del lugar.
                            </p>
                        </section>
                        <section id='timesquare'>
                            <h3>Times Square</h3>
                            <p className={style.nyc}>
                                Times Square es, sin lugar a dudas, una de las plazas más conocidas del mundo. Situada en el cruce de Broadway y la Séptima Avenida, poco a poco la han ido peatonalizando y ahora es un espacio desde el que poder disfrutar de la locura de sus luces de neón y el transito de la gente, aunque es una zona que los neoyorquinos suelen evitar por las grandes aglomeraciones que se generan durante todo el día.
                                Es famoso por los anuncios de neón, alguno de los cuales son los más caros del mundo, sus teatros, donde podemos disfrutar de algunos de los mejores musicales del mundo, y por su bola, que baja todos los últimos días del año para dar la bienvenida al Año Nuevo. Si estás en NocheBuena en Nueva York y quieres ver esta fiesta de fin de año, te recomiendo que te armes de mucha paciencia y vayas con muchísima antelación a Times Square para poder ver algo, o mejor lo verás por la tele.
                                En la plaza o en los alrededores de la misma, encontramos alguno de los mejores teatros de Broadway, como por ejemplo el teatro Minskoff, donde desde hace más de 20 años se representa con gran éxito el Rey León.
                            </p>
                        </section>
                        <section id='rockefeller'>
                            <h3>Rockefeller Center</h3>
                            <p className={style.nyc}>
                                Es un complejo de edificios de oficinas, tiendas, estudios de televisión, restaurantes, arte público; se encuentra en Midtown y ocupa varias manzanas: desde la 5ª hasta la 6ª Avenida y desde la calle 48 hasta la 51. El rascacielos más alto del complejo es el Comcast Building, inaugurado en 1933 y conocido por ser el hogar del Top of the Rock.
                                Comencemos por el rey del Rockefeller, el lugar con el que la mayoría de viajeros relaciona este complejo: el observatorio Top of the Rock.
                                Este inigualable mirador se reparte entre las plantas 67 y 70 del rascacielos Comcast Building y ofrece una panorámica única de Nueva York, con el Empire State Building y Central Park surgiendo entre la jungla de calles y avenidas.
                                El corazón del Rockefeller Center es la plaza central, un espacio rectangular rodeado de tiendas y altos edificios. Seguro que la has visto mil y una veces, ya que también es el epicentro de las Navidades en Nueva York.
                                En la plaza, encontrarás la pista de patinaje sobre hielo (de octubre a abril). Durante medio año, el nivel inferior de la plaza lo ocupa el Rockefeller Ice Rink, la pista de patinaje sobre hielo. Tambien el árbol de Navidad (desde finales de noviembre hasta principios de enero). El árbol navideño del Rockefeller se instala justo enfrente del edificio Comcast. A su vez puedes ver un mar de banderas ondeando alrededor de la plaza. Cuando se instalaron, solo estaban representados los países que formaban parte de la ONU. Pero, con el tiempo, se han ido añadiendo banderas de otras naciones hasta llegar a más de 200.
                            </p>
                            <h3>Estacion Gran Central</h3>
                            <p className={style.nyc}>
                                Grand Central Terminal o Grand Central, que es como la denominan todos los neoyorquinos, se encuentra situada en la calle 42th taponando Park Avenue y es una de las estaciones de tren más grandes de Estados Unidos con sus 67 vías, 44 andenes y sus 19 hectáreas de extensión.
                                Grand Central Terminal, ya centenaria, es una de las dos principales estaciones de tren de Nueva York, junto a la Pennsylvania Station o Penn Station, y probablemente sea la más conocida por haberse rodado en su interior multitud de películas como los Intocables, Cotton Club, Superman o Men in Black.
                            </p>
                        </section>
                        <section id='grandcentral'>
                            <h3>Grand Central</h3>
                            <p className={style.nyc}>
                               De acuerdo al pais del que se provenga es necesario averiguar si debes presentar un visado o no y de que tipo para ingresar al pais, en el caso de Argentina se debe presentar el visado de tipo B1 es decir de turista para poder ingresar al pais, los turnos deben tomarse con anticipacion y el monto de la misma es de 160 USD (datos a tener en cuenta al momento de realizar el tramite: requiere 2 dias, presentar documentos a nombre propio DNI, impuestos, recibo de sueldo, pasaporte. El tramite se divide en un dia la toma de datos y huellas digitales y el otro la entrevista en la embajada en la ciudad de Buenos Aires)
                               Al momento de viajar recomendamos llevar: pasaporte con visa B1 aprobada, ticket de ida y vuelta, tarjetsa de credito para justificar como costearemos el viaje, en caso de alquilar carro llevar licencia de conducir y por ultimo cualquier tipo de ticket o comprobante de compra de cualquier tipo de atraccion, hospedaje o auto que se haya realizado con anticipacion.
                               La estación central tiene dos plantas de andenes de tren, con una capacidad de 67 vías (41 en la planta superior y 26 en la inferior), y los trenes llegan a través de Park Avenue por un sistema de túneles, que fueron diseñados antes de su apertura en 1913.
                               Con sus 44 andenes, es la estación con más andenes del mundo, se calcula que, diariamente, pasan por la estación más de 180.000 usuarios, que principalmente van a coger el metro o los trenes de cercanías. Al año se calcula que han pasado por la estación unos 67 millones de personas. En hora punta, llega un tren a Grand Central cada minuto aproximadamente.
                               Una de las cosas más desconocidas de Grand Central es que tiene un mercado, Grand Central Market, que es posiblemente uno de los mejores sitios a donde ir en Nueva York para comprar productos gourmet, aunque también es de los más caros. La entrada se encuentra justo al lado del metro, y también se puede acceder al mercado desde Lexington Ave.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Manhattan;