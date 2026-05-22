import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import yoga from '../assets/yoga2.jpg'
import energia from '../assets/energiaFem.jpeg'
import nutricion from '../assets/nutri.png'
import clases from '../assets/clase.png'
import danza from '../assets/Sara.png'
import taller from '../assets/curso8deMayo.jpeg'
import tallerVideo from '../assets/taller.mp4'

function ActivityMedia({ activity }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!activity.media) {
    return (
      <img
        src={activity.foto}
        alt={activity.title}
        className="img-fluid rounded-4 mb-4"
      />
    )
  }

  const media = activity.media ?? [
    {
      type: 'image',
      src: activity.foto,
      alt: activity.title,
    },
  ]
  const activeMedia = media[activeIndex]
  const hasMultipleMedia = media.length > 1

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? media.length - 1 : currentIndex - 1,
    )
  }

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % media.length)
  }

  return (
    <div className="activity-media rounded-4 mb-4">
      {activeMedia.type === 'video' ? (
        <video
          src={activeMedia.src}
          className="activity-media-item"
          controls
          playsInline
        />
      ) : (
        <img
          src={activeMedia.src}
          alt={activeMedia.alt}
          className="activity-media-item"
        />
      )}

      {hasMultipleMedia && (
        <>
          <button
            type="button"
            className="activity-media-control activity-media-control-prev"
            onClick={showPrevious}
            aria-label="Ver contenido anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="activity-media-control activity-media-control-next"
            onClick={showNext}
            aria-label="Ver contenido siguiente"
          >
            ›
          </button>

          <div className="activity-media-dots" aria-label="Selector de contenido">
            {media.map((item, index) => (
              <button
                key={`${item.type}-${index}`}
                type="button"
                className={`activity-media-dot ${
                  index === activeIndex ? 'is-active' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver ${item.type === 'video' ? 'video' : 'foto'} ${
                  index + 1
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

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
          'tus emociones.<br /><br />Mis clases se enfocan desde un trabajo artístico y de expresión corporal, trabajando con diferentes ' +
          'arquetipos que nos ayudan a traducir el movimiento del cuerpo en el lenguaje del alma.  Tenemos clases de todos los ' +
          'niveles y ofrecemos tanto clases grupales, en grupos reducidos para una atención más personalizada, como clases ' +
          'individuales si quieres hacer un trabajo más específico para lograr juntas sacar tu máximo potencial.  <br /><br />' +
          '<em>"Habita en lo eterno mientras hagas tu asana regulando la respiración a través de pranayama medita en la siempre ' +
          'compasiva morada del corazón" </em><br />' +
          ' <strong>T.Krishnamacharya.</strong> ',
      foto: danza,
    },
    {
      slug: 'yoga',
      title: 'Yoga',
      description:
          'La práctica de Yoga es una puerta de acceso a nuestro espacio sutil y energético a través del cuerpo. ' +
          'Junto con las técnicas de pranayama (respiración guiada) y meditación el yoga es una herramienta muy poderosa ' +
          'de bienestar que ayuda a reducir el estrés y la ansiedad además de mejorar nuestra flexibilidad y postura ' +
          'corporal.<br /> <br /> En Pranature ofrecemos dos estilos: <br /> <br /> <strong>Vinyasa hatha:</strong> <br /> Es un estilo más dinámico, que incluye transiciones ' +
          'entre asanas. Ideal si necesitas una práctica más energética.<br /><br />  <strong>Yin yoga:</strong><br />  Es un estilo de yoga, que se presenta' +
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
          'vida, objetivos personales, cultura y religión). <br /> <br />   El coaching nutricional será la herramienta que utilizaremos para conseguir' +
          ' la mayor adherencia a la dieta y así lograr tu objetivo. Cuento con más de 10 años de experiencia en los que he podido ' +
          'trabajar con muchos tipos de necesidades. Estoy especializada en inflamación, nutrición energética y adelgazamiento. ',
      foto: nutricion,

    },
    {
      slug: 'energia',
      title: 'Energia Femenina',
      description:

          'Esta clase esta enfocada en restaurar y ampliar la energía a través de ciertos movimientos de danza y técnicas energéticas, j' +
          'unto ejercicios de meditacion y visualización, para acceder a un potencial muy poderoso. Para ello vamos a hacer un ' +
          'trabajo de armonización de chacras y de conexión con el útero y el cinturón de vida. <br /> <br /> Esta clase es para ti si sientes ' +
          'el llamado de hacer un trabajo con tu energía femenina, para armonizarte y acceder a nuestro infinito potencial como mujeres. ',
      foto: energia,
    },
    {
      slug: 'talleres',
      title: 'Talleres',
      description:
        'TECNICA DE DANZA ORIENTAL <br /> ' +
          '9 de Mayo ',
      foto: taller,
      media: [
        {
          type: 'image',
          src: taller,
          alt: 'Cartel del taller de tecnica de danza oriental',
        },
        {
          type: 'video',
          src: tallerVideo,
        },
      ],
    },
    {
      slug: 'clases-privadas',
      title: 'Clases privadas',
      description:
        'DANZA: Saca tu máximo potencial en danza.',
      foto :clases,
      checkSections: [
        {
          title: 'Las clases privadas de danza son para ti si:',
          items: [
            'Quieres aprender de 0 y prefieres un trabajo individual.',
            'Quieres trabajar con un objetivo concreto.',
            'Necesitas pulir técnica o expresión.',
            'Quieres una coreografía o un trabajo exhaustivo para concursos de danza.',
            'Eres profesional y quieres trabajar con un objetivo concreto.',
          ],
        },
        {
          title: 'Las clases privadas de Yoga son para ti si:',
          items: [
            'Tienes alguna lesión o condición que requiera un trabajo más personalizado.',
            'Quieres potenciar alguna postura o alguna parte especifica.',
          ],
        },
      ],
      closingText:
        '¡¡Novedad!! ¡¡¡Clases en dúo!!! Comparte con un familiar, amigo o tu pareja para una práctica compartida.',
    },
  ]

  const activeActivity =
    activities.find((activity) => activity.slug === actividadSlug) ??
    activities[0]
  const showActivityHighlights = !['talleres', 'clases-privadas'].includes(
    activeActivity.slug,
  )

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
                <ActivityMedia key={activeActivity.slug} activity={activeActivity} />
                <h2 className="display-6 fw-semibold mb-3 ">
                  {activeActivity.title}
                </h2>
                <p
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: activeActivity.description }}
                />
                {activeActivity.checkSections?.map((section) => (
                  <div key={section.title} className="activity-check-block mb-4">
                    <h3 className="h5 fw-semibold mb-3">{section.title}</h3>
                    <ul className="icon-list icon-list-ok">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {activeActivity.closingText ? (
                  <p className="mb-4">{activeActivity.closingText}</p>
                ) : null}

                {showActivityHighlights ? (
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
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Actividades
