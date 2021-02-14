import React, {useState} from 'react';
import style from './washingtondc.module.css';
import Nav from '../../../../layout/Nav/Nav';
import Footer from '../../../../layout/Footer/Footer';
import Modal from '../../../Modal/Modal';
import dc from '../../../../pictures/eastcoast/dc.JPG';
import dc1 from '../../../../pictures/eastcoast/dc1.JPG';
import dc2 from '../../../../pictures/eastcoast/dc2.JPG';
import dc3 from '../../../../pictures/eastcoast/dc3.jpg';
import dc4 from '../../../../pictures/eastcoast/dc4.JPG';
import dc5 from '../../../../pictures/eastcoast/dc5.JPG';
import dc6 from '../../../../pictures/eastcoast/dc6.jpg';
import dc7 from '../../../../pictures/eastcoast/dc7.JPG';
import dc8 from '../../../../pictures/eastcoast/dc8.jpg';
import dc9 from '../../../../pictures/eastcoast/dc9.jpg';
import dc10 from '../../../../pictures/eastcoast/dc10.jpg';
import dc11 from '../../../../pictures/eastcoast/dc11.jpg';
import dc12 from '../../../../pictures/eastcoast/dc12.JPG';
import dc13 from '../../../../pictures/eastcoast/dc13.JPG';
import dc14 from '../../../../pictures/eastcoast/dc14.JPG';
import dc15 from '../../../../pictures/eastcoast/dc15.JPG';
import dc16 from '../../../../pictures/eastcoast/dc16.JPG';
import dc17 from '../../../../pictures/eastcoast/dc17.JPG';
import dc18 from '../../../../pictures/eastcoast/dc18.JPG';
import dc19 from '../../../../pictures/eastcoast/dc19.JPG';
import dc20 from '../../../../pictures/eastcoast/dc20.JPG';
import dc21 from '../../../../pictures/eastcoast/dc21.JPG';
import dc23 from '../../../../pictures/eastcoast/dc23.JPG';
import dc24 from '../../../../pictures/eastcoast/dc24.JPG';
import dc25 from '../../../../pictures/eastcoast/dc25.jpg';
import dc27 from '../../../../pictures/eastcoast/dc27.jpg';
import dc28 from '../../../../pictures/eastcoast/dc28.JPG';
import dc29 from '../../../../pictures/eastcoast/dc29.JPG';
import dc30 from '../../../../pictures/eastcoast/dc30.JPG';
import dc31 from '../../../../pictures/eastcoast/dc31.JPG';
import dc32 from '../../../../pictures/eastcoast/dc32.JPG';
import dc33 from '../../../../pictures/eastcoast/dc33.jpg';

