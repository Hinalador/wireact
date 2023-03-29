import React from 'react'
import '../Stylesheets/Wiqaya.css'

function Sect2() {
  return (
    <div>
        <section className="container-fluid" id="sect2">
                <div className="row d-flex align-items-center justify-content-evenly rou">
                    <h2 className="text-center pt-5 ligoleye mb-5">EQUIPO WIQAYA</h2>
                    <div className="col-12 col-lg-6 img2 p-3">
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#Marlene">
                            <img style={{ width: '30%' }} className="img-fluid" src="src\assets\juanma.png" alt="" />
                            <h3 className="text-center txto">Juan Manuel</h3>
                        </button>
                    </div>
                    <div className="col-12 col-lg-6 img2 p-3">
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#Santi">
                            <img style={{ width: '30%' }} className="img-fluid" src="src\assets\Santiagro.png" alt="" />
                            <h3 className="text-center txto">Juan Manuel</h3>
                        </button>

                        <div className="modal fade" id="Marlene" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="Marlene aaa fs-5" id="exampleModalLabel">Quien soy?</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="card">
                                            <img src="src\assets\juanma.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="aaa card-title text-center">JUAN MANUEL</h5>
                                                <p className="card-text">Como programador para la página web "wiqaya", tengo conocimientos en lenguajes de programación web como HTML, CSS y JavaScript, y experiencia en el desarrollo de aplicaciones web. Mi responsabilidad es crear, diseñar y mantener el sitio web, asegurándome de que funcione correctamente y cumpla con los requisitos del cliente. Además, trabajo en colaboración con diseñadores gráficos, especialistas en SEO y otros profesionales para garantizar una experiencia de usuario óptima en el sitio web. Para ello, utilizo habilidades para resolver problemas, soy organizado y tengo capacidad para trabajar en equipo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="Santi" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="Santi aaa fs-5" id="exampleModalLabel">Quien soy?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="card">
                                        <img src="src\assets\Santiagro.png" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="aaa card-title text-center">SANTIAGO</h5>
                                            <p className="card-text">Hola, soy un diseñador gráfico y trabajo en el equipo de
                                                Wiqaya, una página web dedicada a la salud y el bienestar. Mi trabajo
                                                consiste en crear diseños atractivos y funcionales para la interfaz de
                                                usuario de la página, asegurándome de que los usuarios puedan navegar
                                                fácilmente y encontrar la información que necesitan. También trabajo en la
                                                creación de elementos gráficos para la marca Wiqaya, como logotipos, iconos
                                                y otros elementos visuales. Me apasiona la creatividad y la innovación, y
                                                estoy emocionado de poder contribuir a una plataforma tan importante para la
                                                salud y el bienestar de las personas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="sectionvideo">
                        <div className="row d-flex justify-content-center align-items-center bg-dark">
                            <div className="col-12 col-lg-6 d-flex justify-content-center">
                                <video width="400px" height="300px" controls autoPlay muted>
                                    <source src="src\assets\sgrombomdri2.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-12 col-lg-6">
                                <h2 style={{ fontFamily: 'Abel', color: '#B21F1A' }} className="text-center">¿Que es wiqaya?</h2>
                                <div className="mt-4">
                                    <p className="pe-4" style={{ textAlign: 'justify', fontFamily: 'Abel', color: 'white', fontSize: '20px' }}>
                                        Wiqaya es una empresa que se dedica a la enseñanza y explicación
                                        del
                                        funcionamiento de las señales reglamentarias. Su objetivo principal es ayudar a los
                                        conductores
                                        a comprender el significado de las señales y cómo deben interpretarlas en diferentes
                                        situaciones
                                        de tráfico.
                                        <br />
                                        En resumen, Wiqaya es una empresa dedicada a mejorar la seguridad vial al enseñar y explicar
                                        el
                                        funcionamiento de las señales reglamentarias, lo que ayuda a los conductores a tomar
                                        decisiones
                                        informadas y reducir los accidentes de tráfico.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="container-fluid">
                        <div className="row d-flex justify-content-evenly align-items-center" id="contimg">
                            <h2 className="ligoleye text-center mt-5 mb-5">PERSONAJES WIQAYA</h2>
                            <div className="col-12 col-lg-6 p-3" id="contSEXO">
                                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#chimbilin">
                                    <img className="img-fluid" src="src\assets\ALBEIRO.png" alt="" />
                                    <h2 className="txto">Albeiro</h2>
                                </button>
                            </div>
                            <div className="col-12 col-lg-6 p-3" id="contSEXO">
                                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#Rigobertus">
                                    <img className="img-fluid" src="src\assets\RIGOBERTUS.png" alt="" />
                                    <h2 className="txto">Rigobertus</h2>
                                </button>

                                <div className="modal fade" id="Rigobertus" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="Rigobertus aaa fs-5" id="exampleModalLabel">FICHA TÉCNICA</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="card">
                                                    <img src="src\assets\RIGOBERTUS.png" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="aaa card-title text-center">RIGOBERTUS</h5>
                                                        <p className="card-text">Rigobertus es un hombre de contextura
                                                            delgada, mide aproximadamente unos 1.75m
                                                            de altura, su cabello es totalmente negro, al
                                                            igual que su color de ojos, piel morena, nacido
                                                            en Medellín, Colombia, y tiene 23 años de edad.
                                                            Es un poco alergico al polvo y al frío, es un poco
                                                            tímido, pero no es un impedimento para
                                                            cumplir sus objetivos y metas.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="modal fade" id="chimbilin" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="aaa chimbilin fs-5" id="exampleModalLabel">FICHA TÉCNICA</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="card">
                                                    <img src="src\assets\ALBEIRO.png" className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="aaa card-title text-center">ALBEIRO</h5>
                                                        <p className="card-text">Albeiro es un policia de aproximadame 35 años de
                                                            los cuales 14 a prestado servicio a la patria, es de
                                                            contextura delgada con piel clara, tiene unos 182cm
                                                            de estatura, ojos color marron, su cabello es rojizo
                                                            con tonalidades amarillas, nacido en la comuna 13,
                                                            Medellin, Colombia, es levemente alergico a la piña,
                                                            es muy extrovertido y se reta diariamente para conseguir logros nuevos
                                                            en su vida tanto para el como
                                                            para los que lo rodean.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Sect2