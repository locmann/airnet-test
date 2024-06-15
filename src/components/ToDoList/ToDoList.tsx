import { useAppContext } from 'context/context.ts';
import styles from './ToDoList.module.scss';
import { saveToLS } from 'utils/utils.ts';

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
      saveToLS(newState);
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
          <div className={styles.todoContent}>
            <input
              id={`li-${index}`}
              type="checkbox"
              checked={todo.isDone}
              onChange={() => handleOnChange(index)}
            />
            <label htmlFor={`li-${index}`}>{todo.value}</label>
          </div>

          <button className={styles.btn}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
