import React, {useState} from 'react';
import style from './neighbor.module.css';
import Nav from '../../../../../layout/Nav/Nav';
import Footer from '../../../../../layout/Footer/Footer';
import Modal from '../../../../Modal/Modal';
import bronx from '../../../../../pictures/nyc/barrios/bronx.JPG'
import bronx1 from '../../../../../pictures/nyc/barrios/bronx1.JPG'
import bronx2 from '../../../../../pictures/nyc/barrios/bronx2.JPG'
import bronx4 from '../../../../../pictures/nyc/barrios/bronx4.JPG'
import bronx5 from '../../../../../pictures/nyc/barrios/bronx5.JPG'
import bronx6 from '../../../../../pictures/nyc/barrios/bronx6.JPG'
import chelsea from '../../../../../pictures/nyc/barrios/chelsea.JPG'
import chelsea1 from '../../../../../pictures/nyc/barrios/chelsea1.JPG'
import chelsea2 from '../../../../../pictures/nyc/barrios/chelsea2.jpg'
import chelsea3 from '../../../../../pictures/nyc/barrios/chelsea3.jpg'
import chelsea4 from '../../../../../pictures/nyc/barrios/chelsea4.JPG'
import chelsea5 from '../../../../../pictures/nyc/barrios/chelsea5.JPG'
import chinatown from '../../../../../pictures/nyc/barrios/chinatown.JPG'
import chinatown1 from '../../../../../pictures/nyc/barrios/chinatown1.jpg'
import chinatown2 from '../../../../../pictures/nyc/barrios/chinatown2.JPG'
import chinatown3 from '../../../../../pictures/nyc/barrios/chinatown3.JPG'
import harlem1 from '../../../../../pictures/nyc/barrios/harlem1.jpg'
import harlem2 from '../../../../../pictures/nyc/barrios/harlem2.JPG'
import harlem3 from '../../../../../pictures/nyc/barrios/harlem3.JPG'
import harlem4 from '../../../../../pictures/nyc/barrios/harlem4.JPG'
import harlem5 from '../../../../../pictures/nyc/barrios/harlem5.jpg'
import harlem6 from '../../../../../pictures/nyc/barrios/harlem6.JPG'
import hell from '../../../../../pictures/nyc/barrios/hell.jpg'
import hell2 from '../../../../../pictures/nyc/barrios/hell2.jpg'
import hell3 from '../../../../../pictures/nyc/barrios/hell3.jpg'
import hell4 from '../../../../../pictures/nyc/barrios/hell4.jpg'
import italy from '../../../../../pictures/nyc/barrios/italy.jpg'
import italy1 from '../../../../../pictures/nyc/barrios/italy1.jpg'
import italy2 from '../../../../../pictures/nyc/barrios/italy2.jpg'
import italy3 from '../../../../../pictures/nyc/barrios/italy3.jpg'
import soho1 from '../../../../../pictures/nyc/barrios/soho1.jpg'
import soho2 from '../../../../../pictures/nyc/barrios/soho2.jpg'
import soho3 from '../../../../../pictures/nyc/barrios/soho3.jpg'
import soho4 from '../../../../../pictures/nyc/barrios/soho4.jpg'

