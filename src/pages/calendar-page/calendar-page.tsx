import { useState } from 'react';
import moment from 'moment';
import CalendarGrid from '../../components/calender-grid/calendar-grid';
import Monitor from '../../components/monitor/monitor';
import Title from '../../components/title/title';
import Modal from '../../components/modal/modal';

const DAYS_IN_CALENDAR_PAGE = 42;

function CalendarPage() {
  const today = moment();
  const totalDays = DAYS_IN_CALENDAR_PAGE;
  const [pivotDay, setPivotDay] = useState(moment());
  const startDate = pivotDay.clone().startOf('month').startOf('week');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    <main>
      {isModalOpen && <Modal closeModal={closeModal} />}
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
        openModal={openModal}
      />
    </main>
  );
}

export default CalendarPage;
