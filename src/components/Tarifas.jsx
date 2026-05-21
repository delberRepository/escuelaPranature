const pricingPlans = [
  {
    title: 'Mensual (grupo) ',
    price: '38 EUR',
    description: '1 hora /semana (4 al mes) ' ,
    letraPequena: '5%dto por cada hora acumulada',
  },
  {
    title: 'Clase grupal ',
    price: '12 EUR',
    description: 'Clases sueltas' ,
  },
  {
    title: 'Clases Duo  ',
    price: '20 EUR ',
    description: 'Precio por persona',
    letraPequena:'',
  },

  {
    title: 'Bono 4 clases (Duo)',
    price: '75 EUR ',
    description: 'Precio por persona',

  },
  {
    title: 'Privadas',
    price: '30 EUR',
    description: 'Precio por clase',
  },
  {
    title: 'Bono 4 clases ',
    price: '100 EUR ',
    description: 'Modalidad privadas',
  },
]
function Tarifas() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-6 fw-semibold">Tarifas</h1>

        </div>

        <div className="row g-4">
          {pricingPlans.map((plan) => (
            <div key={plan.title} className="col-md-4">
              <div className="section-card card border-0">
                <div className="card-body p-4">
                  <h2 className="h4 mb-3">{plan.title}</h2>
                  <p className="display-6 fw-semibold text-gold mb-3">
                    {plan.price}
                  </p>
                  <p className="mb-0" style={{ whiteSpace: 'pre-line' }}>
                    {plan.description}
                  </p>
                  <p className="mb-0" style={{ whiteSpace: 'pre-line' ,fontSize: '10px' }}>
                    {plan.letraPequena}
                  </p>
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
