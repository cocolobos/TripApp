import React, {useState} from 'react';
import style from './kualalumpur.module.css';
import Nav from '../../../../layout/Nav/Nav';
import Footer from '../../../../layout/Footer/Footer';
import Modal from '../../../Modal/Modal';
import kl from '../../../../pictures/kuala/kl.jpg';
import kl1 from '../../../../pictures/kuala/kl1.JPG';
import kl2 from '../../../../pictures/kuala/kl2.jpg';
import kl3 from '../../../../pictures/kuala/kl3.jpg';
import kl4 from '../../../../pictures/kuala/kl4.jpg';
import kl5 from '../../../../pictures/kuala/kl5.jpg';
import kl6 from '../../../../pictures/kuala/kl6.JPG';
import kl7 from '../../../../pictures/kuala/kl7.JPG';
import kl8 from '../../../../pictures/kuala/kl8.jpg';
import kl9 from '../../../../pictures/kuala/kl9.JPG';
import kl10 from '../../../../pictures/kuala/kl10.JPG';
import kl11 from '../../../../pictures/kuala/kl11.jpg';
import kl12 from '../../../../pictures/kuala/kl12.jpg';
import kl13 from '../../../../pictures/kuala/kl13.jpg';
import kl14 from '../../../../pictures/kuala/kl14.jpg';
import kl15 from '../../../../pictures/kuala/kl15.jpg';
import kl16 from '../../../../pictures/kuala/kl16.jpg';
import kl17 from '../../../../pictures/kuala/kl17.JPG';
import kl18 from '../../../../pictures/kuala/kl18.JPG';
import kl19 from '../../../../pictures/kuala/kl19.jpg';

function KualaLumpur () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Kuala Lumpur</h1>
                <p className={style.introP}>
                    Phuket es el destino de playa por excelencia de Tailandia. La isla más famosa gracias a las numerosas playas con las que cuenta y las muchas posibilidades de excursiones a islas cercanas que ofrece. A pesar de estar conectada por un puente, Phuket es una isla, la de mayor tamaño del país. Mide 48 km de largo y 21 km ancho. Su costa oeste es la más famosa y donde están la mayoría de playas importantes. Sus dos centros son Phuket Town, una pequeña ciudad sin playa; y Patong Beach, la playa más importante. Phuket cuenta con un aeropuerto internacional.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Kuala Lumpur" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={kl}></img>
                            <img src={kl1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={kl2}></img>
                            <img src={kl3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={kl4}></img>
                            <img src={kl5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={kl6}></img>
                            <img src={kl7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={kl8}></img>
                            <img src={kl9}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={kl10}></img>
                            <img src={kl11}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={kl12}></img>
                            <img src={kl13}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={kl14}></img>
                            <img src={kl15}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={kl16}></img>
                            <img src={kl17}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={kl18}></img>
                            <img src={kl19}></img>
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

export default KualaLumpur;