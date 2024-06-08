import { FormEvent, useState } from 'react';
import styles from './AddForm.module.scss';
import { useAppContext } from 'context/context.ts';
const AddForm = () => {
  const [todo, setTodo] = useState('');
  const { selectedDay, setTodosObj } = useAppContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedDay !== null) {
      setTodosObj((prevState) => {
        const newState = { ...prevState };
        if (newState[selectedDay.toString()]) {
          newState[selectedDay.toString()] = [...newState[selectedDay.toString()], todo];
        } else {
          newState[selectedDay.toString()] = [todo];
        }
        return newState;
      });
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label
        className={styles.label}
        htmlFor="todo"
      >
        To do
      </label>
      <input
        type="text"
        id="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddForm;
