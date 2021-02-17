import React, {useState} from 'react';
import style from './phuket.module.css';
import Nav from '../../../../layout/Nav/Nav';
import Footer from '../../../../layout/Footer/Footer';
import Modal from '../../../Modal/Modal';
import phuket from '../../../../pictures/thai/phuket.JPG';
import phuket1 from '../../../../pictures/thai/phuket1.JPG';
import phuket2 from '../../../../pictures/thai/phuket2.JPG';
import phuket3 from '../../../../pictures/thai/phuket3.JPG';
import phuket4 from '../../../../pictures/thai/phuket4.JPG';
import phuket5 from '../../../../pictures/thai/phuket5.JPG';
import phuket6 from '../../../../pictures/thai/phuket6.jpg';
import phuket7 from '../../../../pictures/thai/phuket7.JPG';
import phuket8 from '../../../../pictures/thai/phuket8.JPG';
import phuket9 from '../../../../pictures/thai/phuket9.JPG';
import phuket10 from '../../../../pictures/thai/phuket10.JPG';
import phuket11 from '../../../../pictures/thai/phuket11.JPG';
import phuket12 from '../../../../pictures/thai/phuket12.JPG';
import phuket13 from '../../../../pictures/thai/phuket13.JPG';
import phuket14 from '../../../../pictures/thai/phuket14.JPG';
import phuket15 from '../../../../pictures/thai/phuket15.JPG';
import phuket16 from '../../../../pictures/thai/phuket16.JPG';
import phuket17 from '../../../../pictures/thai/phuket17.JPG';

