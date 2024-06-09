import { Dispatch, SetStateAction } from 'react';

export type ContextType = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  selectedDay: Date | null;
  setSelectedDay: Dispatch<SetStateAction<Date | null>>;
  todosObj: TodosObjType;
  setTodosObj: Dispatch<SetStateAction<TodosObjType>>;
};

export type TodoType = {
  isDone: boolean;
  value: string;
};

export type TodosObjType = Record<string, TodoType[]>;

export type ModalPropsType = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};
