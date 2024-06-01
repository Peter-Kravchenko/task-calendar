import './calendar-grid.css';

function CalendarGrid({ today, startDate, totalDays }) {
  const day = startDate.clone();
  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  return (
    <div className="grid-wrapper">
      {daysMap.map((day, index) => {
        const date = day.date();
        const isToday = today.isSame(day, 'day');
        const isWeekend = day.day() === 0 || day.day() === 6;

        return (
          <div
            key={index}
            className={`cell-wrapper ${isToday ? 'today' : ''} ${
              isWeekend ? 'weekend' : 'weekday'
            }`}
          >
            <div className="day-wrapper">{date}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CalendarGrid;
