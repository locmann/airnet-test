import { useAppContext } from 'context/context.ts';

const ToDoList = () => {
  const { selectedDay, todosObj } = useAppContext();
  const data = selectedDay ? todosObj[selectedDay.toString()] : [];
  return <div>{data?.map((todo) => <div key={todo}>{todo}</div>)}</div>;
};

export default ToDoList;
