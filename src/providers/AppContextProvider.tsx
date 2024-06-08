import { FC, PropsWithChildren, useState } from 'react';
import { AppContext } from 'context/context.ts';
import { TodosObjType } from 'types/types.ts';

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [todosObj, setTodosObj] = useState<TodosObjType>({});
  return (
    <AppContext.Provider
      value={{ currentDate, setCurrentDate, selectedDay, setSelectedDay, todosObj, setTodosObj }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