function Neighbor () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Barrios Pintorescos</h1>
                <p className={style.introP}>
                    Algo asombroso de la isla de Manhattan es la diversidad cultural que hay en ella, y eso se ve trasladado a los diferentes barrios que hay. Ya sea por estructura, por arquitectura, por forma de vestir de la gente o por el estilo de restaurantes que hay cada uno tiene lugares o cosas que lo hacen unico y diferente a otro.
                    Algunos de estos barrios se han ido modernizando con el tiempo y es un gran contraste con respecto a otros que mantienen su escencia hasta el dia de hoy.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Barrios Pintorescos" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={bronx}></img>
                            <img src={bronx1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={bronx2}></img>
                            <img src={bronx4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={bronx5}></img>
                            <img src={bronx6}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chelsea}></img>
                            <img src={chelsea1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chelsea2}></img>
                            <img src={chelsea3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chelsea4}></img>
                            <img src={chelsea5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chinatown}></img>
                            <img src={chinatown1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={chinatown2}></img>
                            <img src={chinatown3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={harlem1}></img>
                            <img src={harlem2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={harlem3}></img>
                            <img src={harlem4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={harlem5}></img>
                            <img src={harlem6}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={hell}></img>
                            <img src={hell2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={hell4}></img>
                            <img src={hell3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={italy}></img>
                            <img src={italy1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={italy2}></img>
                            <img src={italy3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={soho1}></img>
                            <img src={soho2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={soho3}></img>
                            <img src={soho4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <button className={style.BtnModCancel} onClick={() => setOpenModal(false)}>Close</button>
                        </div>
                    </Modal>
                <div className={style.pageStyle}>
                    <div className={style.sideBar}>
                        <div className={style.pageDesing}>
                            <h2>Barrios en NYC</h2>
                            <ul className={style.uList}>
                                <li><a href='#chelsea'>Chelsea & Meat Packing Distric</a></li>
                                <li><a href='#hellskitchen'>Hell's Kitchen</a></li>
                                <li><a href='#littleitaly'>Little Italy</a></li>
                                <li><a href='#soho'>Soho & Tribeca</a></li>
                                <li><a href='#harlem'>Harlem</a></li>
                                <li><a href='#chinatown'>Chinatown</a></li>
                                <li><a href='#bronx'>Bronx</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='chelsea'>
                            <h3>Chelsea & Meat Packing Distric</h3>
                            <p>
                                En esta ruta nos vamos a mover por el barrio de Meatpacking district, situado en la parte oeste de Manhattan. En otros tiempos, esta era una zona bastante degradada de Nueva York, pero gracias a iniciativas como Chelsea Market o la High Line ha conseguido ponerse de moda y estar ahora mismo viviendo una nueva juventud. Para llegar a esta zona lo mejor es bien ir andando desde Union Square o bien coger la línea azul de metro y bajarnos en la parada de la 8th Ave. – 14th st.
                                Chelsea Market, situado en la 9th Avenue con la 15th street, se encuentra ubicado en una antigua fábrica de Nabisco, en concreto en esta fábrica fue donde se inventaron sus famosas Oreos. En un increíble ejercicio de rehabilitación, la antigua fábrica se ha convertido en un precioso edificio de oficinas, y en las plantas más bajas se sitúa el mercado donde puedes comprar todo tipo de cosas y parar a comer o cenar.
                                High Line es un parque situado en antiguas vias de tren, es un paseo de unos 3 kilómetros en total y te permite tener otra visión de Manhattan, pues se va metiendo entre los edificios, está algo elevado sobre la calle y te permite ver preciosas vistas de Nueva York y sus rascacielos. La High Line pasa justo al lado de los Chelsea Piers, el antiguo puerto de Chelsea, lugar al que tenía que haber llegado el famoso Titanic, y que ha sido reconvertido en un conjunto de clubs deportivos y gimnasio.
                            </p>
                        </section>
                        <section id='hellskitchen'>
                            <h3>Hell's Kitchen</h3>
                            <p>
                                California es un estado con un monton de opciones a la hora de planificar tus activades. Podes encontrar desde lugares y paisajes naturales bellizimos tanto montañas como playas; como asi lugares de lujo y orientados a las famosas estrellas de Hollywodd.
                                Hay variedad de activdades, de comidas, de lenguajes (el mas utilizado es el español debido a la cantidad de latinos que viven alli), y su territorio como ya mencionaba antes posee desde hermosas y lujosas playas, pasando por grandes urbes como Los Angeles Downton, San Francisco y Santa Monica. Tambien puedes encontrar excuriones a Disneylandia, Universal Studios, Hollywood y Beverly Hills. Si sos mas fanatico de lo natural tenes el parque nacional de Yosmite que es en mi opinion de los mas bellos del territorio americano, tambien esta el cañon de Azusa con su atractivo y muchas ciudades pequeñas cada una con su encanto.
                                La desventaja es que al ser un territorio tan grande y con tantos paisajes, las distacias a recorrer son muy amplias por ende es casi imprecindible considerar en alquilar un auto para mejorar la experiencia de tu viaje, es muy sencillo de hacerlo y la mayoria opta por esa opcion.
                                A la hora de hospedarse y tener en cuenta el gasto de comida cabe aclarar que hay para todos los gustos, desde ciudades caras tanto para hospedarse como para comer; hasta ciudades pequeñas donde posiblemente puedas ahorrarte algo de dinero en este aspecto pero si debas considerar lo del auto para movilizarte.
                            </p>
                        </section>
                        <section id='littleitaly'>
                            <h3>Little Italy</h3>
                            <p>
                                A la hora de planificar tu estadia lo mas recomendable es alojarse en hostels o airbnb en caso de que decidas hacer pequeñas estadias en diferentes ciudades y de esta manera realizar un recorrido mas amplio. En caso de que tu idea sea visitar unas pocas ciudades la opcion mas confiable (pero mas cara tambien) es la alojarte en un hotel.
                                Puedes realizar tu reserva con anticipacion, algunos hoteles incluyen desayuno y otros beneficios; por lo general los dueños de las casas para Airbnb suelen tener sus reglamentos o normas para hospedarse en la propiedad, en la parte superior de utilidades puedes encontrar paginas externas para buscar la mejor opcion para tu viaje.
                            </p>
                        </section>
                        <section id='soho'>
                            <h3>Soho & Tribeca</h3>
                            <p>
                               De acuerdo al pais del que se provenga es necesario averiguar si debes presentar un visado o no y de que tipo para ingresar al pais, en el caso de Argentina se debe presentar el visado de tipo B1 es decir de turista para poder ingresar al pais, los turnos deben tomarse con anticipacion y el monto de la misma es de 160 USD (datos a tener en cuenta al momento de realizar el tramite: requiere 2 dias, presentar documentos a nombre propio DNI, impuestos, recibo de sueldo, pasaporte. El tramite se divide en un dia la toma de datos y huellas digitales y el otro la entrevista en la embajada en la ciudad de Buenos Aires)
                               Al momento de viajar recomendamos llevar: pasaporte con visa B1 aprobada, ticket de ida y vuelta, tarjetsa de credito para justificar como costearemos el viaje, en caso de alquilar carro llevar licencia de conducir y por ultimo cualquier tipo de ticket o comprobante de compra de cualquier tipo de atraccion, hospedaje o auto que se haya realizado con anticipacion.
                            </p>
                        </section>
                        <section id='harlem'>
                            <h3>Harlem</h3>
                            <p>
                               De acuerdo al pais del que se provenga es necesario averiguar si debes presentar un visado o no y de que tipo para ingresar al pais, en el caso de Argentina se debe presentar el visado de tipo B1 es decir de turista para poder ingresar al pais, los turnos deben tomarse con anticipacion y el monto de la misma es de 160 USD (datos a tener en cuenta al momento de realizar el tramite: requiere 2 dias, presentar documentos a nombre propio DNI, impuestos, recibo de sueldo, pasaporte. El tramite se divide en un dia la toma de datos y huellas digitales y el otro la entrevista en la embajada en la ciudad de Buenos Aires)
                               Al momento de viajar recomendamos llevar: pasaporte con visa B1 aprobada, ticket de ida y vuelta, tarjetsa de credito para justificar como costearemos el viaje, en caso de alquilar carro llevar licencia de conducir y por ultimo cualquier tipo de ticket o comprobante de compra de cualquier tipo de atraccion, hospedaje o auto que se haya realizado con anticipacion.
                            </p>
                        </section>
                        <section id='chinatown'>
                            <h3>Chinatown</h3>
                            <p>
                                La mejor opción para desplazarte es alquilando un coche como medio de transporte, ya que es mucho más práctico y rápido que el transporte privado, tambien hay que tener en cuenta que california tiene muchisimas opciones para visitar y la manera de lograr recorrerlas es con un vehiculo propio y de esa manera conocer realmente el destino que prefieras. Además, alquilar un coche en California es relativamente fácil y la gasolina no es cara.
                                Para alquilar un coche en California: la licencia de conducir, el pasaporte (en caso de no residentes) y una tarjeta de crédito por si tienes un accidente o algún problema.
                                Muchas compañías de alquiler acostumbran a pedir como requisito que los conductores sean mayores de 25 años, sin embargo, también es posible encontrar alguna empresa que acepten a partir de los 21 años de edad.
                                Los precios de alquiler de coches en California están sobre unos 40$ por día sin contar el seguro, aproximadamente. De todas formas, las tarifas varían mucho según las prestaciones que pidas.
                                Algunas de las empresas más conocidas son Avis, Advantage, Enterprise, Alamo, Fox y Hertz, entre otras.
                                Recomendamos utilizar RentalCars, ya que permite gestionar tu reserva y alquiler de automóviles y comparar tarifas entre compañías internacionales.
                            </p>
                        </section>
                        <section id='bronx'>
                            <h3>Bronx</h3>
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

export default Neighbor;