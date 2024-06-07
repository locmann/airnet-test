import { useAppContext } from 'context/context.ts';

const ToDoList = () => {
  const { selectedDay, todosMap } = useAppContext();

  let todos = [''];

  if (selectedDay) {
    const currentTodos = todosMap.get(selectedDay);
    if (currentTodos !== undefined) {
      todos = currentTodos;
    }
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo}>{todo}</div>
      ))}
    </div>
  );
};

export default ToDoList;
