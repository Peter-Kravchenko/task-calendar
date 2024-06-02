import { useState } from 'react';
import moment from 'moment';
import CalendarGrid from '../../components/calender-grid/calendar-grid';
import Monitor from '../../components/monitor/monitor';
import Title from '../../components/title/title';

function CalendarPage() {
  const today = moment();
  const [pivotDay, setPivotDay] = useState(moment());
  const startDate = pivotDay.clone().startOf('month').startOf('week');
  const totalDays = 42;

  const prevClickHandler = () => {
    setPivotDay((prev) => prev.clone().subtract(1, 'month'));
  };
  const todayClickHandler = () => {
    setPivotDay(moment());
  };

  const nextClickHandler = () => {
    setPivotDay((prev) => prev.clone().add(1, 'month'));
  };

  return (
    <div>
      <Title />
      <Monitor
        pivotDay={pivotDay}
        prevClickHandler={prevClickHandler}
        todayClickHandler={todayClickHandler}
        nextClickHandler={nextClickHandler}
      />
      <CalendarGrid
        today={today}
        pivotDay={pivotDay}
        startDate={startDate}
        totalDays={totalDays}
      />
    </div>
  );
}

export default CalendarPage;
