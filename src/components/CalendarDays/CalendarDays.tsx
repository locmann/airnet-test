import styles from './CalendarDays.module.scss';
import { getDay, getDaysInMonth, setDate } from 'date-fns';
import { useAppContext } from 'context/context.ts';
import { useEffect, useState } from 'react';
import Modal from 'components/Modal/Modal.tsx';
import { makeRequest } from 'utils/utils.ts';

const CalendarDays = () => {
  const [active, setActive] = useState(false);
  const { currentDate, setSelectedDay, todosObj } = useAppContext();

  const keys = Object.keys(todosObj);
  const hasTodosDays = keys.map((key) => new Date(key).getDate());
  const daysInMonth = getDaysInMonth(currentDate);
  const q = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  const firstDay = setDate(currentDate, 1);
  const gridDay = getDay(firstDay) === 0 ? 7 : getDay(firstDay);
  const [isDaysOff, setIsDaysOff] = useState('');
  const handleClickOnDay = (day: number) => {
    setActive(!active);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setSelectedDay(new Date(year, month, day));
  };

  const applyStyles = (day: number, isDayOff: string) => {
    let style = hasTodosDays.includes(day) ? `${styles.day} ${styles.active}` : styles.day;
    if (+isDayOff) {
      style += ` ${styles.holiday}`;
    }
    return style;
  };

  useEffect(() => {
    makeRequest(currentDate.getFullYear(), currentDate.getMonth()).then((data) => {
      setIsDaysOff(data);
    });
  }, [currentDate]);

  return (
    <div className={styles.days}>
      {active && (
        <Modal
          active={active}
          setActive={setActive}
        />
      )}
      {q.map((day, index) => {
        return (
          <div
            key={day}
            style={day === 1 ? { gridColumn: gridDay } : {}}
            className={applyStyles(day, isDaysOff[index])}
            onClick={() => handleClickOnDay(day)}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarDays;