function WashingtonDC () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Washington DC</h1>
                <p className={style.introP}>
                    Si bien existen muchas razones para visitar Washington, para cada uno algunas pueden ser válidas o no. Debes saber, sin embargo, que se trata de un destino variopinto, lo que lo vuelve accesible e interesante para todo tipo de viajeros. Washington ofrece un montón de cosas que visitar y experiencias que vivir, cosa que lo convierte también en un destino apropiado para turistas de todas las edades.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Washington DC" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={dc}></img>
                            <img src={dc1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc2}></img>
                            <img src={dc3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc4}></img>
                            <img src={dc5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc6}></img>
                            <img src={dc7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc8}></img>
                            <img src={dc9}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc10}></img>
                            <img src={dc11}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc12}></img>
                            <img src={dc13}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc14}></img>
                            <img src={dc15}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc16}></img>
                            <img src={dc17}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc18}></img>
                            <img src={dc19}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc20}></img>
                            <img src={dc21}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc23}></img>
                            <img src={dc27}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc24}></img>
                            <img src={dc25}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc28}></img>
                            <img src={dc29}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc30}></img>
                            <img src={dc31}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={dc32}></img>
                            <img src={dc33}></img>
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
                                <li><a href='#nationalmall'>National Mall</a></li>
                                <li><a href='#capitol'>Capitolio</a></li>
                                <li><a href='#whitehouse'>Casa Blanca</a></li>
                                <li><a href='#arlington'>Cementerio de Arlington</a></li>
                                <li><a href='#georgetown'>Georgetown</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='transport'>
                            <h3>Transporte y como moverse en Washington DC</h3>
                            <p>
                                El servicio del Metro de Washington es impecable. En cada estación tienes a tu disposición los detalles exhaustivos de los coches que vienen en camino, incluyendo horario, número de vagones y tiempo que tardará en llegar a destino.
                                El Metrobus tiene una gran cantidad de autobuses distribuidos a lo largo de una docena de líneas y provistos de sistemas de combustión ecológica, por lo que resultan amigables para el medioambiente. Su red de servicio se extiende a lo largo de toda la ciudad y llega a los rincones más alejados. El horario va desde las 5.00 hasta las 00.00 durante los días de la semana y desde las 7.00 hasta las 3.00 en fin de semana.
                                De todas maneras otra buena opcion es caminar por los lugares mas bellos de la ciudad para realmente sentir la escencia de la capital americana.
                            </p>
                        </section>
                        <section id='stay'>
                            <h3>Hospedaje</h3>
                            <p>
                                El Downtown representa el centro de todas las atracciones y actividades de Washington y ofrece una amplia gama de experiencias históricas, culturales y de entretenimiento, así como la oportunidad de apreciar algunos de los lugares más famosos de Washington DC. Es uno de los mejores barrios dónde alojarse si viajas por primera vez, ya que tendrás muy cerca algunos de los puntos de interés más destacados.
                                Por otro lado el Foggy Bottom Ubicado en el West End de la ciudad, Foggy Bottom es una de nuestras zonas preferidas dónde alojarse en Washington DC por primera vez. Foggy Bottom es uno de los barrios más antiguos de la ciudad y está ubicado entre la Casa Blanca y el río Potomac.
                                Georgetown es una de las zonas más prestigiosas y exclusivas de Washington DC. Es el barrio más antiguo de la ciudad y destaca por sus estrechas calles empedradas bordeadas de frondosos árboles y espectaculares casas históricas. Aunque es un barrio residencial, alberga una gran cantidad de buenos restaurantes, lugares de interés y actividades y atracciones encantadoras.
                            </p>
                        </section>
                        <section id='climate'>
                            <h3>Clima</h3>
                            <p>
                                La ciudad de Washington ofrece un clima absolutamente variable dependiendo de la época del año en la que te encuentre. Sus inviernos son bastante fríos y se caracterizan por temperaturas que no suelen superar los 0°C. Por su parte, los veranos vienen con temperaturas sumamente cálidas, sobre todo durante el mes de julio que suelen rondar los 27 °C.
                                La primavera y el otoño se caracterizan por un clima templado y suaves brisas. En lo que respecta a las lluvias no suelen ser muy comunes en estas estaciones intermedias pero sí son protagonistas durante los meses de verano, en los que suele llover una vez a la semana aproximadamente.
                            </p>
                        </section>
                        <section id='nationalmall'>
                            <h3>National Mall</h3>
                            <p>
                                El National Mall alberga algunos de los monumentos conmemorativos más importantes de la ciudad, como el Obelisco de Washington, el monumento a Lincoln y la estatua del General Grant, tres personajes ineludibles de la historia estadounidense.
                                Se trata de una zona al aire libre, a modo de parque nacional, que se encuentra en el centro de la ciudad. Una zona llena de jardines, museos y monumentos nacionales, vecina a los edificios oficiales más importantes, tales como la Casa Blanca o el Capitolio.
                                Además de ser uno de los sitios más visitados de la ciudad, este parque ha sido testigo de algunos de los momentos históricos más importantes en la historia del país, como lo fue el famoso discurso de Luther King, o las numerosas manifestaciones para exigir cambios sociales y políticos.
                                Los monumentos que forman parte del National Mall son : Obelisco de Washington, Capitolio, Monumento a Ulysses Grant, Monumento a Abraham Lincoln,  Lincoln Memorial Reflecting Pool, Pared Conmemorativa a los Veteranos de Vietnam, Thomas Jefferson Memorial, Memorial Nacional a la Segunda Guerra Mundial, Memorial de Veteranos de la Guerra de Corea y el Memorial a Martin Luther King.
                            </p>
                        </section>
                        <section id='capitol'>
                            <h3>Capitolio</h3>
                            <p>
                                Entre los edificios más importantes de la ciudad de Washington se encuentra el Capitolio, que no sólo es emblemático por la simbología que imprime en nuestro inconsciente colectivo sino porque en ella se toman algunas de las decisiones que dirigen la política del país y que traen consecuencias a casi todo el mundo.
                                El Capitolio se encuentra en un barrio llamado Capitol Hill, en lo alto de una colina, lo que permite que sea visible desde casi cualquier punto de la ciudad. Se trata de una edificación no sólo famosa en el país sino también en todo el mundo, gracias a la gran difusión que ha tenido a través del cine. En él se encuentran la cámara de Senadores (en el ala norte) y de Representantes (en el ala sur) del Congreso de Estados Unidos.
                                Este edificio vio la luz en 1800 y se encuentra levantado sobre un terreno de unas diez hectáreas que se encuentran prolijamente cuidadas, con jardines, paseos y calles. Posee una cúpula que termina en forma de obelisco y alcanza los 185 metros de altura.
                                Entre las cosas que llaman más la atención es que cuenta con numerosos edificios de vigilancia y un departamento de policía propio. El barrio puede visitarse sólo con guías, pero debido a la cantidad de gente que desea realizar este recorrido, es necesario solicitar plaza con bastante antelación. 
                            </p>
                        </section>
                        <section id='whitehouse'>
                            <h3>Casa Blanca</h3>
                            <p>
                                La Casa Blanca es otro de los lugares que no puedes dejar de visitar en Washington (aunque solamente sea desde el exterior). Visitar la Casa Blanca para los extranjeros, no es tarea facil. El centro de trabajo del jefe de estado es un lugar muy bien protegido y que requiere un montón de papeleo y permisos si quieres acceder.
                                Por otra parte suele haber ciudadanos no tan conformes con el gobierno, que realizan siempre algun tipo de protesta o acto de rebeldia en las afueras de la misma donde la valla de contencion se los permite, a pesar de estar lejos es buen lugar para pasarse y tomar una fotografia de la misma.
                            </p>
                        </section>
                        <section id='arlington'>
                            <h3>Cementerio de Arlington</h3>
                            <p>
                                En la inmensa superficie de este cementerio descansan los restos de veteranos que han participado en todas las guerras en las que Estados Unidos ha formado parte, desde la de Independencia (en 1175), hasta los conflictos armados en Medio Oriente (desde los años 90 hasta la fecha).
                                También en este camposanto descansan los restos de JFK y los de sus hermanos Joseph, Robert y Edward Kennedy. Sobre la tumba de John Fitzgerald se encuentra encendida la llama eterna (una mecha que no se ha apagado nunca desde que se encendió, cuando el cuerpo del presidente asesinado fue enterrado).
                                Otros rincones de este camposanto que puedes visitar son los monumentos conmemorativos de los transbordadores espaciales Challenger y Columbia. Asimismo, un espacio donde se rinde homenaje a los fallecidos en el vuelo de Pan Am en Lockerbie y otro para los fallecidos durante el ataque a las Torres Gemelas, en el 2001.
                                Sin duda no es este un sitio para ir a divertirse, pero se respira en el él un aire peculiar. La necesidad de rendir homenaje a quienes han forjado la historia del país y la forma ordenada en la que los americanos mantienen sus costumbres y su honor patriótico son cosas con las que podemos estar o no de acuerdo, pero de las que sin duda tenemos algo que aprender, o igual reflexionar.
                                El Cementerio de Arlington, convertido en Parque Nacional desde el 2004, es un lugar que tiene una importante relevancia para la ciudad ya que conmemora el trabajo y la entrega que millones de personas han demostrado frente al país, como miembros de las Fuerzas Armadas de los EE.UU.
                                Existe una base de datos actualizada, en la que los visitantes pueden buscar el sitio en el que se encuentran enterrados sus familiares fallecidos en combate.
                            </p>
                        </section>
                        <section id='georgetown'>
                            <h3>Georgetown</h3>
                            <p>
                                Antiguamente Georgetown se hallaba separada del centro de Washington, sin embargo, con el correr de los años y el aumento de la demografía de la ciudad, se ha visto absorbida completamente por ésta formando parte de sus barrios más importantes.
                                Se halla a orillas del río Potomac y reúne una cantidad de edificios que son las sedes de las más importantes instituciones educativas de la ciudad. A su vez cuenta con un puerto llamado Washington Harbour, en el que podrás disfrutar de un bonito paseo mientras observas preciosos yates y botes de todo tipo.
                                Se trata de un barrio muy pintoresco y antiguo en el que podrás observar fabulosas mansiones y casonas de otra época. Si te interesa la historia de las ciudades, puedes acceder a un tour por las calles del barrio en el que te cuentan algunas historias en torno a estas casas.
                                Entre las cosas más fascinantes de Georgetown se encuentra la sede de la Universidad de Georgetown, un edificio magnífico, lleno de historia, también protagonista en muchas películas.
                                Y si lo que quieres es relajarte y salir un poco del ajetreado ritmo de la ciudad, nada mejor que un paseo por la orilla del río Potomac. Para sentir el solcito y llenarte de aire en medio de la ciudad.
                                El ambiente de Georgetown es muy amigable. Las calles se hallan llenas de vida y no es raro encontrarse con músicos callejeros y espectáculos al aire libre. Y también tiendas interesantes donde ir de compras en un entorno absolutamente pintoresco.
                                Por último Georgetown es un sitio muy pintoresco para salir a cenar y a divertirse. ¡No te lo pierdas!
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default WashingtonDC;