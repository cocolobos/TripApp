import React, {useState} from 'react';
import style from './bangkok.module.css';
import Nav from '../../../../layout/Nav/Nav';
import Footer from '../../../../layout/Footer/Footer';
import Modal from '../../../Modal/Modal';
import b1 from '../../../../pictures/thai/bangkok/b1.jpg';
import b2 from '../../../../pictures/thai/bangkok/b2.jpg';
import b3 from '../../../../pictures/thai/bangkok/b3.jpg';
import b4 from '../../../../pictures/thai/bangkok/b4.JPG';
import b5 from '../../../../pictures/thai/bangkok/b5.JPG';
import b6 from '../../../../pictures/thai/bangkok/b6.JPG';
import b7 from '../../../../pictures/thai/bangkok/b7.JPG';
import b8 from '../../../../pictures/thai/bangkok/b8.JPG';
import b9 from '../../../../pictures/thai/bangkok/b9.JPG';
import b10 from '../../../../pictures/thai/bangkok/b10.JPG';
import b11 from '../../../../pictures/thai/bangkok/b11.jpg';
import b12 from '../../../../pictures/thai/bangkok/b12.JPG';
import b13 from '../../../../pictures/thai/bangkok/b13.JPG';
import b14 from '../../../../pictures/thai/bangkok/b14.JPG';
import b15 from '../../../../pictures/thai/bangkok/b15.JPG';
import b16 from '../../../../pictures/thai/bangkok/b16.JPG';
import b17 from '../../../../pictures/thai/bangkok/b17.JPG';
import b18 from '../../../../pictures/thai/bangkok/b18.JPG';
import b19 from '../../../../pictures/thai/bangkok/b19.JPG';
import b20 from '../../../../pictures/thai/bangkok/b20.jpg';
import b21 from '../../../../pictures/thai/bangkok/b21.JPG';
import b22 from '../../../../pictures/thai/bangkok/b22.JPG';
import b23 from '../../../../pictures/thai/bangkok/b23.JPG';
import b24 from '../../../../pictures/thai/bangkok/b24.JPG';
import b25 from '../../../../pictures/thai/bangkok/b25.JPG';
import b26 from '../../../../pictures/thai/bangkok/b26.JPG';
import b27 from '../../../../pictures/thai/bangkok/b27.JPG';
import b28 from '../../../../pictures/thai/bangkok/b28.JPG';

