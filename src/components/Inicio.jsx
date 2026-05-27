import { NavLink } from 'react-router-dom'
import Slideshow from '../components/Slideshow';
import taller from '../assets/curso8deMayo.jpeg'

function Inicio() {
  return (
      <section className="page-section">

          <div className="container px-3 px-lg-0">


              <div className="hero-panel p-3 p-lg-5 shadow-sm rounded-4">


                  <div className="row align-items-center g-3 g-lg-5">

              <div className="col-lg-5">
          <span className="badge rounded-pill text-bg-light border border-danger-subtle text-danger-emphasis mb-3">
            Danza, bienestar y comunidad
          </span>
                <h1 className="display-4 fw-bold mb-3"> {/* 'display-4' es un poco más grande que 'display-5' */}
                    Pranature es un espacio de arte, movimiento y bienestar interior.
                </h1>
                  {/*<p className="lead mb-4 text-secondary">
                  Pranature es un espacio en el que se te invita...
                </p>*/}
                <div className="d-flex flex-wrap gap-3">
                  <NavLink to="/actividades/danza-oriental" className="btn btn-rosa px-3 px-lg-4 py-2 py-lg-3 fs-6 fs-lg-5">
                    Ver actividades
                  </NavLink>
                  <NavLink to="/contacto" className="btn btn-outline-dark  px-3 px-lg-4 py-2 py-lg-3 fs-6 fs-lg-5">
                    Contactar
                  </NavLink>
                </div>
              </div>

              {/* Columna del Slideshow: ahora sumamos 6 + 6 = 12 perfecta */}
              <div className="col-lg-7">
                <div className="slideshow-wrapper shadow-lg rounded-4 overflow-hidden">
                  <Slideshow />
                </div>
              </div>

            </div>
          </div>

          <div className="home-workshops mt-4 mt-lg-5">
            <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-3">
              <div>
                <span className="badge rounded-pill text-bg-light border border-danger-subtle text-danger-emphasis mb-2">
                  Talleres
                </span>
                <h2 className="h3 fw-semibold mb-0">Nuestros últimos talleres</h2>
              </div>

            </div>

            <div className="section-card home-workshop-card overflow-hidden">
              <div className="row g-0 align-items-stretch">
                <div className="col-md-5">
                  <img
                    src={taller}
                    alt="Cartel del taller de tecnica de danza oriental"
                    className="home-workshop-image"
                  />
                </div>
                <div className="col-md-7">
                  <div className="home-workshop-content">
                    <p className="text-uppercase fw-semibold text-gold mb-2">
                      Técnica de Danza Oriental
                    </p>
                    <h3 className="h4 fw-semibold mb-3">Taller intensivo</h3>
                    <p className="mb-4 text-dark">
                      Un espacio para profundizar en la técnica, la expresión corporal y el movimiento consciente.
                    </p>
                    <NavLink to="/actividades/talleres" className="btn btn-rosa px-4">
                      Más información
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Inicio
