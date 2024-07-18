import './CanamoConecta.css'


function CanamoConecta() {
    return (
      <>
        <div className='CanamoPage'>
          <div className='backgroundImage'>
            <div className='overlay'>
              <h1>Cáñamo Conecta</h1>
            </div>
          </div>

          <span className='subtitle'> Conoce más acerca de nuestra misión, proyectos, y cómo puedes ayudar</span>

          <div className='cañamoContent'>

            <div className='container'>

              <div className='arrowContainer'>
                <div className="leftSide">
                  <img src="\src\assets\images\Flechas1.png" alt="Flechas1" />
                  <h2>¿De qué trata?</h2>
                </div>

                <div className='rightSide'>
                  <img src="\src\assets\images\Flechas2.png" alt="Flechas2" />
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

                 <img src="\src\assets\images\Stickmen.png" alt="Stickmen" className='icon'/>
              </div>

              <div className='arrowContainer'>
              <img src="\src\assets\images\Bullseye.png" alt="Bullseye" className='icon'/>
                <div className='leftSide'>
                  <p>Al enfocarse exclusivamente en el cáñamo industrial, evita controversias relacionadas
                  con el uso lúdico del cannabis, aumentando su aceptación y apoyo. </p>
                </div>
              </div>

            </div>

          </div>
        
        </div>
      </>
    )
}

export default CanamoConecta
