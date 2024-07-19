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


      </>
    )
}
  
export default HomePage