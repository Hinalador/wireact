import React from 'react'
import Wiqaya from './Components/Wiqaya.jsx'
import Sect1 from './Components/Sect1.jsx'
import Sect2 from './Components/Sect2.jsx'
import Sect3 from './Components/Sect3.jsx'
import Sect4 from './Components/Sect4.jsx'
import Sect5 from './Components/Sect5.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div>
      <Wiqaya 
        in='Inicio'
        no='Nosotros'
        ju='Jugar'
      />
      <Sect1 
        parr1='En la
        actualidad evidenciamos
        una gran problemática y es que a el 95% de laspersonas se les dificulta comprender todas las señales
        de tránsito reglamentarias, ya queson muchas y es difícil recordar su funcionalidad. Además, el 98%
        de las personas encuestadas piensan que las señales de transito reglamentarias no son respetadas,
        por el simple hecho de que la mayor parte de la sociedad no comprende cual es su significado ni para
        qué sirven.'

        objSo='Objetivo y solución'
        parr2='Es fundamental implementar campañas
        educativas y de concientización sobre la
        importancia de conocer y respetar las señales de tránsito reglamentarias. Estas campañas
        pueden ser llevadas a cabo por las autoridades competentes, escuelas y otros organismos
        encargados de la seguridad vial.'
      />

      <Sect2 
        equipo="Equipo Wiqaya"
      />

      <Sect3 
        que="¿Que es wiqaya?"
      />

      <Sect4 
        personajes="Personajes Wiqaya"
      />

      <Sect5 
        jugar="JUGAR AHORA!"
      />

      <Footer 
        sigue="SIGUENOS EN"
      />

    </div>
  )
}

export default App