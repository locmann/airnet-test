import { Dispatch, SetStateAction } from 'react';

export type MapType = Map<Date, string[]>;

export type ContextType = {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  selectedDay: Date | null;
  setSelectedDay: Dispatch<SetStateAction<Date | null>>;
  todosObj: TodosObjType;
  setTodosObj: Dispatch<SetStateAction<TodosObjType>>;
};

export type TodosObjType = Record<string, string[]>;

export type ModalPropsType = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};
