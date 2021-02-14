import React, {useState} from 'react';
import style from './brooklyn.module.css';
import Nav from '../../../../../layout/Nav/Nav';
import Footer from '../../../../../layout/Footer/Footer';
import Modal from '../../../../Modal/Modal';
import brook from '../../../../../pictures/nyc/brooklyn/brook.JPG';
import brook1 from '../../../../../pictures/nyc/brooklyn/brook1.jpg';
import brook2 from '../../../../../pictures/nyc/brooklyn/brook2.JPG';
import brook3 from '../../../../../pictures/nyc/brooklyn/brook3.jpg';
import brook4 from '../../../../../pictures/nyc/brooklyn/brook4.JPG';
import brook5 from '../../../../../pictures/nyc/brooklyn/brook5.jpg';
import brook6 from '../../../../../pictures/nyc/brooklyn/brook6.jpg';
import brook7 from '../../../../../pictures/nyc/brooklyn/brook7.JPG';
import brook8 from '../../../../../pictures/nyc/brooklyn/brook8.jpg';
import brook9 from '../../../../../pictures/nyc/brooklyn/brook9.JPG';
import brook10 from '../../../../../pictures/nyc/brooklyn/brook10.JPG';
import brook11 from '../../../../../pictures/nyc/brooklyn/brook11.JPG';
import brook12 from '../../../../../pictures/nyc/brooklyn/brook12.jpg';
import brook13 from '../../../../../pictures/nyc/brooklyn/brook13.JPG';
import brook14 from '../../../../../pictures/nyc/brooklyn/brook14.jpg';
import brook15 from '../../../../../pictures/nyc/brooklyn/brook15.JPG';
import brook16 from '../../../../../pictures/nyc/brooklyn/brook16.JPG';
import brook17 from '../../../../../pictures/nyc/brooklyn/brook17.jpg';
import brook18 from '../../../../../pictures/nyc/brooklyn/brook18.jpg';
import brook19 from '../../../../../pictures/nyc/brooklyn/brook19.JPG';

