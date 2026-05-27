

function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-shell footer-fixed mt-auto fixed-bottom">
      <div className="container">
        <div className="footer-layout d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <div className="footer-brand">
            <p className="mb-0 small footer-text">
              <span className="fw-semibold text-dark">Pranature </span>
              centro de danza, yoga y bienestar. {currentYear}
            </p>
          </div>

          <div className="footer-contact">
            <p className="mb-0 small footer-text footer-contact-text">
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
