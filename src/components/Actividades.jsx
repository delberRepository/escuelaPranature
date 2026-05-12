import { NavLink, useParams } from 'react-router-dom'
import yoga from '../assets/yoga2.jpg'
import danza from '../assets/portada3.png'
import nutricion from '../assets/nutri.png'
import clases from '../assets/clase.png'
import taller from '../assets/taller.jpg'

function Actividades() {
  const { actividadSlug } = useParams()

  const activities = [

    {
      slug: 'danza-oriental',
      title: 'Danza Oriental',
      description:
        'Trabajo tecnico y expresivo con base ritmica y conciencia corporal.',
      foto: taller,
    },
    {
      slug: 'yoga',
      title: 'Yoga',
      description:
          'Clases enfocadas en movilidad, respiracion y equilibrio corporal.',
      foto: yoga,
    },
    {
      slug: 'nutricion',
      title: 'Nutricion',
      description:
        'Encuentros orientados a habitos y bienestar.',
      foto: nutricion,

    },
    {
      slug: 'talleres',
      title: 'Talleres',
      description:
        'Aprendizaje complementario.',
      foto: danza,
    },
    {
      slug: 'clases-privadas',
      title: 'Clases privadas',
      description:
        'Sesiones adaptadas al nivel, objetivos y disponibilidad de cada alumna.',
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
            <div className="section-card card border-0">
              <div className="card-body p-4">
                <h1 className="h2 fw-semibold mb-3">Actividades</h1>
                <p className="mb-4">
                  Cada actividad tiene su propia URL dinamica.
                </p>

                <div className="list-group">
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
                <h2 className="display-6 fw-semibold mb-3">
                  {activeActivity.title}
                </h2>
                <p className="mb-4">{activeActivity.description}</p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="p-3 bg-body-tertiary rounded-3 h-100">
                      Nivel adaptable
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-body-tertiary rounded-3 h-100">
                      Horarios por definir
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-body-tertiary rounded-3 h-100">
                      Clases presenciales
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-body-tertiary rounded-3 h-100">
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
