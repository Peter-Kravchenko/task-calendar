import moment from 'moment';
import CalendarGrid from '../../components/calender-grid/calendar-grid';
import Monitor from '../../components/monitor/monitor';
import Title from '../../components/title/title';

function CalendarPage() {
  const today = moment();
  const startDate = today.clone().startOf('month').startOf('week');
  const totalDays = 42;

  return (
    <div>
      <Title />
      <Monitor today={today} />
      <CalendarGrid today={today} startDate={startDate} totalDays={totalDays} />
    </div>
  );
}

export default CalendarPage;