function Bangkok () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Bangkok</h1>
                <p className={style.introP}>
                    Bangkok es la capital de Tailandia y su ciudad más importante con una población de casi 7 millones de habitantes. Gracias a su creciente desarrollo económico y a su gran relevancia como destino turístico internacional, se ha convertido en una de las ciudades más influyentes y modernas del sudeste asiático.
                    Su localización a orillas del río Chao Phraya hizo que históricamente contara con un extenso sistema de canales, por lo que fue denominada como la Venecia del Este o la Venecia de Oriente.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Bangkok" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={b1}></img>
                            <img src={b2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b3}></img>
                            <img src={b4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b5}></img>
                            <img src={b6}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b7}></img>
                            <img src={b8}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b9}></img>
                            <img src={b10}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b11}></img>
                            <img src={b12}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b13}></img>
                            <img src={b14}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b15}></img>
                            <img src={b16}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b17}></img>
                            <img src={b18}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b19}></img>
                            <img src={b20}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b21}></img>
                            <img src={b22}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b23}></img>
                            <img src={b24}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b25}></img>
                            <img src={b26}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={b27}></img>
                            <img src={b28}></img>
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
                                <li className={style.vegasList}><a href='#datos'>Curiosidades</a></li>
                                <li className={style.vegasList}><a href='#transport'>Transporte</a></li>
                                <li className={style.vegasList}><a href='#stay'>Hospedaje</a></li>
                                <li className={style.vegasList}><a href='#climate'>Clima</a></li>
                            </ul>
                        </div>
                        <div className={style.pageDesing}>
                            <h2>Que visitar ?</h2>
                            <ul className={style.uList}>
                                <li><a href='#siamparagon'>Siam Paragon</a></li>
                                <li><a href='#lumphini'>Parque Lumphini</a></li>
                                <li><a href='#chinatown'>Chinatown</a></li>
                                <li><a href='#floating'>Mercado Flotante</a></li>
                                <li><a href='#temples'>Templos</a></li>
                                <li><a href='#khao'>Khao San Road</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='curiosity'>
                            <h3>Curiosidades</h3>
                            <p>
                                Si vienes de algún país de Latinoamérica o África afectado por la Fiebre Amarilla, te pedirán llevar la vacuna contra esta enfermedad. Te la pedirán, pues, si estuviste durante el último mes en algún país afectado. Si antes de llegar a Tailandia llevabas más de un mes en un país no afectado por esta enfermedad no deberían pedírtela.
                                Las vacunas recomendadas pero no imprescindibles para viajar a Tailandia son: las Hepatitis A y B, el Tétanos-Difteria (que ya se suele tener) y la Fiebre Tifoide. Si os gustan mucho los animales y vais a acercaros a monos, perros callejeros u otros animales que os podáis encontrar en Tailandia, considerad llevar la de la Rabia. 
                                Los euros o dólares es recomendable cambiarlos a THB en Tailandia. Si los cambiáis en vuestros países, os darán muy mal cambio. Os recomiendo cambiar una parte (100€) en el mismo aeropuerto de Suvarnabhumi. Concretamente en una casa de cambio llamada Superrich que encontraréis justo al lado de las máquinas de billetes del Airport Link (el tren elevado que va del aeropuerto al centro de Bangkok). 
                            </p>
                        </section>
                        <section id='transport'>
                            <h3>Transporte y como moverse en Las Vegas</h3>
                            <h4>SKYTRAIN</h4>
                            <p>
                                Consiste en dos líneas de tren elevado que cubren la zona de centros comerciales. La estación principal es la de Siam, donde se puede cambiar de línea. En Siam es donde se encuentra el centro comercial Siam Paragon.
                            </p>
                            <h4>METRO</h4>
                            <p>
                                Consiste en una sola línea que recorre zonas de Bangkok con poco interés turístico (exceptuando sus paradas de Lumphini Park y de Chatuchak).Cuenta con 18 estaciones.
                            </p>
                            <h4>RIVER BOAT</h4>
                            <p>
                                Consiste en un barco-autobús que recorre el río Chao Phraya, conectando la parada de BTS Saphan Taksin con la Zona Antigua (parada número 8 Tha Tien, cerca del Gran Palacio).
                            </p>
                            <h4>BOTE POR EL CANAL</h4>
                            <p>
                                Consiste en un barquito a motor que va por el sucio canal del centro de Bangkok, haciendo paradas. Útil para ir del Wat Saket (Zona antigua) a la Zona de Centros comerciales.
                            </p>
                            <h4>AIRPORT LINK</h4>
                            <p>
                                Conecta el Aeropuerto Int. Suvarnabhumi con el centro de Bangkok (con la parada de BTS Phaya Thai). Hay dos tipos de trenes, uno que va directo (90 Bat y 17 minutos) y otro que hace paradas (45 Bat y 30 minutos). Funciona de 6 de la mañana a 12 de la noche.
                            </p>
                            <h4>TAXIS</h4>
                            <p>
                                Son una de las mejores maneras de moverse por Bangkok. Hay miles y llevan taxímetro  empieza a 35 THB y raramente pasa de los 120 THB). Los pasajeros deben pagar las autopistas en caso de pasar por ellas. Insistid a que pongan el taxímetro. 
                            </p>
                            <h4>TUK TUK</h4>
                            <p>
                                Son triciclos que te llevan en trayectos cortos. Siendo turista es difícil conseguir un buen precio. Un viaje de 10 minutos debería costar 50 o 60 Bat. Suelen ofrecerte parar en tiendas, negaros, es una pérdida de tiempo. De igual modo suele ser una experiencia fantastica el trayecto en uno de esos y sobre todo de noche con todas las luces de la ciudad. 
                            </p>
                        </section>
                        <section id='stay'>
                            <h3>Hospedaje</h3>
                            <p>
                                Khao San Road es el barrio mochilero más famoso del mundo. Aquí encontraremos de todo tipo de alojamientos, desde hostales muy baratos hasta habitaciones en hoteles de gama media con piscina a unos precios económicos. Lo ideal si vas a esta zona es alojarse por la parte de Rambutthri, una de las calles paralelas a propia Khao San Road.
                                La zona parque Lumpini - Silom es una zona cada más frecuentada por mochileros y viajeros que no quieren estar en Khao San Road. Lo mejor es la cercanía con el Parque Lumpini el gran pulmón verde de la ciudad. En esta zona también es fácil encontrar alojamientos a muy buenos precios.
                                Suhumvit es la zona comercial de Bangkok y de los grandes y caros restaurantes. Es una zona no apta para presupuesto ajustados o de mochileros. Por el contrario es el lugar ideal par aquellos que quieran hacer alojarse cerca de los principales centros comerciales de la ciudad  y buscan alojamiento de más calidad.
                            </p>
                        </section>
                        <section id='climate'>
                            <h3>Clima</h3>
                            <p>
                                La capital de Tailandia posee un clima estable durante todo el año,  sin precipitaciones fuertes cuando es la época de lluvias y fuerte calor en la época seca. La época seca corresponde con los meses desde noviembre hasta mayo siendo los meses más calurosos marzo y abril. La época de lluvias corresponde desde los meses de mayo hasta octubre, teniendo las precipitaciones más fuertes al final de la estación, donde suele provocar junto con la crecida del río Chao Phraya inundaciones en ciertas partes de la ciudad.
                                Durante la época de lluvias lo normal es que hay precipitaciones fuertes y cortas a última hora del día. Si estás de excursión en esos días un buen truco es llevar contigo un chubasquero. Durante los días de calor en la época seca cuida mucho tu exposición al sol. Mantente hidratado en todo momento si estás de visitas,  ya sea a los Templos de Bangkok o en las Ruinas Históricas de Ayutthaya.
                            </p>
                        </section>
                        <section id='siamparagon'>
                            <h3>Siam Paragon</h3>
                            <p>
                                El centro comercial más lujoso de Bangkok. En Siam Paragon encontraréis las principales marcas del mundo a los mismos precios que en cualquier otro país. En la planta del sótano se encuentra el Aquarium más grande del Sudeste Asiático. También hay la famosa exposición de famosos en cera de Madame Tussaud y un cine de lujo. Es un muy buen lugar para almorzar o cenar.
                            </p>
                        </section>
                        <section id='lumphini'>
                            <h3>Parque Lumphini</h3>
                            <p>
                                El mayor parque en el centro de Bangkok. Lumphini es en realidad el pueblo de Nepal donde nació Buda. Si vais temprano por la mañana (7-8h) o por la tarde (17-18h) veréis a los tailandeses bailando y practicando todo tipo de deportes. Si estáis justo a las 08:00 o 18:00 en punto, os llevaréis una sorpresa. 
                            </p>
                        </section>
                        <section id='chinatown'>
                            <h3>Chinatown</h3>
                            <p>
                                El barrio de Chinatown (Yaowarat) empezó a florecer fuera de las murallas de Bangkok desde la fundación de la ciudad, pero, más tarde, la comunidad de inmigrantes chinos fueron desplazados al lugar donde se encuentran actualmente. Si paseáis por sus calles ossentiréis como si estuvieseis en China. Es un barrio famoso por sus restaurantes de comida de aquél país y por los mercados donde venden al por mayor. Es mejor ir temprano por la mañana a ver los mercados en las callejuelas o tarde por la noche para cenar en la calle o en algún restaurante. Hace bastante calor y hay mucho tráfico. En muchos lugares esta prohibido tomar fotografias.
                            </p>
                        </section>
                        <section id='floating'>
                            <h3>Mercado Flotante</h3>
                            <p>
                                Por su tamaño, ubicación, variedad de productos y colorido, Damnoen Saduak es el mercado flotante más famoso y visitado por los viajeros. Ha salido en películas como El Hombre de la Pistola de Oro y Bangkok Dangerous.
                                Debido a la peculiaridad de este mercado, con tiendas tanto flotantes como en barcas, los artículos que se pueden comprar son básicamente ropa, regalos, artesanía, comida y bebida. Hay barcas con souvenirs, de pad thai, de helados (probad el de coco), de fruta, de bebidas.
                            </p>
                        </section>
                        <section id='temples'>
                            <h3>Templos</h3>
                            <h4>Wat Phra Kaew (Gran Palacio)</h4>
                            <p>
                                Construido en el 1782, el Gran Palacio fue usado por reyes durante 150 años. La arquitectura, los colores y las esculturas lo convierten en una visita casi obligatoria. El Templo Wat Phra Kaew alberga el Buda Esmeralda, la imagen más venerada del país, que data del siglo XV y fue traída desde la norteña ciudad de Chiang Mai. Es un complejo que alberga numerosas estructuras y resulta verdaderamente representativo de la arquitectura de la epoca.
                                Se deben llevar pantalones largos y los hombros cubiertos
                            </p>
                            <h4>Wat Pho (Templo Buda Reclinado)</h4>
                            <p>
                                El Wat Pho o el Templo del Buda Reclinado es otro de los Templos en Bangkok más importantes que hay  también otro de sus símbolos como ciudad. El Wat Pho es conocido por albergar una de las figuras de un Buda Reclinado de oro más grandes del país, de más de 43 m de largo y con cerca de 15 m de alto . El Wat Pho es también uno de los templos más antiguos de Bangkok pues su construcción data de antes de la creación de lo que hoy es la capital. Desde sus inicios el Wat Pho y todo el complejo que lo rodea estuvo centrado y ligado al desarrollo de la medicina natural pues fue la primera Escuela en Tailandia donde se empezó a estudiar medicina natural y la utilización de masaje como método de cura. Todavía a día de hoy, sigue estando muy ligado a este hecho albergando unos de los centros más importantes del país para el estudio de la medicina tradicional tailandesa y el masaje tailandés.
                            </p>
                            <h4>Wat Arun (Templo del Amanecer)</h4>
                            <p>
                                El Wat Arun o Templo del Amanecer es otro de los templos más importantes de Bangkok es también uno de los símbolos de la ciudad. Construido durante el periodo en que Ayutthaya era la capital del reino, el Wat Arun es otro de los ejemplos arquitectónico del pasado Khmer de Tailandia siendo su elemento más importante el gran Prang de 80 m altura característico del arte de ese periodo. Mejor horario para verlo como su nombre lo indica es al amanecer o al caer el sol.
                            </p>
                            <h4>Wat Traimit (Templo Buda de Oro)</h4>
                            <p>
                                El Wat Traimit o el Templo del Buda de Oro es famoso más que por la riqueza arquitectónico del templo lo es por albergar una de la estatuas de Buda de Oro macizo que hay en todo el mundo. La famosa estatua data del período de Ayutthaya y pasó siglos olvidada y camuflada en pequeños Templos de Bangkok hasta que en el año 1955 de manera fortuita y con un punto casi de leyenda durante un traslado apareció. Lo que siempre se pensó que era una estatua de barro sin ningún tipo de valor se descubrió que en el interior de esta cubierta estaba la figura de Buda todo de oro macizo, convirtiéndose así en una de las veneradas de la ciudad y haciendo famoso al Wat Traimit y su visita casi obligada.
                            </p>
                        </section>
                        <section id='khao'>
                            <h3>Khao San Road</h3>
                            <p>
                                La calle de Khao San es el gueto mochilero más famoso del mundo. Se trata de una calle con tiendas, bares, clubes y hostales a ambos lados y con cientos de puestos que venden comida y ropa por el medio. Un buen sitio donde tomar unas cervezas y conocer gente si se viaja solo. Muy mal sitio para alojarse. Los alrededores, aunque también están llenos de turistas, son más tranquilos. Recomendamos las calles de Pra Atit Rd. o Rambuttri Rd. y el restaurante Shoshana (Humus, falafel, shawarma, etc.). Si al caer el sol la calle ya está animada, cuando se acerca la medianoche los bares ya están a reventar. Khao San Road es uno de los lugares ideales para salir de fiesta y comenzar, o incluso terminar, una noche loca en Bangkok.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Bangkok;