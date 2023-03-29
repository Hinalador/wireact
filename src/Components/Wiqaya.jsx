import React from 'react';
import '../Stylesheets/Wiqaya.css';

function Wiqaya(props) {
    return (
        <div>
            <header className='container-fluid sticky-top pt-3'>
                <div className='row d-flex'>
                    <div className='col-12 d-flex justify-content-between'>
                        <div>
                            <img
                                className='img1'
                                src='src\assets\wiqayalogoytexto.png'
                                alt=''
                            />
                        </div>
                        <div className='menu d-flex'>
                            <nav className='navbar navbar-expand-sm navbar-dark'>
                                <div className='container-fluid justify-content-end text-center'>
                                    <button
                                        className='navbar-toggler'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#navbarNav'
                                        aria-controls='navbarSupportedContent'
                                        aria-expanded='false'
                                        aria-label='Toggle navigation'
                                    >
                                        <span className='navbar-toggler-icon'></span>
                                    </button>
                                    <div className='collapse navbar-collapse' id='navbarNav'>
                                        <ul className='navbar-nav'>
                                            <li className='nav-item'>
                                                <a href='#' className='a1 m-2'>
                                                    {props.in}
                                                </a>
                                            </li>
                                            <li className='nav-item'>
                                                <a href='#' className='a1 m-2'>
                                                    {props.no}
                                                </a>
                                            </li>
                                            <li className='nav-item'>
                                                <a href='#' className='a1 m-2'>
                                                    {props.ju}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            

            
            
        </div>
    );
}

export default Wiqaya;
