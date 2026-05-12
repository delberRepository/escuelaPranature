import Sara from '../assets/Sara.png';
function ElCentro() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <h1 className="display-6 fw-semibold mb-3">El centro</h1>
            <p className="mb-4">
              Este bloque presenta el espacio, la filosofia del centro y el
              tipo de experiencia que encontrara quien venga a clase.
            </p>
            <p className="mb-0">
              Puedes ampliar mas adelante con fotos, equipo docente, horarios y
              valores del proyecto.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="section-card card border-0">
              <div className="card-body p-4">
                <img
                    src={Sara}
                    alt="Portada Pranature"
                    className="img-fluid w-100 rounded"
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
