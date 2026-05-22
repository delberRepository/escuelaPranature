function Contacto() {
  return (
    <section className="page-section">
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-lg-8 ">
            <div className="section-card card border-0">
              <div className="card-body p-4 p-lg-5 ">
                <h1 className="display-6 fw-semibold mb-3">Contacto</h1>
                <p className="mb-4">
                  Contacta con nosotros para obtener información o para resolver cualquier duda, estaremos encantados de atenderte.
                </p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="p-3 rounded-3 bg-light h-100 border border-gray-200">
                      <strong>Telefono</strong>
                      <p className="mb-0">+34 619 622 534</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 rounded-3 bg-body-tertiary h-100 border border-gray-200">
                      <strong>Email</strong>
                      <p className="mb-0">pranaturecentrodeyoga@gmail.com</p>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-3 rounded-3 bg-body-tertiary border border-gray-200">
                      <strong>Direccion</strong>
                      <p className="mb-3">Calle Urogallo 21, Madrid</p>

                      <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                        <iframe
                            title="Mapa Pranature"
                            src="https://www.google.com/maps?q=Calle%20Urogallo%2021,%20Madrid&z=16&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                      </div>
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

export default Contacto
