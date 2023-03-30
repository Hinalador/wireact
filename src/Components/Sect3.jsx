import React from 'react'
import '../Stylesheets/Wiqaya.css'

function Sect3(props) {
    return (
        <div>
            <section className="sectionvideo">
                <div style={{padding:'2rem'}} className="row d-flex justify-content-center align-items-center bg-dark">
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <video width="400px" height="300px" controls autoPlay muted>
                            <source src="src\assets\sgrombomdri2.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h2 style={{ fontFamily: 'Abel', color: '#B21F1A' }} className="text-center">
                            {props.que}
                        </h2>
                        <div className="mt-4">
                            <p
                                className="pe-4"
                                style={{
                                    textAlign: 'justify',
                                    fontFamily: 'Abel',
                                    color: 'white',
                                    fontSize: '20px',
                                }}
                            >
                                Wiqaya es una empresa que se dedica a la enseñanza y explicación del funcionamiento de las
                                señales reglamentarias. Su objetivo principal es ayudar a los conductores a comprender el
                                significado de las señales y cómo deben interpretarlas en diferentes situaciones de tráfico.
                                <br />
                                En resumen, Wiqaya es una empresa dedicada a mejorar la seguridad vial al enseñar y explicar
                                el funcionamiento de las señales reglamentarias, lo que ayuda a los conductores a tomar
                                decisiones informadas y reducir los accidentes de tráfico.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sect3