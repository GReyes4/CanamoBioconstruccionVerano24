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
          <div className='texto-conoce-comunidad'>
            <p>
            Es una comunidad conocida como los <strong>Naayeris</strong>, uno de los <strong>pueblos originarios </strong>
            representativos del estado de Nayarit.</p>

            <p>            Dentro de las <strong>actividades productivas </strong> que la comunidad tenía era la siembra y cultivo de la amapola, misma que en
            años actuales, ha disminuido sus valores del mercado, haciendo que uno de los principales pilares económicos de la
            comunidad desapareciera.</p>
 
            <p>            Nuestro reto, a través de los <strong>ODS</strong> y las alianzas estratégicas es poder generar <strong>proyectos de impacto</strong> para que las
            personas pertenecientes a los pueblos originarios puedan tener una mejor <strong>calidad de vida</strong>. 
            </p>

            <p>La mayoría de los <strong>hombres en edad productiva</strong> están emigrando de manera ilegal en busca de <strong>mejores oportunidades</strong> a Estados Unidos,
            así como a zonas costeras donde se dedican al corte de frutas por un pago aprox. de 200 pesos por jornadas completas.</p>


          </div>
          <img src={imagenConoceComunidad} className='imgConoceComunidad'/>
        </div>
      </div>

      <div className='relevancia-div'>
        <div style={{display:'flex', justifyContent: 'end'}}>
          <h1 className='relevancia-titulo'>Su Relevancia para la Bioconstrucción</h1>
        </div>
        <div className='grid-relevancia'>
          <img src={imagenRelevancia} className='imgConoceComunidad'/>
          <div className='texto-relevancia'>
            <p>Utilizando <strong>materiales eco sostenibles y ecológicos</strong> queremos contribuir a la realización de una <strong>edificación de bajo impacto ambiental,
              </strong>,
            la cual tenga como objetivo principal el desarrollo de <strong>habilidades educativas y laborales</strong> a través de talleres.</p>

            <p>
            También busca ser un espacio dedicado a <strong>proteger y preservar la salud, las tradiciones y saberes de las personas de pueblos originarios</strong>,
             en <strong>AMEEC</strong> nos enfocándonos principalmente en realizar un espacio que <strong>cubra las atenciones educativas y laborales dentro de la comunidad impactada</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className='educacion-div'>
          <h1 className='educacion-titulo'>Educación</h1>
        <div className='grid-educacion'>
        <div className='texto-educacion'>
          <p>
          Este proyecto tiene como misión <strong>transformar a la comunidad Naayeri, potenciando las habilidades educativas de sus habitantes. </strong>
           Nos proponemos crear instalaciones de primer nivel, dignas de una <strong>educación de excelencia</strong>. Además, buscamos mejorar las
          oportunidades laborales de la comunidad, brindando <strong>apoyo y recursos</strong> que permitan un futuro más próspero y lleno de posibilidades.
          </p>
        </div>
          <img src={imagenEducacion} className='imgConoceComunidad'/>
        </div>
      </div>

      <div className='relevancia-div'>
        <div style={{display:'flex', justifyContent: 'end'}}>
          <h1 className='tradicion-titulo'>Tradición</h1>
        </div>
        <div className='grid-relevancia'>
          <img src={imagenTradicion} className='imgConoceComunidad'/>
          <div className='texto-relevancia'>
            <p>
            Queremos crear un espacio <strong>vibrante y emotivo</strong> que promueva y preserve las <strong>ricas tradiciones culturales de los Naayeris</strong>.
            </p>

            <p>
            El proyecto contempla la creación de un área dedicada a exhibir y <strong>celebrar la cultura Naayeri y sus tradiciones</strong> para que este espacio
             sea un verdadero refugio de <strong>aprendizaje y cultura</strong>, donde las raíces se mantengan vivas y las nuevas generaciones encuentren <strong>inspiración
             y orgullo en su herencia.</strong>
            </p>

            <p>Este será un lugar donde, además de recibir una <strong>educación integral</strong>, se seguirán utilizando los <strong>métodos y técnicas tradicionales</strong>
               que han sido parte fundamental de su cultura. Imaginemos un entorno donde el <strong>parto tradicional</strong> es guiado por las sabias parteras
                locales, y la <strong>medicina herbolaria florece como un legado vivo de conocimiento ancestral</strong>.</p>
          </div>
        </div>
      </div>

      <div className='conoce-comunidad-div'>
        <h1 className='conoce-comunidad-titulo'>Invernadero</h1>
        <div className='grid-invernadero'>
        <div className='texto-invernadero'>
          <p>
          <strong>Los viveros en escuelas ofrecen múltiples beneficios tanto educativos como ambientales, emocionales y sociales</strong>.
           Los viveros pueden servir como puntos de conexión entre la <strong>escuela y la comunidad</strong>, mediante proyectos conjuntos y eventos escolares.
          </p>

          <p>Desarrollar proyectos de investigación donde los <strong>estudiantes puedan experimentar</strong> con diferentes tipos de plantas y técnicas de cultivo,
             no solo enriquecen la experiencia educativa, sino que también aportan beneficios duraderos para los <strong>estudiantes, la comunidad y el medio ambiente</strong>.</p>
          </div>
          <img src={imagenInvernadero} className='imgConoceComunidad'/>
        </div>
      </div>


      <Footer/>
      </>
    )
}
  
export default Naayeri