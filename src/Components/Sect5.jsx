import React from 'react'
import '../Stylesheets/Wiqaya.css'

function Sect5(props) {
    return (
        <div>
            <section className="container-fluid" id="sect3">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-center sinco">
                        <button className="boto btn" type="button">
                            {props.jugar}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sect5