import { NavLink, useParams } from 'react-router-dom'
import yoga from '../assets/yoga2.jpg'
import danza from '../assets/portada3.png'
import nutricion from '../assets/nutri.png'
import clases from '../assets/clase.png'
import taller from '../assets/Sara.png'

function Actividades() {
  const { actividadSlug } = useParams()

  const activities = [

    {
      slug: 'danza-oriental',
      title: 'Danza Oriental',
      description:
        'En las clases de danza oriental trabajamos siempre desde un contexto cultural y teórico (ritmologia y estilos) ' +
          'así como técnico y coreográfico. Las clases de danza te ayudaran a mejorar tu postura y a fortalecer y flexibilizar' +
          ' tu cuerpo. La danza es una poderosa herramienta de autoconocimiento que te ayudará a ganar autoestima y a canalizar ' +
          'tus emociones. Mis clases se enfocan desde un trabajo artístico y de expresión corporal, trabajando con diferentes ' +
          'arquetipos que nos ayudan a traducir el movimiento del cuerpo en el lenguaje del alma.  Tenemos clases de todos los ' +
          'niveles y ofrecemos tanto clases grupales, en grupos reducidos para una atención más personalizada, como clases ' +
          'individuales si quieres hacer un trabajo más específico para lograr juntas sacar tu máximo potencial.  <br />' +
          '<em>"Habita en lo eterno mientras hagas tu asana regulando la respiración a través de pranayama medita en la siempre ' +
          'compasiva morada del corazón" </em><br />' +
          ' <strong>T.Krishnamacharya.</strong> ',
      foto: taller,
    },
    {
      slug: 'yoga',
      title: 'Yoga',
      description:
          'La práctica de Yoga es una puerta de acceso a nuestro espacio sutil y energético a través del cuerpo. ' +
          'Junto con las técnicas de pranayama (respiración guiada) y meditación el yoga es una herramienta muy poderosa ' +
          'de bienestar que ayuda a reducir el estrés y la ansiedad además de mejorar nuestra flexibilidad y postura ' +
          'corporal. En Pranature ofrecemos dos estilos: Vinyasa hatha: Es un estilo más dinámico, que incluye transiciones ' +
          'entre asanas. Ideal si necesitas una práctica más energética. Yin yoga: Es un estilo de yoga, que se presenta' +
          ' como una práctica integral que aborda el trabajo de meridianos y de elasticidad articular.  Ideal si necesitas' +
          ' una práctica más restaurativa. Ambos estilos tienen una parte de meditación al final de la clase. ',
      foto: yoga,
    },
    {
      slug: 'nutricion',
      title: 'Nutricion',
      description:
        'Una correcta alimentación junto con un estilo de vida saludable, son las claves del bienestar, previniendo enfermedades' +
          ' y reduciendo la inflamación y el estrés oxidativo.  En la consulta trabajamos la importancia de la educación nutricional ' +
          'y adaptamos los cambios necesarios en tu alimentación en función de las distintas necesidades personales (edad, estilo de ' +
          'vida, objetivos personales, cultura y religión).  El coaching nutricional será la herramienta que utilizaremos para conseguir' +
          ' la mayor adherencia a la dieta y así lograr tu objetivo. Cuento con más de 10 años de experiencia en los que he podido ' +
          'trabajar con muchos tipos de necesidades. Estoy especializada en inflamación, nutrición energética y adelgazamiento. ',
      foto: nutricion,

    },
    {
      slug: 'talleres',
      title: 'Talleres',
      description:
        'ENERGIA FEMENINA <br /> ' +
          'Esta clase esta enfocada en restaurar y ampliar la energía a través de ciertos movimientos de danza y técnicas energéticas, j' +
          'unto ejercicios de meditacion y visualización, para acceder a un potencial muy poderoso. Para ello vamos a hacer un ' +
          'trabajo de armonización de chacras y de conexión con el útero y el cinturón de vida. Esta clase es para ti si sientes ' +
          'el llamado de hacer un trabajo con tu energía femenina, para armonizarte y acceder a nuestro infinito potencial como mujeres. ',
      foto: danza,
    },
    {
      slug: 'clases-privadas',
      title: 'Clases privadas',
      description:
        'DANZA: Saca tu máximo potencial en danza.  <br />' +
          'Las clases privadas son para ti si: <br /> ' +
          '<ul>' +
          '<li>quieres aprender de 0 y prefieres un trabajo individual</li>' +
          '<li>quieres trabajar con un objetivo concreto.</li> ' +
          '<li>necesitas pulir técnica o expresión</li> ' +
          '<li>quieres una coreografía o un trabajo exhaustivo para concursos de danza.</li> ' +
          '<li>eres profesional y quieres trabajar con un objetivo concreto.</li> ' +
          '</ul>' +
          'YOGA<br />' +
          ' Las clases privadas de Yoga son para ti si: <br />' +
          '<ul>' +
          '<li>tienes alguna lesión o condición que requiera un trabajo más personalizado</li>' +
          '<li>quieres potenciar alguna postura o alguna parte especifica. </li>' +

          '</ul> <br /> ¡¡Novedad!! ¡¡¡Clases en dúo!!! Comparte con un familiar, amigo o tu pareja para una práctica compartida. ',
      foto :clases,
    },
  ]

  const activeActivity =
    activities.find((activity) => activity.slug === actividadSlug) ??
    activities[0]

  return (
    <section className="page-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="section-card card border-0 relleno">
              <div className="card-body p-4">
                <h1 className="h2 fw-semibold mb-3">Actividades</h1>
                <p className="mb-4">
                  Selecciona la actividad que te interesa.
                </p>

                <div className="list-group ">
                  {activities.map((activity) => (
                    <NavLink
                      key={activity.slug}
                      to={`/actividades/${activity.slug}`}
                      className={({ isActive }) =>
                        `activity-link list-group-item list-group-item-action rounded-3 mb-2 ${
                          isActive ? 'active' : ''
                        }`
                      }
                    >
                      {activity.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="section-card card border-0">
              <div className="card-body p-4 p-lg-5">
                {/*}  <span className="badge rounded-pill text-bg-light border border-danger-subtle text-danger-emphasis mb-3">
                  /actividades/{activeActivity.slug}
                </span>*/}
                <img
                  src={activeActivity.foto}
                  alt={activeActivity.title}
                  className="img-fluid rounded-4 mb-4"
                />
                <h2 className="display-6 fw-semibold mb-3 ">
                  {activeActivity.title}
                </h2>
                <p
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: activeActivity.description }}
                />

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="p-3 bg-body-tertiary rounded-3 h-100 border border-gray-200">
                      Nivel adaptable
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-body-tertiary rounded-3 h-100 border border-gray-200">
                      Horarios disponibles
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-body-tertiary rounded-3 h-100 border border-gray-200">
                      Clases presenciales
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-body-tertiary rounded-3 h-100 border border-gray-200">
                      Reserva previa
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Actividades
