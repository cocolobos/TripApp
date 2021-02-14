import React, {useState} from 'react';
import style from './cañonColorado.module.css';
import Nav from '../../../../layout/Nav/Nav';
import Footer from '../../../../layout/Footer/Footer';
import Modal from '../../../Modal/Modal';
import canon from '../../../../pictures/California/canon.jpg';
import canon1 from '../../../../pictures/California/canon1.jpg';
import canon2 from '../../../../pictures/California/canon2.jpg';
import canon3 from '../../../../pictures/California/canon3.jpg';
import canon4 from '../../../../pictures/California/canon4.jpg';
import canon5 from '../../../../pictures/California/canon5.jpg';
import canon6 from '../../../../pictures/California/canon6.jpg';
import canon7 from '../../../../pictures/California/canon7.jpg';
import canon8 from '../../../../pictures/California/canon8.jpg';
import canon9 from '../../../../pictures/California/canon9.jpg';
import canon10 from '../../../../pictures/California/canon10.jpg';
import canon11 from '../../../../pictures/California/canon11.jpg';

function CañonColorado () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Cañon de Colorado</h1>
                <p className={style.introP}>
                    Esta maravilla de la naturaleza abarca mucho territorio, por lo que el Parque Natural está dividido en varias secciones. Debes saber que como Parque Natural sólo existen dos puntos para visitar; el North Rim y el South Rim. La mayor parte del parque natural se encuentra dentro del Parque nacional del Gran Cañón y fué uno de los primeros parques naturales de los Estados Unidos. 
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Cañon de Colorado" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={canon}></img>
                            <img src={canon1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={canon2}></img>
                            <img src={canon3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={canon4}></img>
                            <img src={canon5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={canon6}></img>
                            <img src={canon7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={canon8}></img>
                            <img src={canon9}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={canon10}></img>
                            <img src={canon11}></img>
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
                                <li className={style.vegasList}><a href='#transport'>Transporte</a></li>
                                <li className={style.vegasList}><a href='#stay'>Hospedaje</a></li>
                                <li className={style.vegasList}><a href='#datoscolorado'>Datos</a></li>
                            </ul>
                        </div>
                        <div className={style.pageDesing}>
                            <h2>Que visitar ?</h2>
                            <ul className={style.uList}>
                                <li><a href='#south'>South rim del Gan Cañon</a></li>
                                <li><a href='#north'>North rim del Gan Cañon</a></li>
                                <li><a href='#west'>West rim del Gan Cañon</a></li>
                                <li><a href='#air'>Gran Cañon desde el aire</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='curiosity'>
                            <h3>Curiosidades</h3>
                            <p>
                                Es interesante saber que desde Las Vegas existe un tercer lugar desde donde visitar el Gran Cañón, el West Rim. Las excursiones desde Las Vegas para visitar el Gran Cañón suelen ir a esta parte del parque ya que es la que se encuentra más cerca a la ciudad. Actualmente se ha realizado un puente en la Presa Hoover y el tiempo de trayecto desde Las Vegas a visitar el Gran Cañón ha disminuido, por lo que en unas dos horas podrías llegar al famoso mirador Skyline. Este mirador no forma parte del parque nacional, ya que es propiedad de la tribu de los indios Hualapai. Aunque sea un mirador maravilloso, las vistas no son las mismas que las que se consiguen desde la parte sur del parque. La zona de West Rim, al estar llevada por la tribu Hualapai, tiene un precio de entrada diferente a lo que sería el parque nacional.
                            </p>
                        </section>
                        <section id='transport'>
                            <h3>Transporte y como moverse en Cañon de Colorado</h3>
                            <p>
                                Caminar por Las Vegas, sobretodo en horas de mucho sol y calor, puede resultar un suplicio. Aunque entre algunos hoteles puedes moverte por los puentes que los unen y los pasillos cubiertos, moverse por Las Vegas es más recomendable sobre ruedas o en transporte público, ya que las distancias entre puntos pueden llegar a ser interminables.
                                La principal zona turística de Las Vegas es el Strip, por lo que seguramente durante tu visita a la ciudad te moverás sobretodo por toda esta zona. Esta enorme calle cubre una gran extensión de terreno donde todas las cosas que visitar están muy pegadas unas a otras. Aunque esta cercanía de sitios que visitar parezca pequeña, la realidad es que vas a tener que andar muchísimo para ver la ciudad, incluso dentro de los grandes resorts y casinos.
                                Como las distancias entre puntos son tan extensas, lo más recomendable para desplazarse por Las Vegas es utilizar el transporte público, el taxi, el coche de alquiler o las limusinas. Debes saber que, debido a la cantidad inmensa de gente que visita Las Vegas diariamente, el Strip suele estar tremendamente congestionado y puedes tardar mucho rato en moverte de un sitio a otro.
                                El monorail de Las Vegas conecta diversos hoteles mediante una especie de metro al aire libre. Esta línea de monoraíl conecta desde MGM Station, dentro del hotel MGM Grand, hasta SLS Station, en el resort SLS Las Vegas (delante del Stratosphere).
                                La ventaja de moverse con monorail es que te evitas todos los atascos que hay en el Strip y es una manera de viajar fresca, ya que al bajar del monoraíl ya estás dentro de un resort. Esta manera de moverse de Las Vegas tiene 7 paradas y conecta diversos hoteles entre sí.
                            </p>
                        </section>
                        <section id='stay'>
                            <h3>Hospedaje</h3>
                            <p>
                                Las distancias en Las Vegas son muy elevadas, por lo que es interesante saber donde alojarse según tus preferencias de viaje.
                                Una de las mejores maneras de vivir Las Vegas a todo lujo y bajo toda su esencia es alojarse en el centro del Strip. Aquí es donde se sitúan los grandes resorts, conocidos por el lujo y la belleza de sus construcciones. Estos hoteles están perfectamente ubicados para poder visitar toda la parte centro del Strip, pero para visitar el cartel de “Welcome to Fabulous Las Vegas” vas a necesitar usar transporte; esto también es equivalente para visitar la zona norte del Strip y el Downtown.
                                Si tienes presupuesto ajustado, no te preocupes, también puedes vivir la experiencia en estos resorts en temporada baja o entre semana. Un truco para ahorrar dinero si te alojas en el centro, es alojarte en hoteles al lado de los grandes resorts; de esta manera estarás alojado a dos pasos del centro son gastar un dineral.
                            </p>
                        </section>
                        <section id='datoscolorado'>
                            <h3>Datos</h3>
                            <p>
                                La mejor época para visitar el Gran Cañón va a variar dependiendo de la zona que quieras visitar. No todas las zonas están abiertas durante todo el año, por lo que es interesante que te informes de las fechas de apertura de cada zona que visitar del Gran Cañón para así programar adecuadamente tu viaje. El South Rim, al igual que el North Rim, pertenece a la gestión del Parque Natural del Grand Canyon. Si quieres visitar la parte de South Rim del Gran Cañón desde Las Vegas te recomendamos que hagas, al menos, una noche en el Gran Cañón, ya que la distancia desde Las Vegas es muy elevada. El trayecto en coche desde Las Vegas es de más de 450 km y la duración del viaje es de unas 4hrs y media aproximadamente. A continuación te detallamos las 3 diferentes zonas para visitar el Gran Cañón con toda la información acerca de cada una de ellas.
                            </p>
                        </section>
                        <section id='south'>
                            <h3>South rim del Gan Cañon</h3>
                            <p>
                            El borde sur del Gran Cañón es la parte más visitada y es la única zona que abre las 24h todos los días del año.  Teniendo en cuenta que vale la pena visitar con tranquilidad todos los miradores, es mejor disfrutar del viaje con calma y apreciar la naturaleza en todo su esplendor.
                            El South Rim del Gran Cañón es la parte visitable con más infraestructuras turísticas y la mejor preparada para recibir el turismo de las tres. Esta zona que visitar del Gran Cañón dispone de buenas rutas de senderismo, shuttle buses a los diferentes miradores e infraestructuras varias como supermercados, restaurantes y hoteles.
                            La época más tranquila para visitar el South Rim es en otoño e invierno, en éstas épocas no existen aglomeraciones de turistas pero si que deberás abrigarte un poco. Durante todo el año se pueden hacer rutas de senderismo y subir a los diferentes shuttle buses para ver los miradores de esta zona del parque.
                            Una de los senderos del South Rim para todos los públicos es el Rim Trail, un recorrido de maravillosas vistas y de nivel fácil. Este recorrido de 3km es de solo ida y va desde Hermits Road hasta Hopi Point. Para regresar al punto de partida puedes subir al autobús del parque y así recorrer menos trozo a pie. Uno de los recorridos más populares de senderismo es el de Bright Angel. Este recorrido es de 13 km de bajada hasta el fondo del colorado, una ruta que se recomienda no hacerla entera en verano debido al calor.
                            Si decides visitar el South Rim del Gran Cañón en coche, es recomendable, sobretodo en temporada alta, aparcar en el parking y usar los shuttle buses para poder apreciar los miradores, ya que a veces es imposible poder aparcar en estas zonas. Con el coche se pueden hacer diferentes rutas dentro del Gran Cañón como la Desert View Drive.
                            </p>
                        </section>
                        <section id='north'>
                            <h3>North rim del Gan Cañon</h3>
                            <p>
                                La zona norte del Gran Cañón solo se puede visitar de mayo a octubre, por lo que es una buena opción si decides visitar Las Vegas en verano. El North Rim es la otra parte del Parque Nacional del Gran Cañón y es menos visitada que el South Rim, por lo que si buscas un entorno más tranquilo en temporada alta el North Rim puede ser una buena opción. La tarifa para visitar North Rim es la misma que para visitar South Rim, ya que ambas zonas pertenecen al Parque Nacional.
                                Si vas a visitar el North Rim del Gran Cañón te recomendamos hacer el Bright Angel Point, un sencillo sendero asfaltado de menos de 1km, ideal para ver las estrellas por la noche.
                            </p>
                        </section>
                        <section id='west'>
                            <h3>West rim del Gan Cañon</h3>
                            <p>
                                La vertiente West Rim es la parte más visitada del Gran Cañón desde Las Vegas. Muchas de las personas que no quieren conducir y quieren visitar el Gran Cañón optan por hacer una excursión de un día para visitar el Gran Cañón desde Las Vegas.
                                El West Rim se encuentra a unas 2h de distancia desde Las Vegas, por esta razón es una de las excursiones más demandadas y una opción a tener en cuenta si quieres visitar el Gran Cañón en tu estancia en Las Vegas. Esta opción, si eres amante de la naturaleza y te gusta perderte en las inmensidades, quizás no la disfrutes tanto si no contratas una visita guiada desde Las Vegas con pocas personas.
                                El West Rim está gestionado por la tribu de los indios Hualapai y tienen un despliegue orientado al turista bastante preparado. Es posible que esta zona del Gran Cañón te suene por el Skywalk, una pasarela en forma de U que queda suspendida en el aire en medio del Gran Cañón. Debes saber que para acceder a la pasarela deberás pagar un dinero extra aparte de la entrada a West Rim y está totalmente prohibido acceder con cámaras de fotos y hacer fotos. Eso si, un trabajador muy amable te tirará una foto por un módico precio.
                                Para visitar el West Rim por tu cuenta deberás aparcar en el parking y todos los accesos a los miradores los deberás hacer obligatoriamente con los autobuses que dispone el punto de visitantes. Para poder acceder al parque debes pagar por un certificado que te permite subir a los autobuses y llegar a los miradores. Otros paquetes “Gold” incluyen la visita al Skywalk.
                                El West Rim está abierto todo el año de 7 de la mañana a las 19:00 hrs. Debes tener en cuenta que Arizona no cumple el horario de verano, por lo que en esta temporada la hora es la misma que en Las Vegas.
                            </p>
                        </section>
                        <section id='air'>
                            <h3>Gran Cañon desde el aire</h3>
                            <p>
                                Otra forma interesante de visitar el Gran Cañón es desde el aire. Existen diferentes excursiones en las que se ofrece una visita al Gran Cañón en helicóptero desde Las Vegas e incluso un vuelo en avioneta. Esta forma de visitar el Gran Cañón te va a permitir tener una perspectiva diferente de este monumento rojizo y es una experiencia que posiblemente no olvides nunca.
                                Entre las diferentes excursiones en helicóptero al Gran Cañón desde Las Vegas destacan algunas en particular como las que incluyen un descenso en la base y el poder tomar un tentempié bajo la enorme grieta. 
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CañonColorado;