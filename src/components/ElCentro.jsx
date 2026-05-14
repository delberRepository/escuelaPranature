import Sara from '../assets/portada2.jpg';
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
              Pranature es tu centro si:


              <ul>
                <li>Buscas un espacio con clases  reducidas y personalizadas.</li>
                <li>Te gusta el trabajo de corrección técnica.</li>
                <li>Sientes curiosidad por explorarte
                  a nivel emocional y artístico.</li>
              </ul>

              No es tu centro si:
             <ul>
                <li>solo buscas pasar un buen rato y desconectar</li>
                <li>no te interesa indagar en la técnica ni las correcciones personalizadas.</li>
                <li>no eres afín al trabajo conjunto cuerpo-mente.</li>

             </ul>
               La directora del centro Sara Morillo cuenta con una amplia experiencia como
              docente así como nutricionista clínica. <br /><br />

                <h2>Me gustaría contarte un poco sobre mí. </h2>
                Desde muy pequeña me ha gustado cuidarme y
                llevar un estilo de vida saludable. Lo que me llevo a profundizar en el estudio de
                la alimentación y a estudiar Nutrición y Dietética (UAX). Me especialice en la
                consulta clínica, lo que me llevo a profundizar en las técnicas de apoyo en la
                adherencia de los hábitos. Para ello realicé un Master en coaching nutricional
                (Deusto Salud). Llevo más de 10 años ayudando a personas a sanar y a mejorar su
                imagen a través de la alimentación. <br /><br />
                Siempre he sido muy curiosa y me he sentido
                atraída por el conocimiento. Esa pasión me llevo a graduarme en filosofía (UCM)
                a un postrado en psicoanálisis y teoría de la cultura (UCM) <br /><br />
                Mi practica espiritual y mi inquietud por conocer otras culturas me llevo a la práctica de
                Yoga desde muy temprana edad.  Soy certificada en Yoga Alliance 250h en las
                especialidades de Vinyasa yoga y Yin yoga (Zentro Urban Zuy) desde el 2019.<br /><br />
                La danza siempre ha sido mi gran pasión. Desde los 6 años que tome mi primera
                clase de ballet hasta hoy que he conseguido hacer de la danza mi profesión,
                me he formado con los maestros más prestigiosos tanto en el ámbito nacional
                como internacional, así como conseguidos premios en festivales de danza
                internacionales. Como bailarina trabajo ofreciendo mi show en los restaurantes
                árabes más prestigiosos de Madrid así como participando en eventos. Como docente
                llevo desde el 2017 impartiendo clases, lo que me ha hecho crear un método propio
                en el que se aúna técnica y trabajo expresivo, para conectar con nuestras
                emociones y llegar a nuestra expresión más genuina.
            </p>

          </div>

            <div className="col-lg-6">
                <div className="section-card card border-0 h-100">
                    <div className="card-body p-0 h-100">
                        <img
                            src={Sara}
                            alt="Portada Pranature"
                            className="w-100 h-100 rounded"
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
