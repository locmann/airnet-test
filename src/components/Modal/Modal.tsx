import styles from './Modal.module.scss';
import { FC } from 'react';
import AddForm from 'components/AddForm/AddForm.tsx';
import { ModalPropsType } from 'types/types.ts';
import ToDoList from 'components/ToDoList/ToDoList.tsx';

const Modal: FC<ModalPropsType> = ({ active, setActive }) => {
  const s = active ? `${styles.modal} ${styles.active}` : styles.modal;
  return (
    <div
      onClick={() => setActive(!active)}
      className={s}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.content}
      >
        <AddForm />
        <ToDoList />
      </div>
    </div>
  );
};

export default Modal;
