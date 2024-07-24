import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../Proyecto/Footer.jsx';

import videoFondo from './VideoEncabezadoNaayeri.mp4';
import imagenConoceComunidad from './ConoceComunidad.png';
import imagenRelevancia from './Relevancia.png';
import imagenEducacion from './Educacion.png';
import imagenTradicion from './Tradicion.png';
import imagenInvernadero from './Invernadero.png';



import './Naayeri.css'

function Naayeri() {
  
    return (
      <>
      <Navbar />
      <div className="encabezado-naayeri-div" >
        <video className="video-fondo" autoPlay loop muted>
          <source src={videoFondo} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
        </video>
        <h1 className='titulo-naayeri-encabezado'> Comunidad Naayeri </h1>
      </div>

      <div className='conoce-comunidad-div'>
        <h1 className='conoce-comunidad-titulo'>Conoce a la Comunidad</h1>
        <div className='grid-conoce-comunidad'>
          <p className='texto-conoce-comunidad'>Es una comunidad conocida como los Naayeris, uno de los pueblos originarios representativos del estado de Nayarit. <br/> <br/> 
          Dentro de las actividades productivas que la comunidad tenía era la siembra y cultivo de la amapola, misma que en años actuales, ha disminuido sus valores del mercado, haciendo que uno de los principales pilares económicos de la comunidad desapareciera. <br/> <br/>
          Nuestro reto, a través de los ODS y las alianzas estratégicas es poder generar proyectos de impacto para que las personas pertenecientes a los pueblos originarios puedan tener una mejor calidad de vida. <br/> <br/>
          La mayoría de los hombres en edad productiva están emigrado de manera ilegal en busca de mejores oportunidades a Estados Unidos, así como a zonas costeras donde se dedican al corte de frutas por un pago aprox. de 200 pesos por jornadas completas. </p>
          <img src={imagenConoceComunidad} className='imgConoceComunidad'/>
        </div>
      </div>

      <div className='relevancia-div'>
        <div style={{display:'flex', justifyContent: 'end'}}>
          <h1 className='relevancia-titulo'>Su Relevancia para la Bioconstrucción</h1>
        </div>
        <div className='grid-relevancia'>
          <img src={imagenRelevancia} className='imgConoceComunidad'/>
          <p className='texto-relevancia'>Utilizando materiales eco sostenibles y ecológicos queremos contribuir a la realización de una edificación de bajo impacto ambiental, la cual tenga como objetivo principal el desarrollo de habilidades educativas y laborales a través de talleres. <br/> <br/> 
          También busca ser un espacio dedicado a proteger y preservar la salud, las tradiciones y saberes de las personas de pueblos originarios, en AMEEC nos enfocándonos principalmente en realizar un espacio que cubra las atenciones educativas y laborales dentro de la comunidad impactada.</p>
        </div>
      </div>

      <div className='educacion-div'>
          <h1 className='educacion-titulo'>Educación</h1>
        <div className='grid-educacion'>
          <p className='texto-educacion'>Este proyecto tiene como misión transformar a la comunidad naayeri, potenciando las habilidades educativas de sus habitantes. Nos proponemos crear instalaciones de primer nivel, dignas de una educación de excelencia. Además, buscamos mejorar las oportunidades laborales de la comunidad, brindando apoyo y recursos que permitan un futuro más próspero y lleno de posibilidades. </p>
          <img src={imagenEducacion} className='imgConoceComunidad'/>
        </div>
      </div>

      <div className='relevancia-div'>
        <div style={{display:'flex', justifyContent: 'end'}}>
          <h1 className='tradicion-titulo'>Tradición</h1>
        </div>
        <div className='grid-relevancia'>
          <img src={imagenTradicion} className='imgConoceComunidad'/>
          <p className='texto-tradicion'>Queremos crear un espacio vibrante y emotivo que promueva y preserve las ricas tradiciones culturales de los Nayeris. <br/> <br/> 
          El proyecto contempla la creación de un área dedicada a exhibir y celebrar la cultura Nayeri y sus tradiciones para que este espacio sea un verdadero refugio de aprendizaje y cultura, donde las raíces se mantengan vivas y las nuevas generaciones encuentren inspiración y orgullo en su herencia. <br/> <br/> 
          Este será un lugar donde, además de recibir una educación integral, se seguirán utilizando los métodos y técnicas tradicionales que han sido parte fundamental de su cultura. Imaginemos un entorno donde el parto tradicional es guiado por las sabias parteras locales, y la medicina herbolaria florece como un legado vivo de conocimiento ancestral.</p>
        </div>
      </div>

      <div className='conoce-comunidad-div'>
        <h1 className='conoce-comunidad-titulo'>Invernadero</h1>
        <div className='grid-invernadero'>
          <p className='texto-invernadero'>Los viveros en escuelas ofrecen múltiples beneficios tanto educativos como ambientales, emocionales y sociales. Los viveros pueden servir como puntos de conexión entre la escuela y la comunidad, mediante proyectos conjuntos y eventos escolares. <br/> <br/> 
          Desarrollar proyectos de investigación donde los estudiantes puedan experimentar con diferentes tipos de plantas y técnicas de cultivo, no solo enriquecen la experiencia educativa, sino que también aportan beneficios duraderos para los estudiantes, la comunidad y el medio ambiente. </p>
          <img src={imagenInvernadero} className='imgConoceComunidad'/>
        </div>
      </div>


      <Footer/>
      </>
    )
}
  
export default Naayeri