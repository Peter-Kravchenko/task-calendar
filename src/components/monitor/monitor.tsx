import './monitor.css';

type monitorProps = {
  pivotDay: moment.Moment;
  prevClickHandler: () => void;
  todayClickHandler: () => void;
  nextClickHandler: () => void;
};

function Monitor({
  pivotDay,
  prevClickHandler,
  todayClickHandler,
  nextClickHandler,
}: monitorProps): JSX.Element {
  return (
    <div className="monitor">
      <div className="date">
        <span className="date month">{pivotDay.format('MMMM')}</span>
        <span className="date year">{pivotDay.format('YYYY')}</span>
      </div>
      <div className="btn-monitor">
        <button onClick={prevClickHandler}>&lt;</button>
        <button onClick={todayClickHandler}>Today</button>
        <button onClick={nextClickHandler}>&gt;</button>
      </div>
    </div>
  );
}

export default Monitor;
