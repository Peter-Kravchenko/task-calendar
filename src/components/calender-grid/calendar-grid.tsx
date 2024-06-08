import moment from 'moment';
import './calendar-grid.css';

type calendarGridProps = {
  today: moment.Moment;
  pivotDay: moment.Moment;
  startDate: moment.Moment;
  totalDays: number;
  openModal: () => void;
};

function CalendarGrid({
  today,
  pivotDay,
  startDate,
  totalDays,
  openModal,
}: calendarGridProps): JSX.Element {
  const day = startDate.clone();
  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
  const weekDaysMap = daysMap.slice(0, 7);

  return (
    <>
      <div className="grid-header">
        {[...Array(7)].map((_, i) => (
          <div className="cell-header" key={i}>
            {moment(weekDaysMap[i]).format('ddd')}
          </div>
        ))}
      </div>
      <div className="grid-wrapper">
        {daysMap.map((day, index) => {
          const date = day.date();
          const isToday = day.isSame(today, 'day');
          const isSelectedMonth = day.isSame(pivotDay, 'month');
          const isWeekend = day.day() === 0 || day.day() === 6;

          return (
            <div
              onClick={() => {
                openModal();
                console.log(`open modal ${day}`);
              }}
              key={index}
              className={`cell-wrapper ${isToday ? 'today' : ''} ${
                isWeekend ? 'weekend' : 'weekday'
              } ${isSelectedMonth ? '' : 'not-selected-month'}`}
            >
              <div className="row-in-cell">
                <div className="show-day-wrapper">
                  <div className="day-wrapper">{date}</div>
                </div>
                <div>
                  <div className="event-wrapper"></div>
                  {/* Здесь будут события */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CalendarGrid;
