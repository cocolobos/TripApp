import React, {useState} from 'react';
import style from './chicago.module.css';
import Nav from '../../../../layout/Nav/Nav';
import Footer from '../../../../layout/Footer/Footer';
import Modal from '../../../Modal/Modal';
import chicago from '../../../../pictures/eastcoast/chicago.JPG';
import chicago1 from '../../../../pictures/eastcoast/chicago1.jpg';
import chicago2 from '../../../../pictures/eastcoast/chicago2.jpg';
import chicago3 from '../../../../pictures/eastcoast/chicago3.JPG';
import chicago4 from '../../../../pictures/eastcoast/chicago4.JPEG';
import chicago5 from '../../../../pictures/eastcoast/chicago5.JPG';
import chicago7 from '../../../../pictures/eastcoast/chicago7.png';
import chicago8 from '../../../../pictures/eastcoast/chicago8.jpg';
import chicago9 from '../../../../pictures/eastcoast/chicago9.JPG';
import chicago10 from '../../../../pictures/eastcoast/chicago10.JPG';
import chicago11 from '../../../../pictures/eastcoast/chicago11.jpg';
import chicago13 from '../../../../pictures/eastcoast/chicago13.JPG';
import chicago14 from '../../../../pictures/eastcoast/chicago14.png';
import chicago15 from '../../../../pictures/eastcoast/chicago15.JPG';
import chicago16 from '../../../../pictures/eastcoast/chicago16.jpg';
import chicago17 from '../../../../pictures/eastcoast/chicago17.JPG';
import chicago18 from '../../../../pictures/eastcoast/chicago18.jpg';
import chicago19 from '../../../../pictures/eastcoast/chicago19.JPG';
import chicago20 from '../../../../pictures/eastcoast/chicago20.JPG';
import chicago21 from '../../../../pictures/eastcoast/chicago21.jpg';
import chicago22 from '../../../../pictures/eastcoast/chicago22.jpg';
import chicago23 from '../../../../pictures/eastcoast/chicago23.jpg';

