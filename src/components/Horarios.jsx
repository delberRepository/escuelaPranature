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

]

const getStartMinutes = (time) => {
  const [hours, minutes] = time.split(' - ')[0].split(':').map(Number)
  return hours * 60 + minutes
}

const scheduleTimes = Array.from(
  new Set(
    weeklySchedule.flatMap((day) => day.slots.map((slot) => slot.time)),
  ),
).sort((firstTime, secondTime) => getStartMinutes(firstTime) - getStartMinutes(secondTime))

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
                    <th scope="col" className="schedule-time">
                      Horario
                    </th>
                    {weeklySchedule.map((day) => (
                      <th key={day.day} scope="col" className="text-center">
                        {day.day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scheduleTimes.map((time) => (
                    <tr key={time}>
                      <th scope="row" className="schedule-time">
                        {time}
                      </th>
                      {weeklySchedule.map((day) => {
                        const slot = day.slots.find(
                          (daySlot) => daySlot.time === time,
                        )

                        return (
                          <td key={`${day.day}-${time}`} className="text-center">
                            {slot ? (
                              <span className="schedule-activity">
                                {slot.activity}
                              </span>
                            ) : (
                              <span className="text-secondary">-</span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
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
