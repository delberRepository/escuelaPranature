const weeklySchedule = [
  {
    day: 'Lunes',
    slots: [
      { time: '10:00 - 11:00', activity: 'Yoga' },
      { time: '11:15 - 12:15', activity: 'Danza oriental' },
      { time: '17:30 - 18:30', activity: 'Danza oriental' },
      { time: '18:30 - 19:30', activity: 'Yoga' },
      { time: '19:45 - 20:45', activity: 'Danza oriental' },
    ],
  },
  {
    day: 'Martes',
    slots: [],
  },
  {
    day: 'Miércoles',
    slots: [
      { time: '13:00 - 14:00', activity: 'Danza oriental' },
      { time: '19:30 - 20:30', activity: 'Danza oriental' },
    ],
  },
  {
    day: 'Jueves',
    slots: [
      { time: '18:30 - 19:30', activity: 'Danza oriental' },
      { time: '19:30 - 20:30', activity: 'Yoga' },
    ],
  },
  {
    day: 'Viernes',
    slots: [],
  },
  {
    day: 'Sábado',
    slots: [],
  },
  {
    day: 'Domingo',
    slots: [],
  },
]

function Horarios() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="display-6 fw-semibold">Horarios</h1>
          <p className="mb-0 text-dark">
            Consulta las clases semanales de yoga y danza oriental.
          </p>
        </div>

        <div className="section-card card border-0">
          <div className="card-body p-3 p-lg-4">
            <div className="table-responsive">
              <table className="table schedule-table align-middle mb-0">
                <thead>
                  <tr>
                    <th scope="col">Día</th>
                    <th scope="col">Horario</th>
                    <th scope="col">Actividad</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.map((day) =>
                    day.slots.length > 0 ? (
                      day.slots.map((slot, index) => (
                        <tr key={`${day.day}-${slot.time}`}>
                          {index === 0 ? (
                            <th
                              scope="row"
                              rowSpan={day.slots.length}
                              className="schedule-day"
                            >
                              {day.day}
                            </th>
                          ) : null}
                          <td>{slot.time}</td>
                          <td>{slot.activity}</td>
                        </tr>
                      ))
                    ) : (
                      <tr key={day.day}>
                        <th scope="row" className="schedule-day">
                          {day.day}
                        </th>
                        <td colSpan="2" className="text-secondary">
                          Sin clases
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Horarios
