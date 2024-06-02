import moment from 'moment';
import { useState } from 'react';

import './modal.css';

const day = moment().format('YYYY-MM-DD');
const profile = 'default';

function Modal({ closeModal }): JSX.Element {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>(
    () => {
      const savedTasks = localStorage.getItem(`tasks-${profile}-${day}`);
      return savedTasks ? JSON.parse(savedTasks) : [];
    }
  );

  const addTask = (task: { text: string; completed: boolean }) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem(`tasks-${profile}-${day}`, JSON.stringify(newTasks));
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem(`tasks-${profile}-${day}`, JSON.stringify(newTasks));
  };

  const toggleTask = (index: number) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    localStorage.setItem(`tasks-${profile}-${day}`, JSON.stringify(newTasks));
  };

  return (
    <div className="modal-wrapper" onClick={() => closeModal()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div>
          <button className="modal-close" onClick={() => closeModal()}>
            &times;
          </button>
          <input
            type="text"
            placeholder="New Task"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addTask({ text: e.currentTarget.value, completed: false });
                e.currentTarget.value = '';
              }
            }}
          />
          <button onClick={() => toggleTask()}>Add</button>
          <button onClick={() => removeTask()}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
