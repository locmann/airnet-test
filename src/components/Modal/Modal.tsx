import styles from './Modal.module.scss';
import { Dispatch, FC, SetStateAction } from 'react';

type PropsType = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

const Modal: FC<PropsType> = ({ active, setActive }) => {
  const s = active ? `${styles.modal} ${styles.active}` : styles.modal;
  return (
    <div
      onClick={() => setActive(!active)}
      className={s}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.content}
      ></div>
    </div>
  );
};

export default Modal;
