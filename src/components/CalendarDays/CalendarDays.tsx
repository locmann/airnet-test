import styles from './CalendarDays.module.scss';
import { getDay, getDaysInMonth, setDate } from 'date-fns';
import { useAppContext } from 'context/context.ts';
import { useState } from 'react';
import Modal from 'components/Modal/Modal.tsx';

const CalendarDays = () => {
  const [active, setActive] = useState(false);
  const { currentDate } = useAppContext();
  const daysInMonth = getDaysInMonth(currentDate);
  const q = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const firstDay = setDate(currentDate, 1);
  const gridDay = getDay(firstDay) === 0 ? 7 : getDay(firstDay);

  return (
    <div className={styles.days}>
      {active && (
        <Modal
          active={active}
          setActive={setActive}
        />
      )}
      {q.map((day) => (
        <div
          key={day}
          style={day === 1 ? { gridColumn: gridDay } : {}}
          className={styles.day}
          onClick={() => setActive(!active)}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
