import React, {useState} from 'react';
import style from './sanfrancisco.module.css';
import Nav from '../../../../../layout/Nav/Nav';
import Footer from '../../../../../layout/Footer/Footer';
import Modal from '../../../../Modal/Modal';
import sf from '../../../../../pictures/California/sf.jpg';
import sf2 from '../../../../../pictures/California/sf2.jpg';
import sf3 from '../../../../../pictures/California/sf3.jpg';
import sf4 from '../../../../../pictures/California/sf4.jpg';
import sf5 from '../../../../../pictures/California/sf5.jpg';
import sf6 from '../../../../../pictures/California/sf6.jpg';
import sf7 from '../../../../../pictures/California/sf7.jpg';
import sf8 from '../../../../../pictures/California/sf8.jpg';
import sf9 from '../../../../../pictures/California/sf9.jpg';
import sf10 from '../../../../../pictures/California/sf10.jpg';
import sf11 from '../../../../../pictures/California/sf11.jpg';
import sf12 from '../../../../../pictures/California/sf12.jpg';

function SanFrancisco () {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.mainBack}>
            <Nav/>
            <div className={style.worldMap}>
                <h1 id='sfrancisco'>San Francisco</h1>
                <p className={style.introP}>
                    San Francisco es una ciudad sumamente interesante para hacer turismo, porque debido a su peculiar ubicación geográfica (se encuentra edificada entre colinas) ofrece una distribución idílica y paisajística muy curiosa para los viajeros. Por eso y porque posee un clima fantástico, viajar a San Francisco, será una experiencia que no vas a olvidar en la vida.
                </p>
                <button onClick={() => setOpenModal(true)} className={style.photoButton}>Check Gallery</button>
                    <Modal title="San Francisco" openModal={openModal} setOpenModal={setOpenModal}>
                        <div className={style.imgStyle}>
                            <img src={sf}></img>
                            <img src={sf2}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={sf3}></img>
                            <img src={sf4}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={sf5}></img>
                            <img src={sf6}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={sf7}></img>
                            <img src={sf8}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={sf9}></img>
                            <img src={sf10}></img>
                        </div>
                        <div className={style.imgStyle}>
                            <img src={sf11}></img>
                            <img src={sf12}></img>
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
                                <li ><a href='#barriossf' className={style.sideList}>Barrios de San Francisco</a></li>
                                <li ><a href='#alcatraz' className={style.sideList}>Prision de Alcatraz</a></li>
                                <li ><a href='#goldengate' className={style.sideList}>Golden Gate</a></li>
                                <li ><a href='#goldengatepark' className={style.sideList}>Golden Gate Park</a></li>
                                <li ><a href='#pier39' className={style.sideList}>Pier 39</a></li>
                                <li ><a href='#cablecars' className={style.sideList}>Tranvia</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.contentDesing}>
                        <section id='barriossf'>
                            <h3>Barrios de San Francisco</h3>
                            <p>
                                Un paseo por la calle Lombard o el barrio Painted Ladies es obligatorio en San Francisco. De hecho, te recomendamos que visites cada uno de los barrios de esta ciudad (en el enlace anterior te contamos qué puedes encontrar en cada uno) y los lugares más interesantes de cada distrito para conocer a fondo San Francisco. ¿Tienes poco tiempo para visitar San Francisco? En éste caso, te recomendamos visitar el barrio de Chinatown, el puerto de Fisherman's Wharf, el centro (Union Square), y si te gusta el turismo alternativo... ¡No dejes de visitar la zona de Haight Ashbury (el barrio hippie y hipster de San Francisco).
                            </p>
                        </section>
                        <section id='alcatraz'>
                            <h3>Prision de Alcatraz</h3>
                            <p>
                                La visita a la Prisión Alcatraz comienza en el barrio Fisherman´s Wharf.
                                En el muelle deberás tomar un barco que lleva a los turistas desde el centro de San Francisco a la Isla Alcatraz, en un viaje que dura unos 15 minutos.
                                Una de las cosas que probablemente más te cautivará será el desembarco. Pensar que durante mucho tiempo peligrosos presos pasaron por esa misma instancia y pusieron por primera vez sus pies en esta isla resulta una experiencia muy difícil de contar.
                                Alcatraz fue una prisión de alta seguridad, por éste motivo gángsters tan famosos como AlCapone, han estado cerrados en este lugar.
                                Un paseo por las celdas, un roce con los muros de esa prisión cambiarán tu vida para siempre. Una cosa que debes saber es que las audioguías vienen en español, por lo que no te perderás ni un detalle de lo que veas en este recorrido. Estas guías tienen además una particularidad que las vuelve más interesantes: algunos de sus narradores han sido protagonistas. Son personas que por alguna razón estuvieron vinculadas con la isla y con la prisión y todo lo narran desde la propia experiencia, y esto vuelve su relato mucho más interesante y espeluznante.
                                Un recorrido a través del comedor, la biblioteca, el patio, las celdas, y otras instalaciones (entre las que se incluye la celda de castigo ¡realmente impresionante!) completan esta visita imprescindible de San Francisco.
                            </p>
                        </section>
                        <section id='goldengate'>
                            <h3>Golden Gate</h3>
                            <p>
                                La joya de la corona de San Francisco. Se trata del gran puente rojo que todos hemos visto en películas, revistas y fotografías. ¿Sabías que es posible cruzarlo a pie o en bicicleta? Se trata de un recorrido muy recomendable que te permitirá ver San Francisco desde otra perspectiva. Cuando te vayas acercando a él algo cambiará en ti; es realmente tan imponente esta estructura de metal rojo que nuestra vida no vuelve a ser la misma después de visitarlo. Ya que estás aquí te recomendamos que cruces este puente (son sólo 3 kilómetros), de este modo conectarás con tu visita dos regiones muy diferentes de San Francisco (la zona septentrional y el Marin County).
                                El Golden Gate tiene segurísimas aceras a ambos lados de la vía por la que pasan los vehículos, destinadas a los peatones y ciclistas.
                            </p>
                        </section>
                        <section id='goldengatepark'>
                            <h3>Golden Gate Park</h3>
                            <p>
                                El Golden Gate Park es un inmenso espacio verde que se encuentra junto al puente y es un lugar en el que podrás pasar una magnífica tarde, después de visitar y caminar por el altísimo puente. En este parque hay tres cosas que no debes dejar de visitar.
                                El Conservatory of Flowers, un edificio victoriano que permite descubrir una gran variedad de flores silvestres y conocer la flora autóctona de california. Seguramente cuando lo visites sentirás una mayor admiración por la forma en la que las plantas consiguen sobrevivir y ofrecer vívidos colores a nuestra vista. Además, el parque en el que está emplazado, es realmente bonito.
                                El Buffalo Paddock es una reserva en la que vive una manada de bisontes autóctonos y donde podrás observarlos en su hábitat natural. Este paseo es una de las cosas que no debes dejar de experimentar en San Francisco; resulta curioso que tan cerca del centro de la ciudad pueda existir tanta naturaleza salvaje de la que disfrutar.
                                Un paseo junto a este precioso lago puede ser la mejor forma de culminar tu visita al Golden Gate Park. Debes estar atento porque en este sitio también se realizan interesantes espectáculos musicales, de teatro y danza y puede ser una preciosa oportunidad para disfrutar de una maravillosa nochecita en San Francisco. También podrás alquilar un bote.
                            </p>
                        </section>
                        <section id='pier39'>
                            <h3>Pier 39</h3>
                            <p>
                                Otro rincón para conocer en San Francisco es el Muelle 39 situado en el barrio Fisherman's Wharf. Allí, además de encontrar muchísimas atracciones, puedes ir a visitar la zona donde vive una inmensa comunidad de leones marinos. Es una zona muy animada y llena de gente, dónde podrás contratar diferentes actividades y tours en barco. Si vistas el Pier 39, tendrás la oportunidad de probar uno de los platos más típicos de San Francisco: el cangrejo.
                            </p>
                        </section>
                        <section id='cablecars'>
                            <h3>Tranvia</h3>
                            <p>
                                El tranvía, que hoy en día es el único monumento nacional en movimiento. Funcionan desde 1873, a través de la tracción de un cable, y en la actualidad las líneas que quedan son atractivos turísticos para recorrer la ciudad o hacerse la típica foto delante de estos vehículos históricos. La línea de Powell-Hyde te dará vistas impresionantes de la bahía y Alcatraz. Para más información, visita el Cable Car Museum.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SanFrancisco;