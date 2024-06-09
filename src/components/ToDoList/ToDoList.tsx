import { useAppContext } from 'context/context.ts';
import styles from './ToDoList.module.scss';

const ToDoList = () => {
  const { selectedDay, todosObj, setTodosObj } = useAppContext();
  const today = selectedDay as NonNullable<Date>;

  const handleOnChange = (index: number) => {
    setTodosObj((prevState) => {
      const newState = { ...prevState };
      if (selectedDay !== null) {
        newState[selectedDay.toString()] = newState[selectedDay.toString()].map((todo, idx) =>
          idx === index ? { ...todo, isDone: !todo.isDone } : todo,
        );
      }
      return newState;
    });
  };

  return (
    <ul className={styles.list}>
      {todosObj[today.toString()]?.map((todo, index) => (
        <li
          className={styles.liElement}
          key={index}
        >
          <input
            id={`li-${index}`}
            type="checkbox"
            checked={todo.isDone}
            onChange={() => handleOnChange(index)}
          />
          <label htmlFor={`li-${index}`}>{todo.value}</label>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
