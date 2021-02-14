import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import style from './california.module.css';
import Nav from '../../../../layout/Nav/Nav';
import Footer from '../../../../layout/Footer/Footer';
import Modal from '../../../Modal/Modal';
import asuza from '../../../../pictures/California/asuza.jpg';
import elmonte from '../../../../pictures/California/elmonte.JPG';
import elmonte2 from '../../../../pictures/California/elmonte2.jpg';
import elmonte3 from '../../../../pictures/California/elmonte3.jpg';
import elmonte4 from '../../../../pictures/California/elmonte4.JPG';
import hollywood from '../../../../pictures/California/hollywood.jpg';
import hollywood2 from '../../../../pictures/California/hollywood2.jpg';
import longbeach from '../../../../pictures/California/longbeach.jpg';
import longbeach2 from '../../../../pictures/California/longbeach2.jpg';
import longbeach3 from '../../../../pictures/California/longbeach3.jpg';
import longbeach4 from '../../../../pictures/California/longbeach4.jpg';
import longbeach5 from '../../../../pictures/California/longbeach5.JPG';
import losangeles from '../../../../pictures/California/losangeles.jpg';
import losangeles2 from '../../../../pictures/California/losangeles2.jpg';
import losangeles3 from '../../../../pictures/California/losangeles3.JPG';
import sanfrancisco from '../../../../pictures/California/sanfrancisco.jpg';
import yosemite1 from '../../../../pictures/California/yosemite1.jpg';
import yosemite2 from '../../../../pictures/California/yosemite2.jpg';
import universal from '../../../../pictures/California/universal.jpeg';
import disneylandia from '../../../../pictures/California/disneylandia.jpg';

