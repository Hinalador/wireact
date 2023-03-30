import React from 'react'
import '../Stylesheets/Wiqaya.css'

function Footer(props) {
    return (
        <div>
            <footer id="footer">
                <div className="row pt-2 " id="grupo1">
                    <div className="col-12 col-lg-4" id="cosacont">
                        <figure>
                            <a href="#section1">
                                <img
                                    className="iconfoot img-fluid mx-auto d-block"
                                    src="src\assets\wiqayalogoytexto.png"
                                    alt=""
                                />
                            </a>
                        </figure>
                    </div>
                    <div className="col-12 col-lg-4 " id="cosacont">
                        <h2 className="foottitl text-center text-sm-center text-md-center text-lg-center">
                            CONTACTO
                        </h2>
                        <p className="numero text-center text-sm-center text-md-center text-lg-center pt-3">
                            Número de contacto: <i>+57 301-218-06-21</i>
                        </p>
                    </div>
                    <div className="col-12 col-lg-4 d-flex flex-column justify-content-center" id="cosacont">
                        <h2 className="textorojo text-center text-sm-center text-md-center text-lg-center">
                            {props.sigue}
                        </h2>
                        <div className="redcont d-flex">
                            <div>
                                <a href="#">
                                    <img className="icon mx-auto d-block" src="src\assets\fb.png" alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img className="icon mx-auto d-block" src="src\assets\ins.png" alt="" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img className="icon mx-auto d-block" src="src\assets\tw.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grupo2">
                    <small>&copy; 2022 <b className="wiqaya">Wiqaya</b> - Todos los Derechos Reservados.</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer