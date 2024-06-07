import { FormEvent, useState } from 'react';
import styles from './AddForm.module.scss';
const AddForm = () => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(todo);
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
