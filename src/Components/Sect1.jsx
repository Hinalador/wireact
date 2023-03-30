import React from 'react'
import '../Stylesheets/Wiqaya.css'

function Sect1(props) {
    return (
        <div>
            <section className="container-fluid">
                <div className="row d-flex mt-5 mb-5">
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center diverr">
                        <img className="img-fluid imgerr" src="src\assets\stop.jpg" alt="" />
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                        <h1 className="text-center ache1err">Problematica</h1>
                        <p className="parrer">{props.parr1}</p>
                    </div>
                </div>
                <hr />
                <div className="row d-flex align-items-center mt-5 mb-5">
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                        <h1 className="text-center ache1err2">{props.objSo}</h1>
                        <div className="mt-4 ps-5">
                            <h3 className='ache3err'>Objetivo:</h3>
                            <p className='parrer4'>Resolver la problemática de la falta de comprensión y respeto hacia las señales de
                                tránsito reglamentarias por parte de la sociedad.</p>
                            <hr />
                            <h3 className='ache3err2'>Solución</h3>
                            <div className="d-flex mt-3">
                                <h5 className="pe-2 ache5err">Educación:</h5>
                                <p className='parrer2'>{props.parr2}
                                </p>
                            </div>
                            <div className="d-flex mt-3">
                                <h5 className="pe-2 ache5err2">Simplificación:</h5>
                                <p className='parrer3'>Es posible simplificar el diseño y la
                                    cantidad de señales de tránsito reglamentarias, de modo que sean más fáciles de comprender y
                                    recordar para la mayoría de las personas. Esto puede ser realizado por expertos en diseño de
                                    señalización vial.
                                </p>
                            </div>
                            <div className="d-flex mt-3">
                                <h5 className="pe-2 ache5err3">Fiscalización:</h5>
                                <p className='parrer4'>Las autoridades competentes deben garantizar
                                    el cumplimiento y la fiscalización del respeto a las señales de tránsito reglamentarias.
                                    Esto puede ser llevado a cabo mediante la utilización de cámaras de vigilancia, multas y
                                    sanciones para los infractores.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center diverr2">
                        <img className="img-fluid imagerr2"
                            src="src\assets\teahub.io-wallpaper-ciudad-de-noche-2454445.jpg" alt="" />
                    </div>
                </div>
            </section>
            <hr />
        </div>
    )
}

export default Sect1