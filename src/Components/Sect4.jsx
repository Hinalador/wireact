import React from 'react'
import '../Stylesheets/Wiqaya.css'

function Sect4(props) {
    return (
        <div>
            <section className='pt-5' id='section2'>
                <div className="container-fluid">
                    <h1 className="text-center ligoleye">{props.personajes}</h1>
                    <div className="row d-flex justify-content-evenly align-items-center" id='contimg'>
                        <div className="col-12 col-lg-6 p-3 d-flex justify-content-center">
                            <button type='button' className='btn' data-bs-toggle='modal' data-bs-Target='#rigobertus' >
                                <img style={{ width: '250px' }} src="src\assets\RIGOBERTUS.png" alt="" />
                                <h2 className='text-center txto'>Rigobertus</h2>
                            </button>
                            <div className="modal fade" id='rigobertus' tabindex="-1" aria-labelledby='exampleModalLabel' aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content bg-dark">
                                        <div className="modal-header">
                                            <h1 className="ligoleye">Nuestro Equipo</h1>
                                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label='close'></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="card bg-dark">
                                                <img className='img-card-top' src="src\assets\RIGOBERTUS.png" alt="..." />
                                                <div className="card-body">
                                                    <h5 className='aaa card-title text-center'>Rigobertus</h5>
                                                    <p style={{ color: 'white' }} className="card-text">Rigobertus es un hombre de contextura
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
                        </div>
                        <div className="col-12 col-lg-6 p-3 d-flex justify-content-center">
                            <button type='button' className='btn' data-bs-toggle='modal' data-bs-Target='#Albeiro' >
                                <img style={{ width: '250px' }} src="src\assets\ALBEIRO.png" alt="" />
                                <h2 className='text-center txto'>Albeiro</h2>
                            </button>
                            <div className="modal fade" id='Albeiro' tabindex="-1" aria-labelledby='exampleModalLabel' aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content bg-dark">
                                        <div className="modal-header">
                                            <h1 className="ligoleye">Nuestro Equipo</h1>
                                            <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label='close'></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="card bg-dark">
                                                <img className='img-card-top' src="src\assets\ALBEIRO.png" alt="..." />
                                                <div className="card-body">
                                                    <h5 className='aaa card-title text-center'>Juan Manuel</h5>
                                                    <p style={{ color: 'white' }} className="card-text">Albeiro es un policia de aproximadame 35 años de
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
            </section>
        </div>
    )
}

export default Sect4