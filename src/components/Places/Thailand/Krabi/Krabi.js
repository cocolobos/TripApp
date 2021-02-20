import React, {useState} from 'react';
import style from './krabi.module.css';
import Nav from '../../../../layout/Nav/Nav';
import Footer from '../../../../layout/Footer/Footer';
import Modal from '../../../Modal/Modal';
import krabi from '../../../../pictures/thai/krabi/krabi.JPG';
import krabi1 from '../../../../pictures/thai/krabi/krabi1.JPG';
import krabi2 from '../../../../pictures/thai/krabi/krabi2.JPG';
import krabi3 from '../../../../pictures/thai/krabi/krabi3.jpg';
import krabi4 from '../../../../pictures/thai/krabi/krabi4.jpg';
import krabi5 from '../../../../pictures/thai/krabi/krabi5.jpg';
import krabi6 from '../../../../pictures/thai/krabi/krabi6.jpg';
import krabi7 from '../../../../pictures/thai/krabi/krabi7.jpg';
import krabi8 from '../../../../pictures/thai/krabi/krabi8.jpg';
import krabi9 from '../../../../pictures/thai/krabi/krabi9.JPG';
import krabi10 from '../../../../pictures/thai/krabi/krabi10.JPG';
import krabi11 from '../../../../pictures/thai/krabi/krabi11.jpg';
import krabi12 from '../../../../pictures/thai/krabi/krabi12.jpg';
import krabi13 from '../../../../pictures/thai/krabi/krabi13.jpg';
import krabi14 from '../../../../pictures/thai/krabi/krabi14.JPG';
import krabi15 from '../../../../pictures/thai/krabi/krabi15.JPG';
import krabi16 from '../../../../pictures/thai/krabi/krabi16.JPG';
import krabi17 from '../../../../pictures/thai/krabi/krabi17.JPG';
import krabi18 from '../../../../pictures/thai/krabi/krabi18.JPG';
import krabi19 from '../../../../pictures/thai/krabi/krabi19.jpg';
import krabi20 from '../../../../pictures/thai/krabi/krabi20.jpg';
import krabi21 from '../../../../pictures/thai/krabi/krabi21.JPG';

