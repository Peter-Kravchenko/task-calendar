import moment from 'moment';
import CalendarGrid from '../../components/calender-grid/calendar-grid';
import Display from '../../components/display/display';
import Header from '../../components/header/header';

function CalendarPage() {
  const today = moment();
  const startDate = today.clone().startOf('month').startOf('week');
  const totalDays = 42;

  return (
    <div>
      <Header />
      <Display />
      <CalendarGrid today={today} startDate={startDate} totalDays={totalDays} />
    </div>
  );
}

export default CalendarPage;