function Chicago () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Chicago</h1>
                <p className={style.introP}>
                    Tal vez la conozcas como la Ciudad de los Vientos, ya que su proximidad con el lago Míchigan le da un clima ventoso con inviernos y veranos extremos. Pero Chicago también es célebre por sus rascacielos. De hecho, tiene el honor de ser el primer lugar donde se construyó uno de ellos. Actualmente, es la tercera con más población después de Nueva York y Los Ángeles, así como la más poblada en el estado de Illinois.
                    Pero sus sobrenombres no terminan aquí: con más de 600 zonas verdes, viajar a Chicago es conocer la Ciudad en un Jardín y, en las décadas de los 20 y los 30, significaba pisar el centro neurálgico de la música jazz. Esta joya del Medio Oeste norteamericano, situada en el extremo suroeste del lago Míchigan, ofrece una amplia y variada lista de importantes lugares que visitar y actividades que hacer.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Chicago" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={chicago}></img>
                            <img src={chicago1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chicago2}></img>
                            <img src={chicago3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chicago4}></img>
                            <img src={chicago5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chicago10}></img>
                            <img src={chicago7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chicago8}></img>
                            <img src={chicago9}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chicago11}></img>
                            <img src={chicago13}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chicago14}></img>
                            <img src={chicago15}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chicago16}></img>
                            <img src={chicago17}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chicago18}></img>
                            <img src={chicago19}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chicago20}></img>
                            <img src={chicago21}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chicago22}></img>
                            <img src={chicago23}></img>
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
                                <li><a href='#curiosity'>Curiosidades</a></li>
                                <li><a href='#transport'>Transporte</a></li>
                                <li><a href='#stay'>Hospedaje</a></li>
                                <li><a href='#climate'>Clima</a></li>
                            </ul>
                        </div>
                        <div className={style.pageDesing}>
                            <h2>Que visitar ?</h2>
                            <ul className={style.uList}>
                                <li><a href='#milenium'>Milenium Park</a></li>
                                <li><a href='#360'>360 Tower</a></li>
                                <li><a href='#river'>Riverwalk</a></li>
                                <li><a href='#magnificent'>Magnificent Mile</a></li>
                                <li><a href='#navipier'>Navi Pier</a></li>
                                <li><a href='#unitedcenter'>United Center</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='curiosity'>
                            <h3>Curiosidades</h3>
                            <p>
                                Chicago es una ciudad con una arquitectura impresionante, llena de edificios que no se llega a ver donde terminan, pero tambien de barrios un poco mas alejados que son todas casas bajas. Con sus puentes para cruzar los rios y trenes que van por encima de la calle genera la sensacion de estar dentro de una pelicula de la decada del 70.
                                Es una ciudad para caminar y CAMINAR de verdad! tiene tantos lugares interesantes para visitar y fotografiar que es bueno poder planificar con tiempo tu estadia.
                                Tiene atracciones gratuitas como son recorrer el Magnificent Mile que es una avenida pintorezca llena de tienas y restaurantes de lujo; el Milenium Park es una gran extension de parque donde puedes fotografiarte con la estructura tan famosa de The Bean, la hermosa Buckingham Fountain, caminar por la costa del lago hasta llegar al Navi Pier y muchos lugares mas! Si tu intencion es realizar alguna de las atracciones pagas en mi opinion las que mas buenas estan son: subir al mirador del Willis Tower, el bus de recorrido por toda la ciudad con un poco de historia de la ciudad, visita al Aquarium y el Lincol Zoo.
                            </p>
                        </section>
                        <section id='transport'>
                            <h3>Transporte y como moverse en Chicago</h3>
                            <p>
                                Chicago es una ciudad muy grande, por lo que su recorrido puede resultar complicado, igualmente si te alojas en la zona del loop lo mas recomendable es que hagas todas tus excursiones a pie. Va a costarte mucho sudor y dolores de piernas pero la experiencia y lo que podras ver es fantastico. Igualmente puedes usar los trenes aereos para trasladarte dentro del loop o para ir a los barrios mas alejados; puedes usar el autobus de la misma forma y tambien para algunas zonas es recomendable el Uber sobre todo en zonas mas alejadas del centro.
                            </p>
                        </section>
                        <section id='stay'>
                            <h3>Hospedaje</h3>
                            <p>
                                En Chicago es fácil conseguir alojamiento de calidad a precios asequibles. Sin embargo, cada barrio y zona tienen un carácter muy diferenciado, por lo que es interesante conocer algunas características de cada área antes de buscar hospedaje.
                                La mejor zona dónde dormir en Chicago es la Magnificent Mile, que ocupa la parte norte de la Gran Avenida Míchigan. Aquí encontrarás todo tipo de alojamiento, aunque su buena ubicación implica unos precios un tanto más elevados que en otros barrios. La ventaja de alojarse en esta zona es que tendrás todos los servicios a tu disposición (bares, restaurantes, tiendas...). Además, es un lugar super céntrico y muy turístico, cercano a las principales atracciones de Chicago y, por lo tanto, el barrio más seguro dónde pernoctar.
                                El barrio de Chicago Loop es el corazón de la ciudad. Como pasa con la mayoría de grandes ciudades de Estados Unidos, el centro coincide con la zona financiera. Está lleno de grandes rascacielos, restaurantes y tiendas, pero también de museos y muchos de los puntos de interés turístico. El Chicago Loop es un lugar bastante ajetreado durante el día (los hombres y mujeres de negocios trabajan allí), mientras que por la noche pasa a ser un barrio muy tranquilo, ideal para descansar. 
                            </p>
                        </section>
                        <section id='climate'>
                            <h3>Clima</h3>
                            <p>
                                El clima en Chicago es continental pero está muy marcado por su ubicación geográfica: la ciudad se encuentra, grosso modo, entre la Sierra Central y el océano Atlántico. Esto provoca que el clima en Chicago se caracterice por tener inviernos extremadamente fríos, veranos cálidos y primaveras y otoños bastante nublosos, con precipitaciones frecuentes y, algunas veces, fuertes vientos. Este clima tan contrastado provoca que en invierno se pueda llegar a -20º y en verano, a 30º. De hecho, la temperatura en Chicago difiere un poco de la del resto del estado de Illinois; sus edificaciones y la proximidad con el lago Míchigan hacen que normalmente sea algo más alta que en las zonas rurales de la región. En resumen, un clima variable, de contrastes, con inviernos nevados y veranos en que agradecerás darte un chapuzón en las playas del lago Míchigan.
                            </p>
                        </section>
                        <section id='milenium'>
                            <h3>Milenium Park</h3>
                            <p>
                                Millennium Park, juntamente con el Maggie Daley Park, la Buckingham Fountain, el Art Institute of Chicago y el Museum Campus, forma parte del Grant Park, una de las mayores áreas verdes de la ciudad, conocida como el "jardín delantero de Chicago". Lo encontrarás en la céntrica zona del Loop, cerca del lago Míchigan (entre la Avenida Míchigan, Columbus Drive y las calles Randolph y Monroe).
                                Actualmente el Millennium Park es considerado uno de los proyectos de mayor envergadura de Chicago. No se trata de un simple parque, también tiene una destacada oferta arquitectónica y artística: desde sus muestras de arte público, como el monumento The Cloud Gate o las exposiciones de las Galerías Boeing, hasta los conciertos al aire libre del Pabellón Jay Pritzker o las representaciones del Harris Theater.
                                El Pabellón Jay Pritzker se trata de un escenario de arquitectura innovadora donde se celebran los festivales y conciertos al aire libre más grandes de la ciudad, como el Grant Park Music Festival, el Chicago Blues Festival y el Chicago Jazz Festival. También acoge conciertos de música clásica. Si viajas a Chicago, no hay nada mejor que hacer picnic en el césped mientras escuchas un buen concierto.
                            </p>
                        </section>
                        <section id='360'>
                            <h3>360 Tower</h3>
                            <p>
                                Si quieres tener unas vistas impresionantes de la ciudad, no te pierdas el espacio Skydeck de la Willis Tower. Se encuentra en la planta 103 del edificio y sus cuatro miradores de cristal te permitirán ver Chicago desde uno de los puntos más altos.
                                Ubicado en la planta 94 de uno de los edificios más altos de Michigan Avenue, a 300 metros de altura, te ofrece una de las mejores vistas de la ciudad. En un día despejado, los visitantes pueden vislumbrar hasta cuatro estados diferentes. Se sube en menos de 40 segundos y su principal atracción es la cápsula acristalada Tilt, que se inclina hacia delante para conseguir una vista de las calles única y de impacto. Este es uno de los rascacielos de Chicago más recomendables de visitar.
                            </p>
                        </section>
                        <section id='river'>
                            <h3>Riverwalk</h3>
                            <p>
                                Chicago es una buena ciudad para hacerlo. Espacios como The Riverwalk te encantarán. Se trata de un agradable paseo peatonal que recorre parte de la orilla del río Chicago y está repleto de espacios donde sentarse, restaurantes, bares y terrazas cerca del agua. Disfruta de las vistas arquitectónicas y súbete en un crucero o taxi acuático. Los tours en barco por el lago Michigan ofrecen a los viajeros otra perspectiva de la ciudad, no menos espectacular. Ver los rascacielos desde lejos es una imagen que seguramente no olvidarás.
                            </p>
                        </section>
                        <section id='magnificent'>
                            <h3>Magnificent Mile</h3>
                            <p>
                                La parte norte de la Avenida Míchigan de Chicago se conoce como Magnificent Mile y es una emblemática zona donde ir de compras. Grandes almacenes, tiendas de lujo, restaurantes, edificios históricos y logros arquitectónicos, centros comerciales que contienen teatro, exposiciones y spas… La Mag Mile es una de las áreas comerciales más famosas del mundo y, además, está cerca de muchas de las atracciones turísticas de Chicago.
                                Ubicada entre el Michigan Avenue Bridge y Oak Street, la Magnificent Mile forma parte del vecindario Near North Side, en el distrito central de la ciudad. En Near North Side también encontrarás barrios como Old Town, con sus encantadoras casas victorianas, Streeterville, River North y la lujosa Gold Coast.
                                Magnificent Mile es la calle por excelencia donde ir de compras en Chicago. Allí te esperan desde grandes almacenes hasta centros comerciales de varios pisos, boutiques de lujo, tiendas de marca y restaurantes. De hecho, en la Mag Mile hay más de 450 tiendas. En el caso de los centros comerciales, pueden incluir restaurantes, galerías de arte, spas, teatro (en el Broadway Playhouse), museos (como el Sports Museum)…
                            </p>
                        </section>
                        <section id='navipier'>
                            <h3>Navi Pier</h3>
                            <p>
                                Con su mezcla de atracciones de feria, cultura, compras y restaurantes, Navy Pier es uno de los reclamos turísticos del Medio Oeste de los Estados Unidos así como uno de los lugares más top de Chicago. Se trata de un céntrico muelle en el lago Míchigan, dentro del barrio de Streeterville, con grandes ofertas de ocio y entretenimiento: 20 hectáreas llenas atracciones, cruceros turísticos, exposiciones, conciertos, teatro, espacios verdes, arte público…
                                Puedes llegar hasta el muelle caminando por la avenida Míchigan o desde Millennium Park, que está un poco más lejos. También en transporte público, trolley o taxi acuático. Una vez allí, no te pierdas la icónica noria Centennial Wheel, el cinema con la única pantalla IMAX de Chicago, los fuegos artificiales en verano, las representaciones del Shakespeare Theater y un laberinto lleno de juegos, entre muchos otros.
                                Los barcos turísticos que salen de Navy Pier son una original forma de moverte por la ciudad y descubrir sus atractivos. Tanto puedes hacer un tour por el lago Míchigan, uno de los más famosos de Estados Unidos, como por el río Chicago. 
                            </p>
                        </section>
                        <section id='unitedcenter'>
                            <h3>United Center</h3>
                            <p>
                                Si eres un aficionado de los deportes, este es el estadio más grande del país. Aloja al equipo de hockey sobre hielo Chicago Blackhawks y al de baloncesto Chicago Bulls. De hecho, el mismo Michael Jordan jugó en el United Center y tiene allí una estatua en su honor, llamada The Spirit. Además de los acontecimientos deportivos, el estadio también acoge grandes eventos y entretenimiento, más de 200 al año. Artistas como Bruce Springsteen y los Rolling Stones han actuado en él. Ver en directo un partido de los Chicago Bulls o de los Hawks puede ser una gran idea para disfrutar en Chicago.
                                Actualmente esta permitido el ingreso a la tienda del estadio donde encontraras todo tipo de merchandising sobre los equipos de la ciudadad y sobre todo de Su Majestad.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Chicago;