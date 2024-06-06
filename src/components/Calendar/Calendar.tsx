import CalendarHeader from 'components/CalendarHeader/CalendarHeader.tsx';
import styles from './Calendar.module.scss';
import CalendarDays from 'components/CalendarDays/CalendarDays.tsx';

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <CalendarHeader />
      <CalendarDays />
    </div>
  );
};

export default Calendar;
