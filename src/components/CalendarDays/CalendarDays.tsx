import styles from './CalendarDays.module.scss';
import { getDay, getDaysInMonth, setDate } from 'date-fns';
import { useAppContext } from 'context/context.ts';

const CalendarDays = () => {
  const { currentDate } = useAppContext();
  const daysInMonth = getDaysInMonth(currentDate);
  const q = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const firstDay = setDate(currentDate, 1);
  const gridDay = getDay(firstDay) === 0 ? 7 : getDay(firstDay);

  return (
    <div className={styles.days}>
      {q.map((day) => (
        <div
          key={day}
          style={day === 1 ? { gridColumn: gridDay } : {}}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
