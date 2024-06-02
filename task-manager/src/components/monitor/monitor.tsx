import './monitor.css';

type monitorProps = {
  today: moment.Moment;
};

function Monitor({ today }: monitorProps): JSX.Element {
  return (
    <div className="monitor">
      <div className="date">
        <span className="date month">{today.format('MMMM')}</span>
        <span className="date year">{today.format('YYYY')}</span>
      </div>
      <div className="btn-monitor">
        <button>&lt;</button>
        <button>Today</button>
        <button>&gt;</button>
      </div>
    </div>
  );
}

export default Monitor;
