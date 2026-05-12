const pricingPlans = [
  {
    title: 'Mensual',
    price: '45 EUR',
    description: 'Acceso a clases regulares durante el mes.',
  },
  {
    title: 'Bono 8 clases',
    price: '70 EUR',
    description: 'Formato flexible para varias actividades.',
  },
  {
    title: 'Privadas',
    price: 'Desde 30 EUR',
    description: 'Sesiones individuales o en pareja.',
  },
]

function Tarifas() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-6 fw-semibold">Tarifas</h1>
          <p className="mb-0">
            Estructura sencilla lista para sustituir por precios reales.
          </p>
        </div>

        <div className="row g-4">
          {pricingPlans.map((plan) => (
            <div key={plan.title} className="col-md-4">
              <div className="section-card card border-0">
                <div className="card-body p-4">
                  <h2 className="h4 mb-3">{plan.title}</h2>
                  <p className="display-6 fw-semibold text-dark mb-3">
                    {plan.price}
                  </p>
                  <p className="mb-0">{plan.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tarifas
