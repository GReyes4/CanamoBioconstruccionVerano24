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
                  <img src="\src\assets\images\Flechas2.png" alt="Flechas1" />
                </div>
              </div>

              <p>Una iniciativa para conectar diversos sectores como la <strong>academia, investigadores,
              laboratorios, empresarios, funcionarios públicos, estudiantes</strong> y el público interesado
              en la industria del cáñamo en México. </p>
            </div>

          </div>
        
        </div>
      </>
    )
}

export default CanamoConecta
