import './CanamoConecta.css'
import { Link } from "react-router-dom";

import Flechas1 from './Flechas1.png';
import Stickmen from './Stickmen.png';
import Bullseye from './Bullseye.png';
import UniversidadAutonomaLogo from './UniversidadAutonomaLogo.png';
import TecMonterreyLogo from './TecMonterreyLogo.png';
import Bioconstruccion from './Bioconstruccion.png';
import AgendaVerde from './AgendaVerde.png';
import Flechas2 from './Flechas2.png';


import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../../pages/Proyecto/Footer.jsx';

function CanamoConecta() {
    return (
      <>

      <Navbar />
        <div className='CanamoPage'>
          <div className='backgroundImageCanamo'>
            <div className='overlay'>
              <h1>Cáñamo Conecta</h1>
            </div>
          </div>

          <span className='subtitle'> Conoce más acerca de nuestra misión, proyectos, y cómo puedes ayudar</span>

          <div className='cañamoContent'>

            <div className='container'>

              <div className='arrowContainer'>
                <div className="leftSide">
                  <img src={Flechas1} alt="Flechas1" />
                  <h2>¿De qué trata?</h2>
                </div>

                <div className='rightSide'>
                  <img src={Flechas2} alt="Flechas2" />
                </div>
              </div>

              <p>
              <br /> 
              Una iniciativa para conectar diversos sectores como la <strong>academia, investigadores,
              laboratorios, empresarios, funcionarios públicos, estudiantes</strong> y el público interesado
              en la industria del cáñamo en México. 
              <br /> <br />

              Esta conexión es crucial para el desarrollo de la industria, ya que la falta de
              <strong> integración y comunicación</strong> ha limitado su avance.
              <br /> <br />
              </p>

              <div className='arrowContainer'>
                <div className='leftSide'>
                 <p>Nuestra plataforma facilita la colaboración <strong>interdiscipinaria</strong>, estableciendo bases
                  y criterios que guían el desarrollo del <strong>cáñamo</strong> industrial con estándares de <strong>calidad,
                  seguridad y sostenibilidad.</strong></p>
                </div>

                 <img src={Stickmen} alt="Stickmen" className='icon'/>
              </div>

              <div className='arrowContainer'>
              <img src={Bullseye} alt="Bullseye" className='icon'/>
                <div className='leftSide'>
                  <p>Al enfocarse exclusivamente en el <strong>cáñamo industrial</strong>, evita controversias relacionadas
                  con el uso lúdico del cannabis, aumentando su aceptación y apoyo. </p>
                </div>
              </div>

            </div>

          </div>

          <span className='header'>Nuestros proyectos</span>

          <div className='wrapper'>
            <div className='shortImageWrapper'>
              <img src={AgendaVerde} alt='Agenda verde'/>
            </div>
            <div className='largeTextWrapper'>
              <h2>Agenda verde del Cáñamo Industrial en México</h2>
              <h3>Perspectivas del Cáñamo Industrial en México Rumbo a la Agenda Verde 2030</h3>
              <p> <br /> Conoce el plan de acción de <strong>AMEEC</strong> como un impulsor clave  para la mejora positiva 
                de la industria del cáñamo en México. Acompáñanos en la búsqueda de la unión de <strong>agricultores,
                especialistas, empresarios</strong> nacionales y  extranjeros, <strong>universidades y científicos</strong> para
                aumentar la conciencia  sobre el potencial del <strong>cáñamo industrial</strong> y abordar sus desafíos para
                su  desarrollo en México.
              </p>

              <div className='wrapperFooter'>
                  <img src={UniversidadAutonomaLogo} alt='UniversidadAutonoma'/>
                <a href="https://canamoconectaameec.net/" target='blank'><button className='genericButton'>Conoce más</button></a>
                
              </div>
            </div>
          </div>

          <div className='wrapper'>
            <div className='largeTextWrapper'>
              <h2>Bioconstrucción para el desarrollo</h2>
                <h3>Descubre nuestro proyecto en alianza con el Tec de Monterrey sobre cáñamo industrial.</h3>
                <p> <br />
                  En <strong>AMEEC</strong>, estamos comprometidos con el desarrollo sostenible y la  inclusión de tecnologías
                  innovadoras en la construcción. Recientemente,  en colaboración con el Departamento de
                  <strong> Arquitectura, Ingenieria civil e  Ingeniería en Desarrollo Sustentable</strong> del Tec de Monterrey
                  Campus Santa  Fe y Campus CDMX, hemos iniciado un emocionante proyecto enfocado en la
                  <strong> construcción sostenible</strong> en la comunidad <strong>Naayeri</strong> de Santa Teresa del  Nayar.
                </p>

                <div className='wrapperFooter'>
                    <img src={TecMonterreyLogo} alt='Tec de Monterrey'/>
                  <a href="/proyecto" target='blank'><button className='genericButton' to="/proyecto">Conoce más</button></a>
                </div>
            </div>
            
            <div className='shortImageWrapper'>
              <img src={Bioconstruccion} alt='Bioconstrucción'/>
            </div>
          </div>
        

          <div className='backgroundImageDonation'>
            <div className='overlay'>
              <h1>¿Quieres apoyarnos?</h1>
              <h3>Puedes hacer una diferencia real en las vidas de aquellos que lo necesitan.</h3>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScNiR1w4if0bxEemmcuKKWMprZSLn-ay-tGbC9cKv5nP2a4AQ/viewform" target='blank'>
                <button className='genericButton'>Unirse</button>
              </a>
            </div>
          </div>

        </div>

        <Footer />
      </>
    )
}

export default CanamoConecta