function California () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>California</h1>
                <p className={style.introP}>
                    ¿Te gustaria viajar a California? California es uno de los estados más míticos de USA, ya sea porque es el hogar de muchas estrellas de cine, por los eventos deportivos que puedes disfrutar, o porque es la zona del sol eterno y las playas idílicas, entre muchas otras cosas. Veamos por que es un gran destino para disfrutar y recorrer en tus vacaiones!
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="California" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={asuza}></img>
                            <img src={elmonte}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={elmonte2}></img>
                            <img src={elmonte3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={elmonte4}></img>
                            <img src={hollywood}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={hollywood2}></img>
                            <img src={longbeach}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={longbeach2}></img>
                            <img src={longbeach3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={longbeach4}></img>
                            <img src={longbeach5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={losangeles}></img>
                            <img src={losangeles2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={losangeles3}></img>
                            <img src={sanfrancisco}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={yosemite1}></img>
                            <img src={yosemite2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={disneylandia}></img>
                            <img src={universal}></img>
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
                                <li><a href='#climate'>Clima</a></li>
                                <li><a href='#curiosity'>Curiosidades</a></li>
                                <li><a href='#transport'>Transporte</a></li>
                                <li><a href='#stay'>Hospedaje</a></li>
                                <li><a href='#requirements'>Requisitos</a></li>
                            </ul>
                        </div>
                        <div className={style.pageDesing}>
                            <h2>Que Visitar ?</h2>
                            <ul className={style.uList}>
                                <Link to='/la'>
                                    <li className={style.liElement}>Los Angeles</li>
                                </Link>
                                <Link to='/sfrancisco'>
                                    <li className={style.liElement}>San Francisco</li>
                                </Link>
                                <Link to='/beachcalifornia'>
                                    <li className={style.liElement}>Playas Californianas</li>
                                </Link>
                                <Link to='/parks'>
                                    <li className={style.liElement}>Parques de diversiones</li>
                                </Link>
                                <Link to='/nationalparks'>
                                    <li className={style.liElement}>Parques Nacionales</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='climate'>
                            <h3>Clima</h3>
                            <p>
                                Se dice de California que es el país de la eterna primavera. Este tópico se debe al clima templado que hay durante todo el año, aunque las temperaturas pueden variar mucho según la región.
                                En general el clima de la Costa Oeste es realmente agradable, sobre todo en las zonas más sureñas, dónde el calor perdura los 365 días del año.
                                Si tienes previsto ir de vacaciones a California te aconsejamos que decidas antes que lugares te apetece visitar y en que época del año. Por ejemplo, si quieres ver parques naturales y zonas montañosas, lo mejor es ir en verano. En cambio, si quieres hacer un viaje por la costa oeste podrás bañarte en ella en casi cualquier época del año, sobretodo en la zona sur de California.
                            </p>
                        </section>
                        <section id='curiosity'>
                            <h3>Curiosidades</h3>
                            <p>
                                California es un estado con un monton de opciones a la hora de planificar tus activades. Podes encontrar desde lugares y paisajes naturales bellizimos tanto montañas como playas; como asi lugares de lujo y orientados a las famosas estrellas de Hollywodd.
                                Hay variedad de activdades, de comidas, de lenguajes (el mas utilizado es el español debido a la cantidad de latinos que viven alli), y su territorio como ya mencionaba antes posee desde hermosas y lujosas playas, pasando por grandes urbes como Los Angeles Downton, San Francisco y Santa Monica. Tambien puedes encontrar excuriones a Disneylandia, Universal Studios, Hollywood y Beverly Hills. Si sos mas fanatico de lo natural tenes el parque nacional de Yosmite que es en mi opinion de los mas bellos del territorio americano, tambien esta el cañon de Azusa con su atractivo y muchas ciudades pequeñas cada una con su encanto.
                                La desventaja es que al ser un territorio tan grande y con tantos paisajes, las distacias a recorrer son muy amplias por ende es casi imprecindible considerar en alquilar un auto para mejorar la experiencia de tu viaje, es muy sencillo de hacerlo y la mayoria opta por esa opcion.
                                A la hora de hospedarse y tener en cuenta el gasto de comida cabe aclarar que hay para todos los gustos, desde ciudades caras tanto para hospedarse como para comer; hasta ciudades pequeñas donde posiblemente puedas ahorrarte algo de dinero en este aspecto pero si debas considerar lo del auto para movilizarte.
                            </p>
                        </section>
                        <section id='transport'>
                            <h3>Transporte y como moverse en California</h3>
                            <p>
                                La mejor opción para desplazarte es alquilando un coche como medio de transporte, ya que es mucho más práctico y rápido que el transporte privado, tambien hay que tener en cuenta que california tiene muchisimas opciones para visitar y la manera de lograr recorrerlas es con un vehiculo propio y de esa manera conocer realmente el destino que prefieras. Además, alquilar un coche en California es relativamente fácil y la gasolina no es cara.
                                Para alquilar un coche en California: la licencia de conducir, el pasaporte (en caso de no residentes) y una tarjeta de crédito por si tienes un accidente o algún problema.
                                Muchas compañías de alquiler acostumbran a pedir como requisito que los conductores sean mayores de 25 años, sin embargo, también es posible encontrar alguna empresa que acepten a partir de los 21 años de edad.
                                Los precios de alquiler de coches en California están sobre unos 40$ por día sin contar el seguro, aproximadamente. De todas formas, las tarifas varían mucho según las prestaciones que pidas.
                                Algunas de las empresas más conocidas son Avis, Advantage, Enterprise, Alamo, Fox y Hertz, entre otras.
                                Recomendamos utilizar RentalCars, ya que permite gestionar tu reserva y alquiler de automóviles y comparar tarifas entre compañías internacionales.
                            </p>
                        </section>
                        <section id='stay'>
                            <h3>Hospedaje</h3>
                            <p>
                                A la hora de planificar tu estadia lo mas recomendable es alojarse en hostels o airbnb en caso de que decidas hacer pequeñas estadias en diferentes ciudades y de esta manera realizar un recorrido mas amplio. En caso de que tu idea sea visitar unas pocas ciudades la opcion mas confiable (pero mas cara tambien) es la alojarte en un hotel.
                                Puedes realizar tu reserva con anticipacion, algunos hoteles incluyen desayuno y otros beneficios; por lo general los dueños de las casas para Airbnb suelen tener sus reglamentos o normas para hospedarse en la propiedad, en la parte superior de utilidades puedes encontrar paginas externas para buscar la mejor opcion para tu viaje.
                            </p>
                        </section>
                        <section id='requirements'>
                            <h3>Requisitos para poder viajar</h3>
                            <p>
                               De acuerdo al pais del que se provenga es necesario averiguar si debes presentar un visado o no y de que tipo para ingresar al pais, en el caso de Argentina se debe presentar el visado de tipo B1 es decir de turista para poder ingresar al pais, los turnos deben tomarse con anticipacion y el monto de la misma es de 160 USD (datos a tener en cuenta al momento de realizar el tramite: requiere 2 dias, presentar documentos a nombre propio DNI, impuestos, recibo de sueldo, pasaporte. El tramite se divide en un dia la toma de datos y huellas digitales y el otro la entrevista en la embajada en la ciudad de Buenos Aires)
                               Al momento de viajar recomendamos llevar: pasaporte con visa B1 aprobada, ticket de ida y vuelta, tarjetsa de credito para justificar como costearemos el viaje, en caso de alquilar carro llevar licencia de conducir y por ultimo cualquier tipo de ticket o comprobante de compra de cualquier tipo de atraccion, hospedaje o auto que se haya realizado con anticipacion.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default California;