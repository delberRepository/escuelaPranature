

function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
      <footer className="footer-shell footer-fixed mt-auto fixed-bottom">
      <div className="container">
        <div className="footer-layout d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <div>
            <p className="mb-0 small">
             <span className="fw-semibold text-dark">Pranature </span>
              centro de danza, yoga y bienestar. {currentYear}
            </p>
          </div>

          <div className="d-flex flex-wrap">
            <p className="mb-0 small" style={{ fontSize: '12px' }}>
                pranaturecentrodeyoga@gmail.com // 619 622 534 <br />
                Calle Urogallo 21, bajo derecha
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
