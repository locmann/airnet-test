import { DAYS_OF_THE_WEEK, MONTHS } from 'constants/constants.ts';
import styles from './CalendarHeader.module.scss';
import { useAppContext } from 'context/context.ts';
import { setMonth } from 'date-fns';

const CalendarHeader = () => {
  const { currentDate, setCurrentDate } = useAppContext();
  const monthIndex = currentDate.getMonth();

  const handlePrevMonth = () => {
    const prevMonth = currentDate.getMonth() - 1;
    setCurrentDate(setMonth(currentDate, prevMonth));
  };

  const handleNextMonth = () => {
    const nextMonth = currentDate.getMonth() + 1;

    setCurrentDate(setMonth(currentDate, nextMonth));
  };

  return (
    <div className={styles.header}>
      <div className={styles.manage}>
        <button onClick={handlePrevMonth}>🡄</button>
        {MONTHS[monthIndex]}
        <button onClick={handleNextMonth}>🡆</button>
      </div>
      <div className={styles.days}>
        {DAYS_OF_THE_WEEK.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  );
};

export default CalendarHeader;
