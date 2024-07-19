import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';

import iconoFacebook from '../Proyecto/Facebook.png';
import iconoInsta from '../Proyecto/Instagram.png';
import iconoTwitter from '../Proyecto/Twitter.png';
import iconoLinkedIn from '../Proyecto/Linkedin.png';
import iconoYoutube from '../Proyecto/Youtube.png';
import iconoWhats from '../Proyecto/whatsapplogo.png';

import './HomePage.css'

function HomePage() {
  
    return (
      <>
      <Navbar />
      <div className="encabezado-div" >
        <div className='redes-sociales-div'>
          <img src={iconoFacebook} className='social-icon'/>
          <img src={iconoInsta} className='social-icon'/>
          <img src={iconoTwitter} className='social-icon'/>
          <img src={iconoLinkedIn} className='social-icon'/>
          <img src={iconoYoutube} className='social-icon'/>
          <img src={iconoWhats} className='social-icon'/>
        </div>

        <div className='titulo-encabezado-div'>
          <h1 className='titulo-encabezado'> Bioconstrucción <br /> para el desarrollo </h1>
        </div>

        <div className='botones-encabezado-div'>
          <button className="encabezado-button">
            Contactanos
          </button>
          <button className="encabezado-button">
            Unete al voluntariado
          </button>
        </div>
        
      </div>

      <div className='objetivo-proyecto-div'>
        <div className='titulo-objetivo-div'>
          <h1 className='titulo-objetivo'> Objetivo del <br /> proyecto </h1>
        </div>

        <div className='texto-objetivo-div'>
          <div className='fondo-texto-objetivo'>
            <p className='texto-objetivo'>El programa nace de la necesidad de resaltar los usos del <strong className='strongs'> cáñamo industrial</strong> y el impacto que se puede tener en el desarrollo de la comunidad de pueblos originarios llamados <strong className='strongs'> Naayeris o coras</strong>, ubicados en la localidad de <strong className='strongs'>Santa Teresa Del Nayar</strong>.</p>
            <p className='texto-objetivo'>Adicionalmente, como <strong className='strongs'>asociación</strong>, acompañamos al proyecto principal con acciones que atienden el área de <strong className='strongs'>responsabilidad social</strong>. Estas acciones están encaminadas hacia el <strong className='strongs'>desarrollo</strong> de la población, como dotar de un <strong className='strongs'>salón inteligente</strong> con todo el equipamiento necesario para la <strong className='strongs'>capacitación</strong> y regulación a distancia de los <strong className='strongs'>jóvenes (Coras)</strong>.</p>
          </div>
        </div>
      </div>


      </>
    )
}
  
export default HomePage