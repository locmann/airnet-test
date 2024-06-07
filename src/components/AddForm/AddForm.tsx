import { FormEvent, useState } from 'react';
import styles from './AddForm.module.scss';
import { useAppContext } from 'context/context.ts';
const AddForm = () => {
  const [todo, setTodo] = useState('');
  const { selectedDay, todosMap } = useAppContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedDay !== null) {
      if (todosMap.has(selectedDay)) {
        const currentTodos = todosMap.get(selectedDay) || [];
        todosMap.set(selectedDay, [...currentTodos, todo]);
      } else {
        todosMap.set(selectedDay, [todo]);
      }
    }

    console.log(todosMap);
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