function Brooklyn () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Brooklyn</h1>
                <p className={style.nyc}>
                    ¿Estás pensando en escaparte de Manhattan y planteándote qué ver en Brooklyn? En realidad, lo raro es lo que no encuentres en este distrito: tiene millones de habitantes, de barrios y de rincones interesantes. Brooklyn es uno de los 5 distritos de la ciudad de Nueva York junto con Manhattan, Queens, el Bronx y Staten Island. ¡Pero no ha perdido ni pizca de su carácter inconfundible!
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Brooklyn" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={brook}></img>
                            <img src={brook1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={brook2}></img>
                            <img src={brook3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={brook4}></img>
                            <img src={brook5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={brook6}></img>
                            <img src={brook7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={brook8}></img>
                            <img src={brook9}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={brook10}></img>
                            <img src={brook11}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={brook12}></img>
                            <img src={brook13}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={brook14}></img>
                            <img src={brook15}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={brook16}></img>
                            <img src={brook17}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={brook18}></img>
                            <img src={brook19}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <button className={style.BtnModCancel} onClick={() => setOpenModal(false)}>Close</button>
                        </div>
                    </Modal>
                <div className={style.pageStyle}>
                    <div className={style.sideBar}>
                        <div className={style.pageDesing}>
                            <h2>Que visitar?</h2>
                            <ul className={style.uList}>
                                <li><a href='#dumbo'>DUMBO</a></li>
                                <li><a href='#barclays'>Barclays Center</a></li>
                                <li><a href='#brooklynbridge'>Brooklyn Bridge</a></li>
                                <li><a href='#heights'>Brooklyn Heights</a></li>
                                <li><a href='#williamsburg'>Williamsburg</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='dumbo'>
                            <h3>DUMBO</h3>
                            <p className={style.nyc}>
                                Dumbo, a los pies de los puentes de Brooklyn y de Manhattan, es la puerta de entrada a Brooklyn para la mayoría de viajeros. Te esperan calles renovadas que rezuman encanto industrial, mil parques junto al río y vistas mágicas del skyline de Nueva York, cruzar a pie uno de los puentes es una buena excusa para pasear por este pequeño barrio de pasado industrial donde hoy los pisos cuestan millones.
                                Pasea junto al East River en dirección al puente de Manhattan y llegarás a uno de los rincones con más magia de Dumbo: la Pebble Beach, una playa de piedrecitas (pebble significa guijarro) con unas vistas espectaculares de Manhattan y del puente de Brooklyn.
                                Hay una especie de gradas donde sentarte, así que puedes llevarte algo de comer o un café y disfrutarlo junto con la panorámica.
                                Este uno de los pocos lugares donde puedes tocar con la mano (o con el pie, si vives al límite) el agua del East River.
                                Aunque a Dumbo no le faltan restaurantes (más abajo te recomendamos algunos), desde hace poco el barrio tiene un nuevo destino al que acudir cuando te rujan las tripas: el Time Out Market.
                                Se trata de un food hall con puestos de los mejores restaurantes de Nueva York. Aquí tienes nuestra guía completa del mercado.
                                Y no te marches sin subir a la planta 5, donde te espera una terraza gratis con vistas del puente de Brooklyn y del East River.
                                Algunas de las mejores cosas que hacer en Dumbo: Comer en el mercado Time Out, cruzar el puente de Brooklyn o el puente de Manhattan a pie, hacer un pícnic en el Brooklyn Bridge Park, sacar una foto de cine del puente de Manhattan, subir al Jane’s Carousel con los peques y pasear por el distrito histórico de Vinegar Hill.
                            </p>
                        </section>
                        <section id='barclays'>
                            <h3>Barclays Center</h3>
                            <p className={style.nyc}>
                                Al noreste de Prospect Park encontrarás los barrios de Prospect Heights y Crown Heights. Prospect Heights es pequeñito y, además de pasear por calles tranquilas, puedes ver un partido en el Barclays Center (el estadio de los Brooklyn Nets) o comer en los restaurantes de Vanderbilt Ave o Washington Ave.
                                Crown Heights, en cambio, es gigante. Tiene zonas un poco conflictivas; nosotros te recomendamos la parte norte y oeste, que es donde se encuentran el distrito histórico y la mayoría de restaurantes y comercios (sobre todo entre Washington Ave y Franklin Ave).
                                Aunque los grandes reclamos de Crown Heights están pegaditos al parque: el fantástico museo Brooklyn Museum y el precioso Jardín botánico de Brooklyn.
                                Pantallas luminosas, emoción, gritos de aliento… Asistir a un partido de la NBA en Nueva York es una de las actividades que triunfan en cualquier viaje a la ciudad.
                                Y no se trata de una cita obligada solo para los aficionados al baloncesto: en los partidos se monta tal fiesta, que seguro que lo pasarás como un niño con el ambientazo.
                            </p>
                        </section>
                        <section id='brooklynbridge'>
                            <h3>Brooklyn Bridge</h3>
                            <p className={style.nyc}>
                                Cruzar el puente de Brooklyn a pie, con el East River fluyendo bajo tus pies y el skyline de Manhattan como telón de fondo, es una de esas experiencias que tienes que vivir en Nueva York sí o sí.
                                Pero, a veces, las multitudes y las bicis a toda velocidad hacen que este símbolo de la Gran Manzana también resulte un poco estresante.
                                Conecta los distritos de Manhattan y de Brooklyn por encima del río East River, desde el barrio de Civic Center (en Manhattan) hasta los barrios de Dumbo y Brooklyn Heights (en Brooklyn).
                                Es recomendable cruzarlo pronto por la mañana o al anochecer. Si no te da pereza madrugar, el amanecer es un momento genial para sacar fotos sin gente, aunque no hace falta exagerar, ¡hacia las 9 o las 10 también se está bien! A esa hora, hay turistas y ciclistas de camino al trabajo, pero se camina sin problemas.
                                En cambio, más tarde el puente se llena tanto que en algunos momentos puede resultar agobiante: hay mucha gente parada sacando fotos y hay que caminar poco a poco, por el carril bici circulan tours organizados…
                                El atardecer es otro momento muy popular, ya que el sol se pone detrás de los rascacielos y, desde el puente (caminando en dirección a Manhattan), la imagen es muy bonita.
                                Un ratito después, las multitudes van desapareciendo, y ver la ciudad de noche con los edificios iluminados (el puente también se enciende) también merece la pena.


                            </p>
                        </section>
                        <section id='heights'>
                            <h3>Brooklyn Heights</h3>
                            <p className={style.nyc}>
                                Al suroeste de Dumbo, pero en una posición más elevada (height significa ‘altura’ o ‘cumbre’), encontrarás Brooklyn Heights. A pesar de que muchos viajeros pasan cerca, muy pocos llegan a visitar este barrio, tal vez porque es sobre todo residencial.
                                Es recomendable dedicarle un ratito, y no solo por las casitas de cuento en calles plácidas, sino también por el paseo elevado Brooklyn Heights Promenade, que te sorprenderá con una vista preciosa de Manhattan y del puente de Brooklyn.
                                A su vez algo muy interesante que se propone como actividad es concretar una visita guiada con residentes de la ciudad que te daran una mirada mas autentica de la manera de vivir alli.
                                Algunas de las mejores cosas que hacer en Brooklyn Heights: Pasear por calles como Joralemon St, contemplar Nueva York desde el Brooklyn Heights Promenade y bajar hasta el Brooklyn Bridge Park.
                            </p>
                        </section>
                        <section id='williamsburg'>
                            <h3>Williamsburg</h3>
                            <p className={style.nyc}>
                                Seguro que has oído hablar de Williamsburg, en el norte de Brooklyn, como el barrio hipster de Nueva York. Pero lo que hace apenas unos años era un enclave alternativo y bohemio hoy es una de las zonas con más dinero de la ciudad.
                                Las fábricas y almacenes han cedido el protagonismo a los rascacielos de lujo, los restaurantes y cadenas más famosos de Nueva York se apresuran en abrir locales en el barrio y, junto al río East River, se han construido parques con vistas geniales, como el Domino Park, en la antigua refinería de azúcar Domino.
                                Un barrio a la última, pero con una excepción: en el sur encontrarás el barrio judío ultraortodoxo de Williamsburg, un reducto donde el tiempo parece haberse detenido en otro siglo. Es el barrio judío ortodoxo donde la comunidad jasídica, más de 300.000 personas, vive y trabaja como si no se correspondiera con el resto de la ciudad.
                                Aunque Williamsburg ya no esté tan de moda, eso no significa que tengas que pasarlo por alto. El East River State Park ofrece unas vistas casi completas de Manhattan, desde el World Trade Center hasta los rascacielos de los super ricachones del sur de Central Park. En verano, está mucho mejor porque es cuando abren los puestos de comida de Smorgasburg.
                                Algunas de las mejores cosas que hacer en Williamsburg: Cruzar el puente de Williamsburg a pie, descansar viendo el skyline en el Domino Park o el East River State Park, comer en el mercadillo Smorgasburg, pasear por las tiendas y restaurantes entre Kent Avenue y Bedford Avenue y disfrutar del arte urbano.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Brooklyn;