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

export const makeRequest = async (year: number, month: number) => {
  const realMonth = month <= 9 ? `0${month + 1}` : `${month + 1}`;
  const response = await fetch(`https://isdayoff.ru/api/getdata?year=${year}&month=${realMonth}`);
  return await response.text();
};
