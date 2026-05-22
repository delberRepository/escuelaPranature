import Sara from '../assets/portada2.jpg';

const centerFits = [
  'Buscas un espacio con clases reducidas y personalizadas.',
  'Te gusta el trabajo de corrección técnica.',
  'Sientes curiosidad por explorarte a nivel emocional y artístico.',
]

const centerDoesNotFit = [
  'Solo buscas pasar un buen rato y desconectar.',
  'No te interesa indagar en la técnica ni las correcciones personalizadas.',
  'No eres afín al trabajo conjunto cuerpo-mente.',
]

function ElCentro() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <h1 className="display-6 fw-semibold mb-3">El centro</h1>
            <p className="mb-4 text-dark">
              Pranature es un espacio dedicado al arte y al bienestar. La filosofía del centro se basa en el
              cuidado del cuerpo y la mente, en un ambiente amigable y de respeto en el que haremos un camino
              e autoconocimiento para conectar con tus emociones más genuinas y explorar tu potencia.
              <br /><em>" Las mejores cualidades de nuestra naturaleza, como la flor de los frutales, sólo pueden preservarse
                con el trato más delicado." </em> <br /><strong>H.D. Thoreau.</strong> <br /><br />
            </p>

            <div className="center-check-block mb-4">
              <h2 className="h5 fw-semibold mb-3">Pranature es tu centro si:</h2>
              <ul className="icon-list icon-list-ok">
                {centerFits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="center-check-block mb-4">
              <h2 className="h5 fw-semibold mb-3">No es tu centro si:</h2>
              <ul className="icon-list icon-list-x">
                {centerDoesNotFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <p className="mb-4 text-dark">
              La directora del centro Sara Morillo cuenta con una amplia experiencia como
              docente así como nutricionista clínica.
            </p>

            <h2 className="h4 fw-semibold mb-3">Me gustaría contarte un poco sobre mí.</h2>
            <p className="mb-4 text-dark">
                Desde muy pequeña me ha gustado cuidarme y
                llevar un estilo de vida saludable. Lo que me llevo a profundizar en el estudio de
                la alimentación y a estudiar Nutrición y Dietética (UAX). Me especialice en la
                consulta clínica, lo que me llevo a profundizar en las técnicas de apoyo en la
                adherencia de los hábitos. Para ello realicé un Master en coaching nutricional
                (Deusto Salud). Llevo más de 10 años ayudando a personas a sanar y a mejorar su
                imagen a través de la alimentación. <br /><br />
                Siempre he sido muy curiosa y me he sentido
                atraída por el conocimiento. Esa pasión me llevo a graduarme en Filosofía (UCM)
                a un postrado en Psicoanálisis y Teoría de la Cultura (UCM) <br /><br />
                Me acerque al yoga como forma de adquirir mas flexibilidad y enseguira me vi atrapada
                por su filosofia y sus enseñanzas, que van más allá de la esterilla, lo que me llevo
                a especializarme como profesora de Yoga en el centro Urban Zuy (yoga Alliance 250h)
                desde el 2019. <br /><br />
                La danza siempre ha sido mi gran pasión. Desde los 6 años que tome mi primera
                clase de ballet hasta hoy que he conseguido hacer de la danza mi profesión.<br /><br />
                Me he formado con los maestros más prestigiosos tanto en el ámbito nacional
                como internacional, así como conseguidos premios en festivales de danza
                internacionales. <br />Como bailarina trabajo ofreciendo mi show en los restaurantes
                árabes más prestigiosos de Madrid así como participando en eventos. Como docente
                llevo desde el 2017 impartiendo clases, lo que me ha hecho crear un método propio
                en el que se aúna técnica y trabajo expresivo, para conectar con nuestras
                emociones y llegar a nuestra expresión más genuina.
            </p>

          </div>

            <div className="col-lg-6">
                <div className="section-elcentro card border-0 h-100">
                    <div className="card-body p-0 h-100">
                        <img
                            src={Sara}
                            alt="Portada Pranature"
                            className="w-100 h-50 rounded"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default ElCentro
