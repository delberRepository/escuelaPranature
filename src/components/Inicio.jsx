import { NavLink } from 'react-router-dom'
import Slideshow from '../components/Slideshow';

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
                  <NavLink to="/actividades//danza-oriental" className="btn btn-rosa px-3 px-lg-4 py-2 py-lg-3 fs-6 fs-lg-5">
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
        </div>
      </section>
  )
}

export default Inicio
