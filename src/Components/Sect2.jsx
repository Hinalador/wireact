import React from 'react'
import '../Stylesheets/Wiqaya.css'

function Sect2(props) {
    return (
        <div>
            <section className='pt-5' id='section2'>
                <div className="container-fluid">
                    <h1 className="text-center ligoleye">{props.equipo}</h1>
                    <div className="row d-flex justify-content-evenly align-items-center" id='contimg'>
                        <div className="col-12 col-lg-6 p-3 d-flex justify-content-center">
                            <button type='button' className='btn' data-bs-toggle='modal' data-bs-Target='#marlene'>
                                <img style={{ width: '250px' }} src="src\assets\juanma.png" alt="" />
                                <h2 className='text-center txto'>Juan Manuel</h2>
                            </button>
                            <div className="modal fade" id='marlene' tabindex="-1" aria-labelledby='exampleModalLabel' aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content bg-dark">
                                        <div className="modal-header">
                                            <h1 className="ligoleye">Nuestro Equipo</h1>
                                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label='close'></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="card bg-dark">
                                                <img className='img-card-top' src="src\assets\juanma.png" alt="..." />
                                                <div className="card-body">
                                                    <h5 className='aaa card-title text-center'>Juan Manuel</h5>
                                                    <p style={{color: 'white'}} className="card-text">Como programador para la página web "wiqaya", tengo
                                                        conocimientos en lenguajes de programación web como HTML, CSS y JavaScript,
                                                        y experiencia en el desarrollo de aplicaciones web. Mi responsabilidad es
                                                        crear, diseñar y mantener el sitio web, asegurándome de que funcione
                                                        correctamente y cumpla con los requisitos del cliente. Además, trabajo en
                                                        colaboración con diseñadores gráficos, especialistas en SEO y otros
                                                        profesionales para garantizar una experiencia de usuario óptima en el sitio
                                                        web. Para ello, utilizo habilidades para resolver problemas, soy organizado
                                                        y tengo capacidad para trabajar en equipo.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 p-3 d-flex justify-content-center">
                            <button type='button' className='btn' data-bs-toggle='modal' data-bs-Target='#santi' >
                                <img style={{ width: '250px' }} src="src\assets\santiagro.png" alt="" />
                                <h2 className='text-center txto'>Santiago</h2>
                            </button>
                            <div className="modal fade" id='santi' tabindex="-1" aria-labelledby='exampleModalLabel' aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content bg-dark">
                                        <div className="modal-header">
                                            <h1 className="ligoleye">Nuestro Equipo</h1>
                                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label='close'></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="card bg-dark">
                                                <img className='img-card-top' src="src\assets\santiagro.png" alt="..." />
                                                <div className="card-body">
                                                    <h5 className='aaa card-title text-center'>Santiago</h5>
                                                    <p style={{color: 'white'}} className="card-text">Hola, soy un diseñador gráfico y trabajo en el equipo de
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sect2