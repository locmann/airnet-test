import { TodosObjType } from 'types/types.ts';

export const saveToLS = (data: TodosObjType) => {
  localStorage.setItem('todo', JSON.stringify(data));
};

export const loadFromLS = () => {
  const data = localStorage.getItem('todo');
  if (data !== null) {
    return JSON.parse(data);
  } else {
    return {};
  }
};