function Krabi () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1>Krabi</h1>
                <p className={style.introP}>
                    Krabi es uno de los destinos favoritos de playa en Tailandia ya que, además de contar con una enorme oferta hotelera de todo tipo, también ofrece muchas actividades al viajero. Cuando hablamos de Krabi no nos referimos a la ciudad de Krabi, que ni siquiera está en la costa, sino a la provincia de Krabi. En ella, el pueblo de costa de mayor tamaño es Ao Nang, así que es el lugar donde suelen alojarse la mayoría de los turistas.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="Krabi" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={krabi}></img>
                            <img src={krabi1}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={krabi2}></img>
                            <img src={krabi3}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={krabi4}></img>
                            <img src={krabi5}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={krabi6}></img>
                            <img src={krabi7}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={krabi8}></img>
                            <img src={krabi9}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={krabi10}></img>
                            <img src={krabi11}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={krabi12}></img>
                            <img src={krabi13}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={krabi14}></img>
                            <img src={krabi15}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={krabi16}></img>
                            <img src={krabi17}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={krabi18}></img>
                            <img src={krabi19}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={krabi20}></img>
                            <img src={krabi21}></img>
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
                                <li className={style.vegasList}><a href='#stay'>Hospedaje</a></li>
                            </ul>
                        </div>
                        <div className={style.pageDesing}>
                            <h2>Que visitar ?</h2>
                            <ul className={style.uList}>
                                <li><a href='#railay'>La Bahía de Railay</a></li>
                                <li><a href='#4islands'>Las 4 islas</a></li>
                                <li><a href='#khophiphi'>Koh Phi Phi</a></li>
                                <li><a href='#hong'>La isla de Hong</a></li>
                                <li><a href='#phang'>La Bahía de Phang Nga y la isla de James Bond</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='curiosity'>
                            <h3>Curiosidades</h3>
                            <p>
                                Ao Nang encontraréis una gran infraestructura turística y, aunque su playa no es de las más bonitas, se puede usar como base para explorar las muchas islas o montes de los alrededores. A su vez tiene una zona costera llena de puestos callejeros para comprar todo tipo de regalos referidos a Krabi.
                                Tambien por esa zona encontraras una enorme variedad de restaurantes no solo de comida tipica thailandesa sino de todo tipo de comidas, realmente vale la pena recorrerlo tanto por los colores como por los olores de los diferentes puestos para comer.
                            </p>
                        </section>
                        <section id='stay'>
                            <h3>Hospedaje</h3>
                            <p>
                                Lo mas recomendable es alojarse en la zona costera de Ao Nang ya que todas las excursiones hacia las islas salen desde ahi mismo, a su vez el paseo peatonal con negocios y restaurantes tambien esta en esa zona por lo que te sera mas comodo para recorrerlo caminando tantas veces como quieras durante tu estadia.
                            </p>
                        </section>
                        <section id='railay'>
                            <h3>La Bahía de Railay</h3>
                            <p>
                                Se trata de una bahía a la que solo se puede acceder por mar ya que unos enormes acantilados impiden el acceso por tierra. Cuenta con 3 playas: la West Beach, la principal; la East Beach, que apenas tiene arena; y la más bonita, la Phra Nang Beach. En la bahía hay restaurantes, hoteles y tiendas. En ella se puede hacer escalada y kayaking. También cuenta con un bonito mirador y un lago interior. Ir desde Ao Nang cuesta unos 100 THB por persona en barca de cola larga.
                            </p>
                        </section>
                        <section id='4islands'>
                            <h3>4 Islas</h3>
                            <p>
                                4 pequeñas islas enfrente de la costa de Ao Nang que suelen visitarse en un tour de un día junto a la Bahía de Railay. La principal es la Isla de Poda, que cuenta con una playa de arena blanca paradisíaca. Cuando baja la marea, las otras 3 islas quedan unidas por un banco de arena que crea un paisaje genial. Es parque nacional y la entrada cuesta 400 THB por persona.
                            </p>
                        </section>
                        <section id='khophiphi'>
                            <h3>Kho Phi Phi</h3>
                            <p>
                                Quizas su nombre es el mas conocido, el archipélago de Phi Phi está formado por 5 islas si bien las más famosas son la pequeña Phi Phi Leh, donde está la playa Maya Bay; y Phi Phi Don, la mayor de todas en la que se ha construido y hay bastantes opciones de alojamiento. Ambas islas, junto a la pequeña Mosquito island, pueden visitarse en una excursión de un día en lancha desde Ao Nang. Es parque nacional y la entrada cuesta 400 THB por persona.
                            </p>
                        </section>
                        <section id='hong'>
                            <h3>Isla de Hong</h3>
                            <p>
                                Desconocida hace unos años, recientemente se ha convertido en uno de las playas más populares de Tailandia. Y no es de extrañar ya que es una de las más bonitas del país. Además, la curiosa geografía de la isla crea un pequeño lago interior al que puede accederse en la barca. El tour a esta isla suele incluir también parada a otros islotes más pequeños que quedan cerca. Es parque nacional y la entrada cuesta 300 THB por persona.
                            </p>
                        </section>
                        <section id='phang'>
                            <h3>Bahía de Phang Nga y la isla de James Bond</h3>
                            <p>
                                Se trata de una enorme bahía con varias islas, como la famosa isla de James Bond en la que se rodó la película de James Bond y la Pistola de Oro, y un interesante pueblo flotante musulmán al que suele pararse a comer en las excursiones desde Ao Nang. La bahía también ofrece buenas posibilidades kayaking.
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