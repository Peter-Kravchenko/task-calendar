import './calendar-grid.css';

function CalendarGrid() {
  const totalDays = 42;
  const daysArray = [...Array(totalDays).keys()];

  return (
    <div className="grid-wrapper">
      {daysArray.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
}

export default CalendarGrid;
