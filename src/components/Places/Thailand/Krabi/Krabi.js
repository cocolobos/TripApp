import React, {useState} from 'react';
import style from './krabi.module.css';
import Nav from '../../../../layout/Nav/Nav';
import Footer from '../../../../layout/Footer/Footer';
import Modal from '../../../Modal/Modal';

function Krabi () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Krabi</h1>
                <p className={style.introP}>
                    En esta ciudad todo se concibe a lo grande, sus casinos, sus hoteles y el ritmo de vida en general. Además, el Gran Cañón del Colorado queda muy cerca de la urbe, así podrás realizar una visita al parque si te apetece. Y recuerda, ¡lo que pasa en Las Vegas se queda en Las Vegas!
                    Los casinos en Las Vegas son realmente tan impresionantes como dicen, ya que todos están ambientados según una temática para trasladarte a diferentes mundos o países. En general a los amantes del juego les entusiasman estos casinos, ya que son sumamente profesionales y ofrecen a sus visitantes una gran variedad de juegos de apuestas. 
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Krabi" openModal={openModal} setOpenModal={setOpenModal}>
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
                                <li className={style.vegasList}><a href='#datos'>Datos</a></li>
                            </ul>
                        </div>
                        <div className={style.pageDesing}>
                            <h2>Que visitar ?</h2>
                            <ul className={style.uList}>
                                <li><a href='#strip'>El Strip</a></li>
                                <li><a href='#fremont'>Calle Fremont</a></li>
                                <li><a href='#shows'>Espectaculos</a></li>
                                <li><a href='#casinos'>Casinos</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='curiosity'>
                            <h3>Curiosidades</h3>
                            <p>
                                Si viajas a Las Vegas verás que la ciudad es tal y como siempre la has imaginado, ya que es una ciudad totalmente diferente de cualquier otra, ubicada en medio del desierto y repleta de cualquier tipo de ocio. Sin embargo, todo el mundo que visita Las Vegas por primera vez queda impresionado, ya que las infinitas luces y rascacielos que llenan la ciudad forman un paisaje espectacular. Aunque la ciudad de Las Vegas parezca un lugar artificial, merece la pena visitarla, ya que no hay lugar en la tierra que se le asemeje.
                            </p>
                        </section>
                        <section id='transport'>
                            <h3>Transporte y como moverse en Las Vegas</h3>
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
                        <section id='datos'>
                            <h3>Datos</h3>
                            <p>
                                La cantidad de días recomendables para visitar Las Vegas va a depender de tu estilo de viaje y el tipo de vacaciones que desees hacer. Muchas personas utilizan Las Vegas como ciudad de vacaciones y lugar donde divertirse, y otras lo usan como destino de paso en una ruta por los EEUU. Sea como sea tu viaje, debes pensar en lo que te gustaría hacer y con qué propósito viajas a Las Vegas.
                                Realmente para disfrutar de la fiesta y el desenfreno con un máximo de 3 días tendrás suficiente, pero si eres una persona que quiere usar Las Vegas como ciudad dormitorio para visitar parajes naturales de los alrededores quizás quieras pasar más días. Para solventar tus dudas puedes ojear nuestra sección sobre itinerarios en Las Vegas y así hacerte una idea de los días que podrías necesitar para viajar.
                                La mejor época para viajar es en primavera y otoño, ya que durante estas dos épocas vas a evitar las noches frías del invierno y el caluroso verano. Recuerda que estás en un desierto, por lo que las temperaturas pueden llegar a extremos. En la temporada de primavera y otoño también encontrarás más turistas, ya que es temporada de convenciones y cuando la ciudad está más poblada.
                            </p>
                        </section>
                        <section id='strip'>
                            <h3>El Strip</h3>
                            <p>
                                El Strip o boulevard de Las Vegas es calle más famosa de la ciudad. En esta vía se encuentran los casinos y los hoteles más destacados y los que hemos visto en las películas. Además, esta calle es uno de los mejores lugares para ir de compras, ya que está llena de grandes almacenes dónde comprar cualquier cosa que te imagines. En el Strip de Las Vegas, también encontrarás algunos de los outlets más importantes.
                                En el Strip de Las Vegas también se encuentran las famosas Fuentes de Bellagio, unas impresionantes fuentes del Hotel Bellagio que ofrecen un espectáculo visual y sonoro a todos los visitantes. Esta obra de arte fue inaugurada en 1998 y está compuesta por 1.200 surtidores de agua. Además, los chorros bailan al ritmo de varias composiciones musicales, que por cierto son siempre diferentes, hecho que consigue cautivar a cualquier visitante.
                                Si presencias el baile de las fuentes te aconsejamos hacerlo de noche, ya que se crea un ambiente mucho más tranquilo y mágico por el efecto lumínico.
                            </p>
                        </section>
                        <section id='fremont'>
                            <h3>Calle Fremont</h3>
                            <p>
                                Si nos remontamos a los orígenes de Las Vegas, la calle Fremont era la más famosa de la ciudad. Si has visto las películas clásicas de casinos de Las Vegas te llevará gratos recuerdos visitar la calle Fremont. Cuando veas esta mítica travesía sentirás la magia de este lugar histórico que aún conserva algunos de los casinos más conocidos del mundo del cine, como por ejemplo el Golden Nugget. Te recomendamos visitar esta calle de noche, ya que cuando cae el sol toda la calle se ilumina como ninguna otra de Las Vegas.
                            </p>
                        </section>
                        <section id='shows'>
                            <h3>Espectaculos</h3>
                            <p>
                                A parte de ser la ciudad del juego, Las Vegas también es la ciudad de los espectáculos. Te recomendamos ir en algún momento de tus vacaciones a ver un cómico, algún espectáculo de danza o algún mago como el mismísimo David Copperfield. También es posible ir a ver actuaciones de música, ya que es una ciudad que acoje a grandes estrellas del cine o de la música. En Las Vegas hay espectáculos y conciertos en directo cada día de la semana.
                                Si te interesa ir a ver algún concierto en Las Vegas la mejor opción es comprar la entrada con anticipación, ya que los artistas más famosos consiguen llenar las salas de conciertos en un segundo. Si prefieres acudir a un espectáculo circense , el Cirque du Soleil ofrece espectáculos diariamente en cinco casinos de Las Vegas que son realmente fascinantes.
                            </p>
                        </section>
                        <section id='casinos'>
                            <h3>Casinos</h3>
                            <h4 className={style.casino}>Casino MGM Grand</h4>
                            <p>
                                El Casino MGM Grand dispone de 196 mesas para jugar al póker y está considerado uno de los casinos más grandes de Las Vegas. En su interior usualmente se celebran distintos eventos como conciertos y variados espectáculos. Este casino se hizo muy famoso por la película de Rocky IV, ya fue el escenario de una de las grandes peleas entre Apollo Creed y Iván Drago.
                            </p>
                            <h4 className={style.casino}>Casino Bellagio</h4>
                            <p>
                                El Casino Bellagio seguramente es el mejor casino de Las Vegas, ya que fue galardonado con los Cinco Diamantes (una forma de otorgar categorias a los casinos similar a las estrellas con los hoteles). Su fama se debe a su ambientación y, por supuesto, a sus impresionantes fuentes que hemos comentado más arriba.
                            </p>
                            <h4 className={style.casino}>Palms Casino Resort</h4>
                            <p>
                                Otro casino destacado de Las Vegas es el Palms Casino Resort, que está ambientado en el Caribe. Dispone de 70 mesas para jugar el póker y los sábados ofrece cursillos para toda aquella gente que no sabe jugar al póker y quiere aprender.
                            </p>
                            <h4 className={style.casino}>The Venetian</h4>
                            <p>
                                The Venetian es uno de los casinos más conocidos sobre todo por su ambientación. En este caso, el casino ha conseguido recrear la ciudad de Venecia (con sus canales navegables incluídos). El The Venetian es un casino que no puedes perderte en tu visita en Las Vegas. Es una muy buena sala de juegos y se ha hecho muy famoso a través de la serie CSI en Las Vegas, ya que muchas veces es el escenario de los capítulos.                            </p>
                            <h4 className={style.casino}>Caesars Poker</h4>
                            <p>
                                Este casino-hotel es también uno de los más conocidos, ya que posee una elegante ambientación romana, una sala de juegos de 300 metros cuadrados y una impresionante sala de fiestas.
                            </p>
                            <h4 className={style.casino}>Hard Rock Casino</h4>
                            <p>
                                Seguramente no es ni el mejor casino de Las Vegas ni el más grande, pero se trata del casino preferido de los jóvenes. Además, está considerado un excelente sitio dónde jugar el Blackjack, ir a escuchar conciertos y salir de fiesta.
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