function Phuket () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Phuket</h1>
                <p className={style.introP}>
                    Phuket es el destino de playa por excelencia de Tailandia. La isla más famosa gracias a las numerosas playas con las que cuenta y las muchas posibilidades de excursiones a islas cercanas que ofrece. A pesar de estar conectada por un puente, Phuket es una isla, la de mayor tamaño del país. Mide 48 km de largo y 21 km ancho. Su costa oeste es la más famosa y donde están la mayoría de playas importantes. Sus dos centros son Phuket Town, una pequeña ciudad sin playa; y Patong Beach, la playa más importante. Phuket cuenta con un aeropuerto internacional.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Phuket" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={phuket}></img>
                            <img src={phuket1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={phuket2}></img>
                            <img src={phuket3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={phuket4}></img>
                            <img src={phuket5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={phuket6}></img>
                            <img src={phuket7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={phuket8}></img>
                            <img src={phuket9}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={phuket10}></img>
                            <img src={phuket11}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={phuket12}></img>
                            <img src={phuket13}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={phuket14}></img>
                            <img src={phuket15}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={phuket16}></img>
                            <img src={phuket17}></img>
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
                                <li className={style.vegasList}><a href='#climate'>Clima</a></li>
                                <li className={style.vegasList}><a href='#transport'>Transporte</a></li>
                                <li className={style.vegasList}><a href='#stay'>Hospedaje</a></li>
                            </ul>
                        </div>
                        <div className={style.pageDesing}>
                            <h2>Que visitar ?</h2>
                            <ul className={style.uList}>
                                <li><a href='#patongbeach'>Patong Beach</a></li>
                                <li><a href='#phukettown'>Phuket Town</a></li>
                                <li><a href='#elephants'>Reserva Natural de Elefantes</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='climate'>
                            <h3>Clima</h3>
                            <p>
                                El sur de Tailandia se caracteriza por tener 2 estaciones diferenciadas, la estación seca y la estación de lluvias.
                                La estación seca en esta zona empezaría en diciembre y duraría hasta mayo, siendo los meses de marzo, abril y  lo más calurosos. En estos días el sol, el cielo azul y despejado es la imagen más común. Por el contrario la estación de lluvias empezaría ya en el mes de mayo y duraría casi hasta el mes de noviembre. Durante la época de lluvias (también llamada época de monzones) es fácil que llegan tormentas desde el mar de Andaman lo que hace que puedan haber temporales que dejen mucha lluvia y mala mar, que impide una comunicación cómoda por ferry con la costa desde las islas. Estos temporales y sus lluvias no suelen durar más de 2 o 3 días. El resto de la temporada de lluvias se caracteriza por ciertas lluvias regulares con tendencia siempre a hacerlo al atardecer. Estos chaparrones suelen ser de muy corta duración y ayudan a refrescar el ambiente.
                            </p>
                        </section>
                        <section id='transport'>
                            <h3>Transporte y como moverse en Phuket</h3>
                            <p>
                                El transporte público local se reduce a las songthaews, pequeñas camionetas que circulan por toda la isla. Son extremadamente lentas y tardan casi dos horas en cubrir la distancia que un coche recorre en solo 20 minutos. Su principal ventaja es que puedes bajar o subir en cualquier lugar a lo largo de la ruta.
                                Además de los taxis convencionales, la isla cuenta con unas peculiares furgonetas de tres ruedas llamadas tuk-tuks que hacen competencia a los primeros. Estos coloridos y veloces triciclos no son baratos y carecen de taxímetros, por lo que antes de iniciar tu viaje negocia el precio con el conductor.
                                Dada la ineficacia del transporte público, un coche de alquiler es la opción más recomendable para moverse por Phuket.
                            </p>
                        </section>
                        <section id='stay'>
                            <h3>Hospedaje</h3>
                            <p>
                                Si estas pensando pasar unos días en Phuket seguramente estés buscando alojamiento barato en la isla. Phuket al ser uno de los destinos turísticos más importantes que hay en Tailandia pose una oferta hotelera amplia, desde alojamiento en hostels o guesthouse súper económicos hasta alojamiento en resorts de lujo.
                                Un buen lugar para alojarse en es Patong Beach ya que no solo cuenta con una de las playas mas lindas y concurridas sino que tambien posee un centro con varios restaurantes, tiendas y todo tipo de atracciones nocturnas para recorrer.
                            </p>
                        </section>
                        <section id='patongbeach'>
                            <h3>Patong Beach</h3>
                            <p>
                                La playa y el pueblo de Patong son el punto neurálgico de la isla. Para quienes viven en Phuket casi todo gira entre Patong y Phuket Town. Patong es un destino más habitual de los turistas ya que cuenta con una playa que en su día sería muy bonita pero que actualmente está tomada por masajistas, vendedores, motos acuáticas, etc. Además, en Patong hay infinidad de hoteles y resorts para todos los gustos. Aquí también encontraréis el mayor gran ambiente nocturno de Phuket, especialmente en su famosa calle Bangla Road, una de las calles rojas de Tailandia. El pueblo de Patong cuenta incluso con un moderno centro comercial llamado Jungceylon.
                            </p>
                        </section>
                        <section id='phukettown'>
                            <h3>Phuket Town</h3>
                            <p>
                                A pesar de no tener playa, la ciudad de Phuket bien merece una visita si vais sobrados de tiempo. Si vais, buscad la calle Thalang Road en el centro histórico de Phuket Town, ya que es la que conserva más de sus edificios coloniales chino-portugueses. Si estáis un domingo en Phuket, no os perdáis el Sunday Market que se monta en esta calle.
                            </p>
                        </section>
                        <section id='elephants'>
                            <h3>Reserva Natural de Elefantes</h3>
                            <p>
                                Sin duda una de las mejores excursiones para hacer es la de poder conocer y pasar un maraviolloso dia con los elefantes en su habitad natural. La reserva cuenta con todos elefantes que han sido rescatados de distintos lugares ya sea zoologicos o circos por nombrar alguno de los lugares donde estaban.
                                La reserva se encuentra en el medio de la montaña y para llegar hay que reservar la visita con anticipacion y alquilar un transporte que especialmente te llevara hasta la reserva.
                                Hay distintos paquetes para aprovechar puede ser de medio dia o de dia entero, lo que se propone es conocer a los animales pasar un rato con ellos, alimentarlos, cepillarlos, verlos moverse por la reserva de manera natural y libremente.
                                Como parte de la visita podras disfrutar de bañarte en el barro con estos hermosos animales que seguramente te haran pasar un momento inolvidable, llegando al mediodia se propondra como actividad cocinar entre todos los visitantes la comida tipica del lugar "Tai Pei" y para finalizar quienes hayan reservado para pasar todo el dia, podran acompañar a los paquidermos por su caminata diaria por la montañá para su sesion de ejercicio. Realmente es de las mejores experiencias que podras realizar.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Phuket;